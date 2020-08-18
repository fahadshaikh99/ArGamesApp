import React, { Children } from 'react';
import { View, Text, Button, Dimensions, ImageBackground } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Start_Screen_background = ({ Children }) => {
    console.log(windowHeight);
    console.log(windowWidth);
    return(
        <ImageBackground style={style.leftSide}>
            <ImageBackground style={style.rightSide}>
                
            </ImageBackground>
        </ImageBackground>
    );
}


const style = {
    rightSide: {
        flex: 2,
        height: windowHeight,
        width: windowWidth/2,
        backgroundColor: 'yellow',
        marginLeft: windowWidth/2
    },
    leftSide: {
        flex:2,
        height: windowHeight,
        width: windowWidth/2,
        backgroundColor: 'red'
    }
}

export default Start_Screen_background;