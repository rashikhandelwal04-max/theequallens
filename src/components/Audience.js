export default function Audience(){

const tags=["Schools","Learning Centers","NGOs","Youth Programs","Age 10–12","Educators"];

return (
<section style={{background:"#39a7ff",padding:"120px 10vw"}}>
<h2>Who Is This For</h2>

<div style={{display:"flex",flexWrap:"wrap",gap:14}}>
{tags.map(t=>(
<div key={t} style={{
background:"#111",
color:"white",
padding:"12px 18px",
borderRadius:30
}}>
{t}
</div>
))}
</div>

</section>
);
}
