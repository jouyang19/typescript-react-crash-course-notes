// Typing for multiple props; Optional prop messageCount; check App.jsx
type GreetProps = {
  name: string;
  messageCount?: number; // "?" Optional Operand; makes field optional
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest, please log in to view messages."}
      </h2>
    </div>
  );
};
