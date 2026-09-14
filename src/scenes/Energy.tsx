import {useCurrentFrame} from "remotion";
import {palette, energyShares} from "../data";
import {progress} from "../progress";
import {Draw} from "../components/Draw";
import {Note} from "../components/Note";
export const Energy=()=>{
const f=useCurrentFrame();
let total=0;
return <>
        {energyShares.map((share,i)=>{
          const start=total;total+=share;
          const a=start/100*2*Math.PI-Math.PI/2;
          const extent=Math.max(0,Math.min(share,progress(f,35,160)*100-start));
          const b=a+extent/100*2*Math.PI;
          return extent>0?<path key={i} d={`M185 305 L${185+108*Math.cos(a)} ${305+108*Math.sin(a)} A108 108 0 ${extent>50?1:0} 1 ${185+108*Math.cos(b)} ${305+108*Math.sin(b)} Z`} fill={palette[i]} fillOpacity={0.8} stroke="white" strokeWidth={2}/>:null;
        })}
        <Draw d="M74 302 C65 148 331 166 299 326 C280 464 55 427 74 302" at={25}/>
        {["Energia térmica","Onda sonora","Trabalho de","deformação"].map((label,i)=><Note key={label} x={64} y={463+i*37} at={75+i*15} size={21} color={palette[Math.min(i,2)]}>{label}{i<2?`  ${energyShares[i]}%`:i===3?"  30%":""}</Note>)}
        <Note x={940} y={185} size={27} at={100}>A conta da energia</Note>
        <Draw d="M940 199 Q1060 193 1210 202" at={112} color={palette[0]}/>
        <Note x={940} y={255} size={28} at={125}>ΔK = K<tspan baselineShift="sub" fontSize={18}>f</tspan> − K<tspan baselineShift="sub" fontSize={18}>i</tspan> &lt; 0</Note>
        <Draw d="M974 278 Q957 311 986 329 M974 322 L986 329 L987 315" at={155} color={palette[0]}/>
        <Note x={940} y={379} size={27} at={185}>W<tspan baselineShift="sub" fontSize={17}>dissipado</tspan> = |ΔK|</Note>
        <Draw d="M933 345 Q1080 333 1215 346 L1217 400 Q1056 412 931 400 Z" at={200} color={palette[2]}/>
        <Note x={940} y={470} size={17} at={220}>Exemplo ilustrativo: K<tspan baselineShift="sub">f</tspan> = 0.</Note>
        <Note x={940} y={502} size={17} at={230}>Percentuais de K<tspan baselineShift="sub">i</tspan>.</Note>
        <Note x={940} y={534} size={17} at={240}>Referencial do centro de massa.</Note>
      </>;
};
