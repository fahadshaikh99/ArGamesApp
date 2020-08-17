import React from 'react';
import { View, Text, Image, Button} from 'react-native';

const Game_Screen = () => {
    return(
        <View style={{ marginTop: '18%', marginLeft:'5%'}}>
            <Text>
                TOP GAMES
            </Text>
            <Image 
                style={styles.imageStyle}
                source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }} 
            />
            <Text>
                Bike Rider
            </Text>
            <Button 
                title="Play Now"
            />
            <Text>
                Creator: @fahad123
            </Text>
        </View>
    );
}

const styles = {
    imageStyle: {
        width: 250,
        height: 290,
        borderRadius: 4,
        marginRight: 10,
        borderRadius: 25
    },

};

export default Game_Screen;