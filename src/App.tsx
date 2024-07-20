import "./App.css";
import { useState } from "react";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Nur } from "./components/Ayatulnur";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
// check above components and below return to learn typescript for react

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // For "Person" Component
  const personName = {
    first: "Faouzi",
    last: "Karkari",
  };
  // For "PersonList" component
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
  // For "Button" Component
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    num: number
  ) => {
    console.log("Button Clicked!");
    console.log(event, num);
    setCount(count + 1);
  };
  // For "Input" Component
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <>
      {/* passing in props with ts */}
      <Greet name="Karkari" messageCount={10} isLoggedIn={true} />
      {/* passing in an object as a prop with ts */}
      <Person name={personName} />
      {/* passing in a prop with an array of objects with ts */}
      <PersonList name={nameList} />
      {/* Conditional rendering only accepts three values with ts */}
      <Status status="success" />
      {/* Text is passed in as children prop to Heading with ts */}
      <Heading>Ayat al-Nur</Heading>
      {/* A React Component called within a React Component as Child with ts*/}
      <Nur>
        <Heading>
          ۞ ٱللَّهُ نُورُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ
          كَمِشْكَوٰةٍۢ فِيهَا مِصْبَاحٌ ۖ ٱلْمِصْبَاحُ فِى زُجَاجَةٍ ۖ
          ٱلزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌۭ دُرِّىٌّۭ يُوقَدُ مِن شَجَرَةٍۢ
          مُّبَـٰرَكَةٍۢ زَيْتُونَةٍۢ لَّا شَرْقِيَّةٍۢ وَلَا غَرْبِيَّةٍۢ
          يَكَادُ زَيْتُهَا يُضِىٓءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌۭ ۚ نُّورٌ
          عَلَىٰ نُورٍۢ ۗ يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُ ۚ وَيَضْرِبُ
          ٱللَّهُ ٱلْأَمْثَـٰلَ لِلنَّاسِ ۗ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ ٣٥
        </Heading>
      </Nur>
      {/* Optional messageCount prop */}
      <Greet name="Jamal" isLoggedIn={false} />
      <Greet name="Jamal" isLoggedIn={true} />
      {/* common react event handling: Click and Input */}
      <Button
        handleClick={(event, num) => handleClick(event, num)}
        count={count}
      />
      <Input value={input} handleChange={(event) => handleChange(event)} />
      {/* CSS Styles Container component 
      that uses styles and children as props 
      which makes styling with vanilla CSS much easier 
      as it checks each CSS property for you! */}
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          marginTop: 4,
          textAlign: "center",
        }}
      >
        Kawkaab Al-Durri
      </Container>
    </>
  );
}

export default App;
