"use client";

import { useEffect, useState } from "react";

const hiddenClass = "opacity-0 pointer-events-none";
const visibleClass = "opacity-100";

export function DialogTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="font-bold text-xl mb-2">
      {children}
    </p>
  );
}

export function DialogContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-sm mb-6">
      {children}
    </div>
  );
}

export function DialogActions({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-sm">
      {children}
    </div>
  );
}

export default function Dialog({
  children,
  animate = true,
  hidden = false,
}: Readonly<{
  children: React.ReactNode;
  animate?: boolean;
  hidden?: boolean;
}>) {
  const [opacity, setOpacity] = useState(animate ? hiddenClass : visibleClass);

  useEffect(() => {
    setOpacity(hidden ? hiddenClass : visibleClass);
  }, [hidden]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity delay-100 ease-in-out duration-400 ${opacity}`}>
      {hidden ? null :
        <>
          <div className="fixed inset-0 bg-gray-500/75"></div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all max-w-md w-full m-6">
            <div className="px-6 py-5">
              {children}
            </div>
          </div>
        </>
      }
    </div>
  );
}
