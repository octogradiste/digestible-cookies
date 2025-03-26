import { ButtonProps } from "@/src/models/button/button-props";


export default function FilledButton({ title, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white font-bold py-3 px-6 rounded ${className}`}
    >
      {title}
    </button>
  )
}
