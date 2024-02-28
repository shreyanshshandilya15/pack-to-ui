import * as React from "react";
import { ReactNode } from "react";

type PropsType={
    children:React.ReactNode;
};

const Button=({children}:PropsType)=>{
    return (
       <button
         style={{
            padding:"10px 20px",
            fontSize:"1.20em",
            borderRadius:"5px",
            cursor:"pointer",
            backgroundColor:"blue",
            color:"white",
            border:"none",
         }}
       >
        {children}
       </button>
    )
}
export {Button};