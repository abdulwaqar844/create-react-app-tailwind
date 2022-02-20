import "./styles/output.css";
import ApplicationForm from "./Form/ApplicationForm";
import PrimarySection from "./Form/PrimarySection";
import Properties from "./Form/Properties";
import Assets from "./Form/Assets";
import Liablities from "./Form/liabilites";
function App() {
  return (
    <div>
      <ApplicationForm />
      <PrimarySection />
      <Properties />
      <Assets />
      <Liablities />
    </div>
  );
}

export default App;
