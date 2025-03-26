import crypto from "crypto";

/** The number of different cookie banners */
const COOKIE_BANNERS = 3;

/**
 * Converts a Firebase UID into a deterministic cookie banner number.
 *
 * This function hashes the UID using SHA-256 and converts
 * the first 8 hex characters of the hash into a base-10 integer.
 *
 * @param {string} uid The Firebase UID to convert.
 * @returns {number} The cookie banner number.
 */
export function uidToCookieBannerNumber(uid: string): number {
  const hash = crypto.createHash("sha256").update(uid).digest("hex");
  const number = parseInt(hash.slice(0, 8), 16);
  return number % COOKIE_BANNERS;
}
