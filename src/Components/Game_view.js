import React from 'react';
import {View, Text, Image} from 'react-native';

const Game_View = ({game_info}) => {
    return (
        <View style={{ marginLeft: 6}}>
            <Image 
                style={styles.imageStyle}
                source={{ uri: game_info.uri }} 
            />
            <Text> 
                {game_info.text} 
            </Text>
        </View>
    );
};

const styles = {
    imageStyle: {
        width: 250,
        height: 290,
        borderRadius: 4,
        marginRight: 10,
        borderRadius: 25
    },

};

export default Game_View;