// Defining the type for a click event on a button.
type ButtonProps = {
  // how to pass in the optional event; HTMLButtonElement optional and is already included in vanilla JS; React.MouseEvent from @types react library
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => void;
  count: number;
};

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <h2>Count: </h2>
      <h3>{props.count}</h3>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};
