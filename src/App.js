import React from "react";
import { Switch, Route } from "antd";
import { Link } from "antd";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import "./App.css";
import { Routes } from "react-router-dom";

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
                <Routes>
                  
                </Routes>
              </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
