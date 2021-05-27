import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Web3 from "web3";
import { routes } from "./utils/routes";
import Menu from "./components/Menu/Menu";
import Marketplace from "./abis/Marketplace.json";
import Button from "./components/Button/Button";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./resources/Styles/globallStyles";

import Main from "components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      productCount: 0,
      products: [],
      loading: true,
      theme: "dark",
    };

    this.createProduct = this.createProduct.bind(this);
    this.purchaseProduct = this.purchaseProduct.bind(this);
  }
  componentDidMount() {
    const localStorageTheme = window.localStorage.getItem("theme");
    localStorageTheme
      ? this.setState({ theme: localStorageTheme })
      : this.setMode("light");
  }
  setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    this.setState({ theme: mode });
  };
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = new web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product],
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  createProduct(name, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .createProduct(name, price)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }
  purchaseProduct(id, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .purchaseProduct(id)
      .send({ from: this.state.account, value: price })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }
  themeToggle = () => {
    this.state.theme === "light" ? this.setMode("dark") : this.setMode("light");
  };
  render() {
    const themeMode = this.state.theme === "light" ? lightTheme : darkTheme;

    return (
      <>
        <div>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Router>
              <Menu />
              <Button
                primary
                label={this.state.theme}
                onClick={() => this.themeToggle()}
              />
              <Switch>
                <Suspense fallback={<div>Loading... </div>}>
                  {routes.map((route, i) => {
                    return (
                      <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
                    );
                  })}
                </Suspense>
              </Switch>
            </Router>
          </ThemeProvider>
          {/* code below to be moved from this page soon */}

          {/* {this.state.loading ? (
            <div id="loader" className="text-center">
              <p className="text-center">Loading...</p>
            </div>
          ) : (
            <Main
              products={this.state.products}
              createProduct={this.createProduct}
              purchaseProduct={this.purchaseProduct}
            />
          )} */}
        </div>
      </>
    );
  }
}

export default App;
