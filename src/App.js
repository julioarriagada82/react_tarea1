import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/homepage/homepage.component";

// Component
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";


class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;
