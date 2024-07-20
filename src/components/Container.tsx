// Passing in styles as props rather than hard coded in and how to type define them
type ContainerProps = {
  styles: React.CSSProperties;
  children: string;
};
// Having styles passed in can make using which vanilla CSS properties much easier!
export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>{props.children}</div>;
};
