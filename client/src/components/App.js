import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import CCategory from "./ccategorys/CCategory"
import EmergencyContact from "./emergencycontact/EmergencyContact"
import NewCategory from "./categorys/NewCategory";



const App = () => {

    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/categorys' component={CCategory}/>
                <Route exact path='/emergency-contacts' component={EmergencyContact}/>
                <Route path='/new/category' component={NewCategory}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;