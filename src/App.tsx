import React from "react";
import './App.css';
import { FiUser } from "react-icons/fi";
import Form from "./components/form";
import Logo from "./images/logo-instagram.png";
import Storie from "./components/Stories";
import { Provider } from "react-redux";
import { store } from "./store/ducks";
import User from "./components/Usuarios";
import Posts from "./components/Posts";
import Header from "./components/Header";


function App() {

  return (
    <Provider store={store}>
      <Header />
      <div className="home">
        <div className="post-container">
          <Form />        
          <Posts />
        </div>
        <div>
          <User />
          <Storie />
        </div>        
      </div>
    </Provider>
  );
}

export default App;
