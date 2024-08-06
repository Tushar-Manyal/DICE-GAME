import React from 'react'
import "./Dice.css"
// import {Button} from ".Components/buttons/Button
// import styled from 'styled-components'


const Dice = ({toggle}) => {
  return (
    <div className="cont">
        <div className="cont-img">
            <img src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pshkB8cFTeC0n2zTZpuTOvH-w52JqiW~McrAYdXy4uZ8E84yk3vUIH7lp-okAo~vHYGf19coALvU47krcV2Y1OUhfi6erLJmhgF8mpwBxUQHzE33e6~LC3zn5ZFXKAlQ4kQj769i4a~aKuH4zw14fDDzrnZhf6pOz71MhK360iflgQNPEtTSJscFZG2dPNbOQLHHPOl6nZpcNcH3GBO-ijuEe2tyMbJVSpg8uSZgjgpM3PAPXWazEtxmFGY-NE~p99MTIxXjn2Rq~VPE6FJO~jhE-BhPTUd8vF-4L8mcvyirfnR2a~T6ThWezvVnZF8~ku~E0EQ1mPPnm-gBcyxyPw__" alt="dice"/>
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