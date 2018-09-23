import React, { Component } from 'react'

import { translate } from "../../locales/i18n"
import { Text } from "react-native"
export interface TranslateOwnProps {
  id: string;
  values?: any,
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  style?: any;
}
// This component display a text and translate automatically it's value depending on the id (i18n key sent as props)
// Also it as a default size and font depending on the title attribute you set
class Translate extends Component<TranslateOwnProps> {
  state = { fontFamily: "JosefinSansLight", fontSize: 10 };
  componentDidMount() {
    const { h1, h2, h3, h4 } = this.props;
    let fontSize = this.state.fontSize;
    if (h1) {
      fontSize = 30;
    } else if (h2) {
      fontSize = 25;
    } else if (h3) {
      fontSize = 20;
    } else if (h4) {
      fontSize = 15;
    } else {
      this.setState({ fontFamily: "JosefinSansRegular" })
    }
    this.setState({ fontSize })

  }
  render() {
    return (
      <Text {...this.props} style={[this.props.style, { fontFamily: this.state.fontFamily, fontSize: this.state.fontSize }]}> {translate(this.props.id, this.props.values ? this.props.values : {})}</Text >
    )
  }
}

export default Translate