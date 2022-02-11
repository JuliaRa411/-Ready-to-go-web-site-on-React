 

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import BeforeJourney from "./BeforeJourney.js";
import Deals from "./Deals.js";
import Contacts from "./Contacts.js";
import Vehicles from "./Vehicles.js";
import Logic from "./Logic";
import Footer from "./Footer.js";
 
 
 
 
 
function App() {
 
  return <Router>

 
<nav>
<Link  to ="/" className="link"> Home</Link>
<Link  to ="/vehicles" className="link"> Vehicles</Link>
<Link  to ="/deals" className="link"> Deals</Link>
<Link  to ="/BeforeJourney" className="link"> Before your Journey</Link>
<Link  to ="/contacts" className="link"> Contacts</Link>
 
</nav>

<Routes>

<Route  path = "/" element = {<Logic/>}/>
<Route path="/BeforeJourney"element ={<BeforeJourney/>} />  
<Route path="/deals"  element ={<Deals/>} />  
<Route path="/contacts"  element ={<Contacts/>} />  
<Route path="/vehicles"  element ={<Vehicles/>} />  
</Routes>
<Footer/> 
</Router>


}

export default App;

 