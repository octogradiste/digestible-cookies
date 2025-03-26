interface SelectInputProps {
  options: { value: number, label: string }[];
  selected: number;
  onSelect?: (value: number) => void;
}

export function SelectInput({ options, selected, onSelect }: SelectInputProps) {

  return (
    <div className="grid grid-cols-5 gap-4 items-end">
      {options.map((option) => (
        <label key={option.value} className="flex flex-col items-center">
          <input
            type="radio"
            value={option.value}
            className="hidden peer"
            checked={selected == option.value}
            onChange={() => onSelect?.(option.value)} />
          <span className="w-8 h-8 border-1 border-black rounded-full flex items-center justify-center peer-checked:border-3 peer-checked:font-bold">
            {option.value}
          </span>
        </label>
      ))}
    </div>
  );
}

