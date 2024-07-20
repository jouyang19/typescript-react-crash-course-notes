// Type defining for input event handling; check App.tsx and Button.tsx to learn more about event handling
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // React.ChangeEvent and HTMLInputElement can only be memorized or referred to in the future
};

export const Input = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
