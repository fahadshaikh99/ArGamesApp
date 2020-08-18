import React from 'react';
import {View, Text, Image} from 'react-native';

const NewGame_View = ({game_info}) => {
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
        width: 150,
        height: 150,
        borderRadius: 4,
        marginRight: 10,
        borderRadius: 25
    },

};

export default NewGame_View;