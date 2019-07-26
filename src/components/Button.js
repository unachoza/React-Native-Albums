import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = () => {
    const {buttonStyle, textStyle} = style
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle}>Click Me</Text>
        </TouchableOpacity>
    )
}

const style = {
    textStyle: {
        alignSelf: 'center', 
        color: '#007aff', 
        fontSize: 16, 
        paddingTop: 10, 
        paddingBottom: 10,
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1, 
        alignSelf: 'stretch', 
        borderColor: '#007aff',
        backgroundColor: '#fff',
        borderRadius: 5, 
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5

    }
}

export default Button
