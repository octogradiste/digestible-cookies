interface OutlineButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function OutlineButton({ title, className, onClick }: OutlineButtonProps) {
  return (
    <button className={`bg-transparent hover:bg-black text-black font-bold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded w-full mb-2 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}
