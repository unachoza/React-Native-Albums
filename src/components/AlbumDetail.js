import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image } = album
    const {thumbnailStyle, headerContentStyle, imageStyle, thumbnailContainerStyle, headerTextStyle} = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                        />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}    
                    />
            </CardSection>
            <CardSection>
                <Button/>
            </CardSection>
        </Card>
    )

}

styles = {
    headerContentStyle: {
        flexDirection: 'column', 
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50, 
        width: 50
    }, 
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 10,
        marginRight: 10
    }, 
    imageStyle: {
        height: 300, 
        width: null,
        flex: 1
    }
}

export default AlbumDetail