import { useState } from "react";

export default function MatchGame(){

const items=[
{t:"Boys don’t cry",bias:true},
{t:"Anyone can lead",bias:false},
{t:"Pink only for girls",bias:true},
{t:"All jobs are for everyone",bias:false}
];

const [score,setScore]=useState(0);

return (
<section style={{background:"#5be7a9",padding:"120px 10vw"}}>
<h2>Match Fair vs Stereotype</h2>

{items.map((it,i)=>(
<div key={i} style={{background:"#222",color:"white",padding:12,margin:10}}>
{it.t}
<button onClick={()=>setScore(s=>s+(it.bias?1:0))}>Stereotype</button>
<button onClick={()=>setScore(s=>s+(!it.bias?1:0))}>Fair</button>
</div>
))}

<h3>Score: {score}</h3>

</section>
);
}
