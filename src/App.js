import PhraseField from "./components/PhraseField";
import Intro from "./components/Intro";
import About from "./components/About";
import Audience from "./components/Audience";
import Workshops from "./components/Workshops";
import MatchGame from "./components/MatchGame";
import ScenarioGame from "./components/ScenarioGame";
import Dashboard from "./components/Dashboard";

export default function App(){
  return (
    <>
      <PhraseField/>
      <Intro/>
      <About/>
      <Audience/>
      <Workshops/>
      <MatchGame/>
      <ScenarioGame/>
      <Dashboard/>
    </>
  );
}
