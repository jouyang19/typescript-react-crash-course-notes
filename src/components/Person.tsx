// Typing for a prop with an object. ; check App.jsx and Person.types.ts
import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
