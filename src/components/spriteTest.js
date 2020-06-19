import React from 'react'
import sprites from './msfGearSpritemap.png'


const number = 100
const offSet = 0.260417;

const RenderSprites = ({count}) => {
   
    let value = offSet * count
   return (
  
       <div
         style={{
           backgroundImage: `url(${sprites})`,
           backgroundPosition: `0px ${value}%`,
           maxWidth: "100%",
           height: "30px" ,
           width: "30px",
           backgroundRepeat: "no-repeat",
           backgroundSize: "100%",
           margin: "3px"
         }}
       ></div>
     
   );
}

export default RenderSprites