import React from 'react';
import { View, Text} from 'react-native';

const Home_Screen = () => {

    return(
        <View style={{ flex:1, marginLeft: '5%', marginTop: '20%' }}>
            <Text style={{ color:'red', fontWeight:'bold', fontSize: 30}}>
                TOP GAMES
            </Text>
        </View>
    );
}

export default Home_Screen;