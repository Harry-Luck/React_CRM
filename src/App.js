import './App.css';
import { Defaultlayout } from './layout/Defaultlayout';
import { Ticket } from './pages/Ticket/ticketpage';
// import { Ticketlist } from './pages/Ticketlist/Ticketlist';
// import { Addtickets } from './pages/new_tickets/add_tickets';
// import Entry from './pages/Entry/entry';
// import { Dashbord } from './pages/Dashbord/dashbord';
function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <Defaultlayout>
        {/* <Dashbord></Dashbord> */}
          {/* <Addtickets></Addtickets> */}
          {/* <Ticketlist></Ticketlist> */}
          <Ticket></Ticket>
      </Defaultlayout>
    </div>
  );
}

export default App;
