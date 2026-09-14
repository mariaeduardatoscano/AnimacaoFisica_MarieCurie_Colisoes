import React from "react";
import {useCurrentFrame} from "remotion";
import {progress} from "../progress";
export const Note:React.FC<React.PropsWithChildren<{x:number;y:number;at?:number;size?:number;color?:string}>>=({x,y,at=0,size=24,color="white",children})=>{
  const f=useCurrentFrame();
  return <text x={x} y={y} fill={color} fontSize={size} opacity={progress(f,at,at+18)}>{children}</text>;
};
