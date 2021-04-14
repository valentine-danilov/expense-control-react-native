import {Amplify} from "aws-amplify";
import React from 'react';
import {Provider} from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper'

import {store} from "./src/store/store";
import AuthNavigationContainer from "./src/navigation/auth/AuthNavigationContainer";
import cognitoConfig from './amplify.config'
import applicationTheme from './app.theme'


Amplify.configure(cognitoConfig)

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={applicationTheme}>
        <AuthNavigationContainer/>
      </PaperProvider>
    </Provider>
  );
}