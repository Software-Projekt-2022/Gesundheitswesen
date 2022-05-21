import { BrowserRouter, Link, Route } from "react-router-dom";

import Header from './header/Header.js';
import Home from "./home/Home";
import CCategory from "./ccategorys/CCategory"
import EmergencyContact from "./emergencycontact/EmergencyContact"
import NewCategory from "./categorys/NewCategory";

/*
class App extends React.Component{
    render(){
        return(
            <div>
                <Header 
                appName={this.props.appName}
                />
                
                
            </div>
        )
    }
}
*/

const App = () => {


    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={Home}/>
                <Route path='/categorys' component={CCategory}/>
                <Route path='/emergency-contacts' component={EmergencyContact}/>
                <Route path='/new/category' component={NewCategory}/>
            </div>
        </BrowserRouter>
    )
}

/***        <Container maxWidth="lg">
            <Header></Header>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Categorys setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container> */



export default App;