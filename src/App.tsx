import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import head_img from "./images/head.png";
import "./App.css";
import TabsButton from "./components/Tabs";

function App() {
  return (
    //メインdivタグ
    <div className="App">
      <header className="header">
        <img src={head_img} />
        <p>東京情報大学 コンピュータ部</p>
      </header>
      <div>
        <TabsButton></TabsButton>
      </div>
    </div>
  );
}

export default App;
