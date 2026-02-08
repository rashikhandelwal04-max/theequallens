export default function PhraseField(){

const phrases = [
"emotions are not gendered",
"pink is not for girls",
"blue is not for boys",
"jobs have no gender",
"toys are for everyone",
"leadership is human",
"fairness matters",
"question stereotypes",
"respect feelings",
"kindness is strength"
];

return (
<div style={{position:"fixed",inset:0,zIndex:1,pointerEvents:"none"}}>
{phrases.map((p,i)=>(
<div key={i}
style={{
position:"absolute",
left:(i*9)%90+"%",
top:(i*7)%90+"%",
background:"#0008",
color:"white",
padding:"4px 8px",
borderRadius:10,
fontSize:12
}}>
{p}
</div>
))}
</div>
);
}
