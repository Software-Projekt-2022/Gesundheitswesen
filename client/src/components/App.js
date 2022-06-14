import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import CategoryPage from "./categorys/CategoryPage";
import Auth from "./auth/Auth.js"

import PrivateRoute from "./PrivateRoute.js";
import ExpertPage from "./experts/ExpertPage.js";
import SpecificExpert from "./experts/specific_expert/SpecificExpert";

const App = ( {auth, doLogin, doLogout} ) => {

    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/categorys' component={CategoryPage}/>
                <Route path='/experts' exact component={ExpertPage}/>
                <Route path='/experts/:id' exact component={SpecificExpert} />
                <PrivateRoute path='/auth' component={Auth} isAuthenticated={false}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;