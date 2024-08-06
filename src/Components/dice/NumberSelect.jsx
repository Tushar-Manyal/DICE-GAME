import React from 'react'
import "./NumberSelect.css"
import styled from 'styled-components'
// import { useState } from "react"


const NumberSelect = ({ setError,error,selectNo,setSelectNo}) => {

    
    const arr=[1,2,3,4,5,6];
    const numberSelectorHandler=(value)=>{
        setSelectNo(value);
        setError("");
    }
    console.log(selectNo);
  return (
    <NumbeSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
        {arr.map((value,i)=>(
            <Box
            isSelect={value===selectNo}
            onClick={()=>numberSelectorHandler(value)}
            key={i} 
            >{value}
            </Box>
            

        ))}
        
        </div>
    <p>Select Number</p>


    </NumbeSelectorContainer>
 
  )
}

export default NumberSelect
const NumbeSelectorContainer=styled.div`
line-height:5px;
padding-top:40px;
display:flex;
flex-direction:column;
align-items:end;

.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:400;

}
.error{
    color:red;
}
`
const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
cursor:pointer;
color:${(props)=>(props.isSelect ? "white" : "black")};
display:grid;
border-radius:4px;
place-items: center;
font-size:30px;
font-weight: 650;

background-color:${(props)=>(props.isSelect ? "black" : "white")}`

