// import React, { useState } from 'react'
import styled from 'styled-components'



const RoleDice = ({currentDice,roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`dicelogo/dice_${currentDice}.png`} alt="dice1"/>
        </div>
        <p>Click On The Dice Role</p>
        
    </DiceContainer>

  )
}

export default RoleDice
const DiceContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
line-height:15px;
p{
    font-size:24px;
    font-weight:400;
}

`