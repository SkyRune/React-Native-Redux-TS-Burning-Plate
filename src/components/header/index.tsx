import React, { Component } from "react";
import Translate from "../../components/translate";
import { style } from "./style";
import { View } from "react-native"
import { style as genericStyle } from "../../styles"

// The root key must be unique and match json files in src/locales
// You can use the name of the component and the directory where it is located as key.
const rootKey = "header_component.";
class Header extends Component {
  render() {
    return (
      <View >
        <View style={style.header} >
          <Translate h1 style={genericStyle.headerText} id={rootKey + 'title'} />
        </View>
      </View>
    );
  }
}

export default Header;
