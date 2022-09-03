import './App.css';
import { Ticket } from './pages/Ticket/ticketpage';
import { Ticketlist } from './pages/Ticketlist/Ticketlist';
import { Addtickets } from './pages/new_tickets/add_tickets';
import Entry from './pages/Entry/entry';
import { Dashbord } from './pages/Dashbord/dashbord';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoute } from './components/private-route/privateroute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route exact path ='/' element ={<Entry />}></Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashbord></Dashbord></PrivateRoute>}></Route>
            <Route path='/addtickets' element ={<PrivateRoute> <Addtickets /> </PrivateRoute>}> </Route>
            <Route path='/tickets' element ={<PrivateRoute><Ticketlist /> </PrivateRoute>}></Route>
            <Route path='/ticket/:tId' element={<PrivateRoute><Ticket /></PrivateRoute>}></Route>
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
