import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = ({onPress}) => {
    const {buttonStyle, textStyle} = style
    return (
        <TouchableOpacity onPress={onPress}style={buttonStyle}>
            <Text style={textStyle}>Click Me</Text>
        </TouchableOpacity>
    )
}

const style = {
    textStyle: {
        alignSelf: 'center', 
        color: '#f6abb6', 
        fontSize: 16, 
        paddingTop: 10, 
        paddingBottom: 10,
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1, 
        alignSelf: 'stretch', 
        borderColor: '#f4b6c2',
        backgroundColor: '#fff',
        borderRadius: 5, 
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5

    }
}

export default Button
