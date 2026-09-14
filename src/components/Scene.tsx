import {AbsoluteFill,useCurrentFrame} from "remotion";
import {progress} from "../progress";
import {palette} from "../data";
import {Draw} from "./Draw";
import {Note} from "./Note";
import {Energy} from "../scenes/Energy";
import {Restitution} from "../scenes/Restitution";
export const Scene=({number}:{number:6|7})=>{
const f=useCurrentFrame();
return <AbsoluteFill style={{opacity:progress(f,0,15)*(1-progress(f,400,419))}}>
    <svg width="1280" height="720" viewBox="0 0 1280 720" style={{fontFamily:"'Segoe Print', 'Comic Sans MS', cursive",filter:"drop-shadow(0 2px 2px #000)"}}>
      <Note x={50} y={100} size={17} color={palette[1]}>colisões / 0{number}</Note>
      <Note x={50} y={143} size={29}>{number===6?"A energia se transforma":"Grudou ou rebateu?"}</Note>
      <Draw d="M49 155 Q173 164 333 151" at={10} color={palette[1]} width={3}/>
      {number===6?<Energy/>:<Restitution/>}</svg></AbsoluteFill>;
};
