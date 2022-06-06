import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import CCategory from "./ccategorys/CCategory"
import EmergencyContact from "./emergencycontact/EmergencyContact"
import NewCategory from "./categorys/NewCategory";
import Auth from "./auth/Auth.js"

import PrivateRoute from "./PrivateRoute.js";

const App = ( {auth, doLogin, doLogout} ) => {

    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/categorys' component={CCategory}/>
                <PrivateRoute path='/emergency-contacts' component={EmergencyContact} isAuthenticated={false}/>
                <Route path='/new/category' component={NewCategory}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;