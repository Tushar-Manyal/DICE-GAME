// import React from 'react';
// import New1 from './New1';
// import Lucha from './Lucha';
// import List1 from './List1';

// function App() {
//   return(
//     <>
//     <New1/>
//     <Lucha/>
//     <List1/>
//     </>
//   )      
// }
// export default App;

////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import Card from "./Card"

// function App(){
//   return (
//     <>
//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>
//     </>
    
//   )
// }
// export default App;

///////////////////////////////////////////////////////////////////////////

// import React from "react";
// import Namedata from "./Namedata";
// function App(){
//   return (
//     <>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     <Namedata name1="Tushar" department1="information science" study1="I am interested in making projects of web development with reactjs which mostly used in the world." year1="2024"/>
//     </>
//   );
// }
// export default App;

///////////////////////////////////////////////////////////////////////////////////////////

// import Usergreeting from './Usergreeting';
// function App(){
//   return (
//     <>
//     <Usergreeting isLoggedIn={false} username="Brocode "/> 
//     </>
//   );
// }
// export default App

///////////////////////////////////////////////////////////////////////

// import ListBro from "./ListBro.jsx"
// function App(){
//   return (
//     <>
//     <ListBro/>
//     </>
//   )
// }
// export default App

///////////////////////////////////////////////////////////////

// import EventBro from "./Components/EventBro"
// import List1 from "./Components/List1"
// import New1 from "./Components/New1"
// import Shoes from "./Components/shoes/Shoes.jsx"
// import UseState from "./Components/usestatehook/UseState"
// import "./ToDoApp.css"
import { useState } from "react"
import Dice from "./Components/dice/Dice.jsx"
import GamePlay from "./Components/dice/GamePlay.jsx"

function App(){
  const [isGameStart,setIsGameStart]=useState(false);

 function toggleGame(){
  setIsGameStart((prev)=>!prev);
 };

  return (
    <>
    {/* <Shoes/> */}
    {isGameStart ? <GamePlay/> : <Dice toggle={toggleGame}/>}
    {/* <Dice/> */}
    </>
  );
}
export default App





