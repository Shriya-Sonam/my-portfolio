import { JSX } from "react";

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-sm font-bold text-white">
        S
      </span>
      <span className="text-sm font-semibold tracking-wide text-slate-900">
        Shriya Sonam
      </span>
    </div>
  );
}
