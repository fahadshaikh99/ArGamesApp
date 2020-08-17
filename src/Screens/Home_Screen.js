import React from 'react';
import { View, Text, FlatList, ScrollView} from 'react-native';
import Game_View from '../Components/Game_view';

const Home_Screen = () => {

    const DATA = [
        { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
        { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
        { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
        { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
        { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
        { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
        { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
        { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
      ];
      

    return(
        <ScrollView style={{ flex:1, marginLeft: '5%', marginTop: '20%' }}>
            <Text style={{ color:'red', fontWeight:'bold', fontSize: 30}}>
                TOP GAMES
            </Text>
            <FlatList
                horizontal
                data={DATA}
                keyExtractor = { (item, index) => index.toString() }
                renderItem= {({item}) => {
                return ( 
                    <Game_View 
                        game_info={item}
                    />
                );
            }}
            />
            <View style={{ marginTop:'5%'}}>
                <Text style={{ color:'green', fontWeight:'bold', fontSize: 30}}>
                    NEW GAMES
                </Text>
                <FlatList
                    horizontal
                    data={DATA}
                    keyExtractor = { (item, index) => index.toString() }
                    renderItem= {({item}) => {
                    return ( 
                        <Game_View 
                            game_info={item}
                        />
                    );
                }}
                />
            </View>
        
        </ScrollView>
    );
}

export default Home_Screen;