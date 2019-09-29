import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import MenuItem from './components/MenuItem';
import { details } from "./shared/data";

function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <div className="topMargin">
          <a class="icon-active" href="./"><i class="fa fa-th-large ic-active"></i></a>
          <a href="./"><i class="fa fa-search"></i></a>
          <a href="./"><i class="fa fa-shopping-bag"></i></a>
        </div>
      </div>
      <div className="main">
        <Navbar className="bg-white fixed-top">
          <div className="container">
            <NavbarBrand href="./"><img src="logo512.png" alt="whitepanda"/></NavbarBrand>
            
          </div>
          <span class="float-right">
              <span class="badge badge-danger rounded-circle csBadge">299</span>
              <i class="fa fa-bell-o notif"></i>
          </span>
          <span class="float-right">
              <span class="badge badge-warning rounded-circle ml-4 user-badge">AB</span>
          </span>   
        </Navbar>
        <div className="container">
          <div className="row">
              <div className="page-header">
              <h2>Content Store</h2>
              </div>
          </div>
          <header className="jumbotron">
              <div className="row">
                <div className="col-12 col-md-9">
                  <h6>Got bulk ideas or almost similar orders? Fill the order brief in an excel sheet</h6>
                </div>  
              </div>
              <div className="row mt-2">
                <div className="col-12 col-md-9">
                  <span className="csColor"><font size="2.9">If you're wondering about an easy way to place orders in large numbers, we provide a way customized just for that. Download our excel sheet and fill the order brief in the prescribed format and submit. In case you need any help, <a href="./" class="csColor"><u>we are just a click away to assist you in placing your order.</u></a></font></span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-9">
                  <button className="jumboButton">Order via Excel Sheet</button>
                </div>
              </div>
          </header>
        </div>
        <MenuItem cards={details} />
        <footer>
          <div class="container">
            <div class="row mb-4">
              <div class="col-12 align-self-center">
                <div class="text-center">
                    <span class="ic-col m-4"><i class="fa fa-twitter f-size"></i></span>
                    <span class="ic-col m-4"><i class="fa fa-linkedin f-size"></i></span>
                    <span class="ic-col m-4"><i class="fa fa-instagram f-size"></i></span>
                    <span class="ic-col m-4"><i class="fa fa-facebook f-size"></i></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-4 offset-sm-4">
                <div class="text-center cop-col">
                  Copyright @ 2019 White Panda Media Pvt. Ltd.
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-12 col-sm-4 offset-sm-4">
                <div class="text-center cop-col">
                  All rights reserved.
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-12">
                <div class="text-center cop-col">
                  <a href="./" class="m-2 cop-col"><u>Privacy policy</u></a> | <a href="./" class="m-2 cop-col"><u>Terms of Service</u></a> | <a href="./" class="m-2 cop-col"><u>Service Agreement</u></a> | <a href="./" class="m-2 cop-col"><u>Contact us</u></a>
                </div>
              </div>
            </div>
        
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
