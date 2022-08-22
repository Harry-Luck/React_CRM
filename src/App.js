import './App.css';
import { Defaultlayout } from './layout/Defaultlayout';
import Entry from './pages/Entry/entry';
function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <Defaultlayout>send message</Defaultlayout>
    </div>
  );
}

export default App;
