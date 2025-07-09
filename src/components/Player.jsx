import { useState, useRef } from "react";

export default function Player() {

const [changeName,setChangeName]=useState('')
const playerName=useRef()
 
 function handleClick(){
setChangeName(playerName.current.value)
 }
  return (
    <section id="player">
      <h2>Welcome {changeName? changeName:'unknown'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}





















// import { useState, useRef } from "react";

// export default function Player() {
// const [changeName,setChangeName]=useState('')
// const [submitName,setSubmitName]=useState('UNKNOWN')

// function nameHandler(event){
// setChangeName(event.target.value)
// }
 
//  function handleClick(){
// setSubmitName(changeName)
//  }
//   return (
//     <section id="player">
//       <h2>Welcome {submitName}</h2>
//       <p>
//         <input type="text" onChange={nameHandler}/>
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
