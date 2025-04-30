import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const serviceAccount = JSON.parse(
  fs.readFileSync(new URL('../serviceAccountKey.json', import.meta.url), 'utf8')
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
const COLLECTION_NAME = 'results';

async function exportCollection() {
  const snapshot = await db.collection(COLLECTION_NAME).get();
  const data = {};
  snapshot.forEach(doc => {
    data[doc.id] = doc.data();
  });

  fs.writeFileSync(`${COLLECTION_NAME}.json`, JSON.stringify(data, null, 2));
  console.log(`Exported ${snapshot.size} documents to ${COLLECTION_NAME}.json`);
}

exportCollection();

