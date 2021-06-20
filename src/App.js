import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import resetCss from "reset-css";
import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html, body {
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans', sans-serif;
    font-weight: normal;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/edit" exact component={EditPage} />
          <Route path="/detail/:id" exact component={DetailPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
