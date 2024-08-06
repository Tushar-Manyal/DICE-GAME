import React from 'react'
import "./GamePlay.css"
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
// import {Button} from ".Components/buttons/Button.js"


const GamePlay = () => {
    const [score,setScore]=useState(0);
    const [selectNo,setSelectNo]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState("");


    
    const generateRandomNo=(min,max)=>{
        console.log( Math.floor(Math.random()*(max-min)+min));
        return Math.floor(Math.random()*(max-min)+min);
    };

    const roleDice=()=>{
        if(!selectNo){
            setError('You have not selected any number');
            return;
        }
        const randomNum=generateRandomNo(1,7)
        setCurrentDice((prev)=>randomNum)

        if (selectNo===randomNum){
            setScore((prev)=>prev+randomNum);
        }
        else{
            setScore((prev)=>prev-1);
        }
        setSelectNo(undefined);
    

    };
    


  return (
    <MainContainer>
    <div className='top-section'>
    <TotalScore score={score}/>
    <NumberSelect
    error={error}
    selectNo={selectNo}
    setSelectNo={setSelectNo}
    setError={setError}
    />
    </div>
    <RoleDice
    currentDice={currentDice} roleDice={roleDice}
    />
    <div className="btns">
        <button className="new1">Reset</button>
        <button className="new">Show</button>
    </div>

    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer=styled.main`

.top-section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.new1{
        height:35px;
        width:356px;
        background-color: black;
        color:rgb(255, 255, 255);
        border-radius:5px;
        margin-top:20px;
        display:block;
        line-break: auto;
        border:none;
        font-size:medium;
        // gap:5px;
        line-height:10px; 
    }
.new{
        line-height:10px;
        height:30px;
        width:356px;
        background-color: white;
        color:black;
        border-radius:5px;
        margin-top:25px;
        display:block;
        line-break: auto;
        border:none;
        font-size:medium;
        // gap:5px;
        line-height:10px; 
        border:1px solid black;
        // margin-bottom:20px;

        
    }
    .new1:hover{
        background-color: rgb(255, 255, 255);
        color:black;
        border:1px solid black;
        transition: width 0s, height 0s, background-color 0.1s;
        cursor:pointer;
    }
    .new:hover{
        height:35px;
        background-color: black;
        color:white;
        border:1px solid black;
        transition: width 0s, height 0s, background-color 0.1s;
        cursor:pointer;

    }
    .btns{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:5px;
        line-height:10px;
        margin-bottom:20px;
        padding-bottom:20px;
        // background-color:blue;
        // height:180px;

    }`