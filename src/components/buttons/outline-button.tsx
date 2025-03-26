import { ButtonProps } from "@/src/models/button/button-props";

export default function OutlineButton({ title, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded w-full mb-2 ${className}`}
    >
      {title}
    </button>
  );
}
