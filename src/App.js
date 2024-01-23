import React from "react";
import { Switch} from "antd";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetail } from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage/>
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges/>
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies/>
                </Route>
                <Route exact path="/Crypto/:coinId">
                  <CryptoDetail/>
                  </Route>
                <Route exact path="/news">
                  <News/>
                </Route>
              </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"  level={5} style={{color:'white', textAlign:'center'}}>
        <Typography.Title>
          CryptoHub <br/>
          All rights reserverd
        </Typography.Title>
        <Space>
          <link to="/">Home</link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
