import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import EmergencyContact from "./emergencycontact/EmergencyContact"
import Category from "./categorys/CategoryPage";
import Auth from "./auth/Auth.js"

import PrivateRoute from "./PrivateRoute.js";

const App = ( {auth, doLogin, doLogout} ) => {

    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/categorys' component={Category}/>
                <PrivateRoute path='/emergency-contacts' component={EmergencyContact} isAuthenticated={false}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;