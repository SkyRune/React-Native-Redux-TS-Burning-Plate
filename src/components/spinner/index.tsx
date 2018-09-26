import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Image } from 'react-native'

export interface SpinnerOwnProps { }

export interface SpinnerDispatchProps {

}

export interface SpinnerStateProps {
  display: boolean;
}

type TSpinnerProps = SpinnerOwnProps & SpinnerDispatchProps & SpinnerStateProps;

// The spinner will display the gif as soon as the props display is true
class Spinner extends Component<TSpinnerProps> {
  constructor(props: TSpinnerProps) {
    super(props);
  }


  render() {
    return (
      <View>
        {this.props.display && <Image source={require("../../assets/images/spinner.gif")} />}
      </View>
    );
  }
}

const mapStateToProps = (state: any): SpinnerStateProps => {
  return { display: state.spinner.display };
};

const mapDispatchToProps: SpinnerDispatchProps = {
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);
