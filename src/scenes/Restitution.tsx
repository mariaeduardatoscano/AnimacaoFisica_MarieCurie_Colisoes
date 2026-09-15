import {useCurrentFrame} from "remotion";
import {palette} from "../data";
import {progress} from "../progress";
import {Draw} from "../components/Draw";
import {Note} from "../components/Note";
export const Restitution=()=>{
const f=useCurrentFrame(), e=progress(f,85,265);
const t=f%180;
const gap=70-50*progress(t,0,45);
return <>
        <Note x={72} y={220} color={palette[2]} size={33} at={25}>e = {e.toFixed(2).replace(".",",")}</Note>
        <Draw d="M67 257 Q197 253 325 257" at={30} width={3}/>
        {Array.from({length:11},(_,i)=><Draw key={i} d={`M${67+i*25.8} 256 v${i%5===0?25:13}`} at={35+i*3}/>)}
        <circle cx={67+258*e} cy={256} r={6} fill={palette[2]} opacity={progress(f,65,80)}/>
        <Note x={60} y={311} at={50} size={19}>0</Note><Note x={179} y={311} at={60} size={19}>0,5</Note><Note x={318} y={311} at={70} size={19}>1</Note>
        {[false,true].map((elastic,j)=><g key={j} opacity={progress(f,75+j*30,100+j*30)}>
          {[0,1].map(i=><circle key={i} cx={193+(i===0?-1:1)*(gap+(elastic?50*progress(t,50,110):0))} cy={373+j*134} r={20} fill={palette[i]} stroke="white" strokeWidth={2}/>)}
          <Note x={64} y={420+j*134} size={20}>e = {j} : {elastic?"rebatem":"ficam unidos"}</Note>
        </g>)}
        <Note x={942} y={180} at={95} size={27}>Velocidades relativas</Note>
        <Note x={945} y={259} at={120} size={29}>e =</Note>
        <Note x={1010} y={233} at={125} size={24}>V<tspan baselineShift="sub" fontSize={17}>afastamento</tspan></Note>
        <Draw d="M1003 249 L1210 249" at={130}/>
        <Note x={1010} y={283} at={135} size={24}>V<tspan baselineShift="sub" fontSize={17}>aproximação</tspan></Note>
        <Note x={945} y={362} at={155} size={29}>=</Note>
        <Note x={1010} y={336} at={160} size={25}>V<tspan baselineShift="sub" fontSize={17}>2f</tspan> − V<tspan baselineShift="sub" fontSize={17}>1f</tspan></Note>
        <Draw d="M1004 352 L1197 352" at={165}/>
        <Note x={1010} y={388} at={170} size={25}>V<tspan baselineShift="sub" fontSize={17}>1i</tspan> − V<tspan baselineShift="sub" fontSize={17}>2i</tspan></Note>
        <Draw d="M941 421 Q1080 429 1205 418" at={185} color={palette[2]} width={3}/>
        <Note x={940} y={465} at={195} size={20} color={palette[2]}>0 &lt; e &lt; 1</Note>
        <Note x={940} y={499} at={205} size={18}>parcialmente inelástica</Note>
        <Note x={940} y={548} at={220} size={16}>Colisão em um eixo; V₁ᵢ &gt; V₂ᵢ.</Note>
      </>;
};
