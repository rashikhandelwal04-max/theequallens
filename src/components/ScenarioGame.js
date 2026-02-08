import { useState } from "react";

export default function ScenarioGame(){

const [msg,setMsg]=useState("");

return (
<section style={{background:"#b388ff",padding:"120px 10vw"}}>
<h2>Scenario Challenge</h2>

<p>Someone says: “Girls are bad at sports.”</p>

<button onClick={()=>setMsg("Correct — challenge bias.")}>Challenge</button>
<button onClick={()=>setMsg("Not ideal — silence supports bias.")}>Ignore</button>

<h3>{msg}</h3>

</section>
);
}
