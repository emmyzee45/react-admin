import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import React, { useContext, useState } from 'react';
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";


function App(props) {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark": "app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={< Home />} />
          <Route path='login' element={< Login />} />
        </Route>
        <Route path="users">
          <Route index element={< List />} />
          <Route path=':userId' element={< Single />} />
          <Route path='new' element={< New inputs={userInputs} title='Add new User' />} />
        </Route>
        <Route path="products">
          <Route index element={< List />} />
          <Route path=':userId' element={< Single />} />
          <Route path='new' element={< New inputs={productInputs} title="Add new Product" />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </div>
      );
}

export default App;
