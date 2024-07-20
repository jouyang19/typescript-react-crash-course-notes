# TypeScript with React Tutorial

Lesson notes pulled from [Codevolution's React TypeScript Tutorials Playlist on Youtube](https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK).

These lesson notes assumes that the reader has a basic understanding of React.

## Typing Props

### Basic Props

---

- To type up props, you will need to first create a `type` for the props of a component. Types are more flexible than `interface`'s so we will stick with types for now.
- `?` makes a specific prop optional. In this example, `messageCount` is an optional prop to pass in.
- In the parenthesis for the component, be sure to add in the new Props type for props.
- To add a default value to a specific prop, destructure it out of props and add a value. In this example, `messageCount` in props has a default value of `0` if no value is passed in.

```jsx
// Typing for multiple props; Optional prop messageCount; check App.jsx
type GreetProps = {
  name: string,
  messageCount?: number, // "?" Optional Operand; makes field optional
  isLoggedIn: boolean,
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
```

Now we can return the Greet component as JSX with the props passed in as so:

```jsx
<Greet name="Karkari" messageCount={10} isLoggedIn={true} />
```

Each prop will be type checked. So in this case, `name` has to be a `string`, `messageCount` a `number`, and `isLoggedIn` as a `boolean`.

### Passing Objects as a Prop

---

We need to create a type for the props passed into the following `Person` component:

```jsx
export const Person = (props) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
```

To do so, we write a `type` with a value of an object, and within that object, we define the types for `first` and `last` name:

```jsx
type PersonProps = {
    name: {
        first: string
        last: string
    }
}
```

Finally, we need to define the props within the parenthesis of the component by adding `props: PersonProps` within the parenthesis:

```jsx
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
```

So then we can pass in props like so:

```jsx
<Person name={personName} />
```

And this will ensure that `name` is an object that has a `first` name that is a `string` and a `last` name that is a `string`

### Passing an Array of Objects as Props

---

To define the types of an array of objects for the follow component:

```jsx
export const PersonList = (props) => {
  return (
    <div>
      {props.name.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
```

you can create a type for this by writing the following:

```jsx
type PersonListProps = {
  name: { first: string, last: string }[],
};
```

And this will ensure that the `first` and `last` name of every object in the array passed in as a prop will have to be a `string`.

Lastly, don't forget to specify the type of the props passed in:

```jsx
export const PersonList = (props: PersonListProps) => {...};
```

With this you can return this component as JSX like so:

```jsx
PersonList name={nameList} />
```

with the following `nameList`:

```jsx
const nameList = [
  {
    first: "Jamal",
    last: "Karkari",
  },
  {
    first: "Omar",
    last: "Karkari",
  },
  {
    first: "Marouen",
    last: "Jedoui",
  },
];
```

### Typing Specific Strings as Types for a Prop

---

For the following component, what if we wanted to only pass in three conditional values and no other string?

```jsx
export const Status = (props) => {
  let message: string = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
```

With TypeScript, we can specify which values can only be passed in as a prop:

```jsx
type StatusProps = {
  status: "loading" | "success" | "error",
};
```

Don't forget to add in the type for props!

```jsx
export const Status = (props: StatusProps) => {...}
```

We can use the component like so:

```jsx
<Status status="success" />
```

In our example, the `status` prop will only accept three values: `success`, `loading`, and `error`.

### Passing Child Components as Props

---

How do we define types for a React component that is passed in as a child to another component? Let's take a look at this sample parent component:

```jsx
export const Nur = (props) => {
  return <div>{props.children}</div>;
};
```

We can define React component children by using a specific React-specific type called `React.ReactNode`. For `Nur` component we can define a type named `NurProps`:

```jsx
type NurProps = {
  children: React.ReactNode,
};
```

Don't forget to define props of `Nur` parent component with `NurProps` type!

```jsx
export const Nur = (props: NurProps) => {...}
```

Now, we can encapsulate another React component within the parent component, in this case, a `Heading` component within a `Nur` component:

```jsx
<Nur>
  <Heading>
    ۞ ٱللَّهُ نُورُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍۢ
    فِيهَا مِصْبَاحٌ ۖ ٱلْمِصْبَاحُ فِى زُجَاجَةٍ ۖ ٱلزُّجَاجَةُ كَأَنَّهَا
    كَوْكَبٌۭ دُرِّىٌّۭ يُوقَدُ مِن شَجَرَةٍۢ مُّبَـٰرَكَةٍۢ زَيْتُونَةٍۢ لَّا
    شَرْقِيَّةٍۢ وَلَا غَرْبِيَّةٍۢ يَكَادُ زَيْتُهَا يُضِىٓءُ وَلَوْ لَمْ
    تَمْسَسْهُ نَارٌۭ ۚ نُّورٌ عَلَىٰ نُورٍۢ ۗ يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن
    يَشَآءُ ۚ وَيَضْرِبُ ٱللَّهُ ٱلْأَمْثَـٰلَ لِلنَّاسِ ۗ وَٱللَّهُ بِكُلِّ
    شَىْءٍ عَلِيمٌۭ ٣٥
  </Heading>
</Nur>
```

And this will be displayed in the browser like so:
![Ayatulnur](./src/assets/Screenshot2.png)

Good job so far! Now we will move on to a more trikier subject: Events

### Event Typing as Props

---

We will now see how to add types to some of the most common event handling.

**onClick**

Let's say we want to add type to a click event to this isolated `Button` component:

```jsx
export const Button = (props) => {
  return (
    <div>
      <h2>Count: </h2>
      <h3>{props.count}</h3>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  );
};
```

First, we would need to create a prop type for props that specifies that only a specific event type can be passed in. For this, the React team has a named a special type for this called `React.MouseEvent` in their @types react library. It will return `void` because it will point to a callback Function. The `<HTMLButtonElement>` is an additional, but optional type you can tack on:

```jsx
type ButtonProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => void,
  count: number,
};
```

Next, add this type to Button:

```jsx
export const Button = (props: ButtonProps) => {...}
```

Then, create a `handleSubmit` function with the correct types we used before:

```jsx
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement>,
  num: number
) => {
  console.log("Button Clicked!");
  console.log(event, num);
  setCount(count + 1);
};
```

Finally, pass in the function to `handleClick` as props to the `Button` component.

```jsx
<Button handleClick={(event, num) => handleClick(event, num)} count={count} />
```

**onChange**

The `onChange` event typing is very similar to the onClick event typing, the only difference is in the React type:

```jsx
type InputProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, // React.ChangeEvent and HTMLInputElement can only be memorized or referred to in the future
};

export const Input = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
```

Define a handleChange function with the right typing:

```jsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInput(event.target.value);
};
```

and return as JSX the `Input` component like so:

```jsx
<Input value={input} handleChange={(event) => handleChange(event)} />
```

### Styles Typing as Props

---

Normally one would style CSS in JSX like so:

```jsx
export const Container = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        marginTop: 4,
        textAlign: "center",
      }}
    >
      Hello world!
    </div>
  );
};
```

However, it would also be possible to pass in styles as props:

```jsx
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          marginTop: 4,
          textAlign: "center",
        }}
      >
```

To do this, we need to define a type using a special React type named `React.CSSProperties` like so:

```jsx
type ContainerProps = {
  styles: React.CSSProperties,
  children: string,
};
```

We'll be using children to pass in a `Header` component with text in it.

Rewrite the `Container` component to pass in type-checked CSS styles and child components like so:

```jsx
export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>{props.children}</div>;
};
```

That's it!

### useState Hook

### Child Components as Props

```jsx
type HeadingProps = {
  children: string,
};

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
```

With this, we can pass strings as children to `Heading` component:

```jsx
<Heading>Sample Text</Heading>
```
