import React from "react"
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Search from "./pages/Search";
import SearchPage from "./SearchPage"

function App() {
  return (

    //BEM NAME CONVENTION
    <div className="app">
        <Router>
          <Switch>
              <Route path="/search">
                    <SearchPage />
                    
              </Route>

              <Route path="/">
                   
                    <Home />
              </Route>

              
             
     
      

      
    
          </Switch>
        </Router>
    </div>
  );
}

export default App;
