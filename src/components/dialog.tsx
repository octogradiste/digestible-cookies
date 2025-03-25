"use client";

import { useEffect, useState } from "react";

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
}: Readonly<{
  children: React.ReactNode;
  animate?: boolean;
}>) {
  const [opacity, setOpacity] = useState(animate ? "opacity-0" : "opacity-100");

  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ease-in-out delay-100 duration-400 ${opacity}`}>
      <div className="fixed inset-0 bg-gray-500/75"></div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all max-w-md w-full m-6">
        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
}
