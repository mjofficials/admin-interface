import React from "react";
import Homepage from "./components/Homepage/HomePage";
import AddStocksPage from "./components/AddStocksPage/AddStocksPage";
import ListStocks from "./components/ListStocks/ListStocks";
import ListPosts from "./components/ListPosts/ListPosts";
import ListUsers from "./components/ListUsers/ListUsers";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/addstocks" component={AddStocksPage}></Route>
          <Route exact path="/liststocks" component={ListStocks}></Route>
          <Route exact path="/listposts" component={ListPosts}></Route>
          <Route exact path="/listusers" component={ListUsers}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
