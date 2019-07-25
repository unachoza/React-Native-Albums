/**

 */
import React from 'react'
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'
// import App from './App';
// import { name as appName } from './app.json';

const ThisApp = () => (
    <Header/>
)

AppRegistry.registerComponent('albums', () => ThisApp);
