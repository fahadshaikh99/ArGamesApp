import React from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Game_View from '../Components/Game_view';
import NewGame_View from '../Components/NewGame_View';

const Home_Screen = ({ navigation }) => {

    const DATA = [
        { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
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
                    <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                        <Game_View 
                            game_info={item}
                        />
                    </TouchableOpacity>
                );
            }}
            />
            <View style={{ marginTop:'5%'}}>
                <Text style={{ color:'green', fontWeight:'bold', fontSize: 30}}>
                    NEW GAMES
                </Text>
                <FlatList
                   
                    data={DATA}
                    numColumns={2}
                    keyExtractor = { (item, index) => index.toString() }
                    renderItem= {({item}) => {
                    return ( 
                        <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                            <NewGame_View 
                                game_info={item}
                            />
                        </TouchableOpacity>
                    );
                }}
                />
            </View>
        
        </ScrollView>
    );
}

export default Home_Screen;