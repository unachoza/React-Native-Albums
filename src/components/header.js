import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
    const { textStyle , viewStyle} = styles  
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: "#dec3c350", 
        justifyContent: 'center',
        alignItems: 'center',
        height: 100, 
        paddingTop: 30,
        shadowColor: '#000',
        shaddowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
    },

    textStyle: {
        fontSize: 40,
        color: '#f6abb6',
        // shadowColor: '#000',
        // shadowOpacity: 0.2,

    }
}

export default Header