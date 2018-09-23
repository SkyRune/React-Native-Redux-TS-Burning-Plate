import React, { Component } from "react";
import Spinner from "../../components/spinner";
import Header from "../../components/header";
import { Container } from "native-base";
import { View } from 'react-native';
import Translate from '../../components/translate';

export interface IndexViewOwnProps {

}
const rootKey = "index_view."
class IndexView extends Component<IndexViewOwnProps> {
  constructor(props: IndexViewOwnProps) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Spinner />
        <Header />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Translate h4 id={rootKey + 'content'} />
        </View>
      </Container>
    );
  }
}

export default IndexView;
