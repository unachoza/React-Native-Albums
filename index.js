
import React from 'react'
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header'
import AlbumnList from './src/components/AlbumList'

const ThisApp = () => {
    return (
    
    <View>
        <Header headerText={'Albums!!'} />
        <AlbumnList />
    </View>
    
)}

AppRegistry.registerComponent('albums', () => ThisApp);
