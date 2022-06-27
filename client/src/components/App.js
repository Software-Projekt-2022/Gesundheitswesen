import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import CategoryPage from "./categorys/CategoryPage";

import PrivateRoute from "./PrivateRoute.js";
import ExpertPage from "./experts/ExpertPage.js";
import SpecificExpert from "./experts/specific_expert/SpecificExpert.js"



const App = () => {


    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <PrivateRoute exact path='/' component={Home}/>
                <PrivateRoute path='/categorys' component={CategoryPage}/>
                <PrivateRoute path='/experts' exact component={ExpertPage}/>
                <PrivateRoute path='/experts/:id' exact component={SpecificExpert}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;