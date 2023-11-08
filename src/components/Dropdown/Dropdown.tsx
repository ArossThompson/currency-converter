interface DropdownProps { 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    name: string;
  }[];
}

export const Dropdown = (props: DropdownProps) => { 
  return (
    <select
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name} ({option.value})
        </option>
      ))}
    </select>
  )
}