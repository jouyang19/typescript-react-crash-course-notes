// Type defining another react component as a child prop to this component. Check App.jsx
type NurProps = {
  children: React.ReactNode;
};

export const Nur = (props: NurProps) => {
  return <div>{props.children}</div>;
};
