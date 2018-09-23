import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from 'remote-redux-devtools';
import IndexView from "./views/index-view"
import { View, StatusBar } from "react-native";
import { NativeRouter, Route, Redirect } from 'react-router-native'
import { ROUTES } from "./constants/routes"
import Expo, { AppLoading, Asset } from "expo";
import { RouteComponentProps } from 'react-router-dom';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));
//disable warnings
console.disableYellowBox = true;

export interface AppOwnProps extends RouteComponentProps<any> {

}

export default class App extends Component<AppOwnProps> {
  state = {
    isReady: false,
    fontLoaded: false
  };

  componentWillMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
    // Load the font you need
    Expo.Font.loadAsync({
      JosefinSansRegular: require('./assets/fonts/JosefinSans-Regular.ttf'),
      JosefinSansBold: require('./assets/fonts/JosefinSans-Bold.ttf'),
      JosefinSansLight: require('./assets/fonts/JosefinSans-Light.ttf'),
      MaterialIcons: require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
      MaterialCommunityIcons: require('@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'),
      "simple-line-icons": require('@expo/vector-icons/fonts/SimpleLineIcons.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

    }).then(() => { console.log("font loaded"); this.setState({ fontLoaded: true }) })
  }

  render() {
    // Will display the splash screen while font and other assets are not fully load
    if (!this.state.isReady || !this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        // Setup Redux and React Router V4
        // This will redirect by default to the index view
        <Provider store={store}>
          <NativeRouter>
            <View style={{ flex: 1 }}>
              <Route path={ROUTES.index_view} component={IndexView} />
              <Redirect to={ROUTES.index_view} />
            </View>
          </NativeRouter>
        </Provider>
      );
    }
  }

  async _cacheResourcesAsync(): Promise<any> {
    const images = [
      require('./assets/images/splash.png')
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}
