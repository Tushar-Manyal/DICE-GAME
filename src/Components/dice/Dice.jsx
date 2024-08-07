import React from 'react'
import "./Dice.css"
// import {Button} from ".Components/buttons/Button
// import styled from 'styled-components'


const Dice = ({toggle}) => {
  return (
    <div className="cont">
        <div className="cont-img">
            <img src="https://i.pinimg.com/564x/7c/61/31/7c6131b9c84541c1ac865e6b15a29e28.jpg" alt="dice"/>
        </div>
        <div className="contain">
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
    </div>
  )
}

export default Dice
// const container01={
//     max-width:1180px,
// }