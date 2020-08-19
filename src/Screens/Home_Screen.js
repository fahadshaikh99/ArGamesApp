import React from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Game_View from '../Components/Game_view';
import NewGame_View from '../Components/NewGame_View';

const Home_Screen = ({ navigation }) => {

    const DATA = [
        { id: 1, text: 'Card #1', uri: 'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fchapter-2-season-2-update%2F11BR_Evergreens_Blue_NewsHeader-1920x1080-77ade2f5f2bc0312b4978dcd7639adfe00211fe6.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 2, text: 'Card #2', uri: 'https://mms.businesswire.com/media/20200714005642/en/805167/5/Season_8_Key_Art.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 3, text: 'Card #3', uri: 'https://freegametips.com/wp-content/uploads/2020/07/How-to-Get-Free-Watch-Dogs-2-on-PC-During.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 4, text: 'Card #4', uri: 'https://solobgs.s3.amazonaws.com/images/16940_crop169004_1024x576_lSVyQMhsSW3SjjLz4vxhfNHlGD3YDGJV3G.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 5, text: 'Card #5', uri: 'https://i.ytimg.com/vi/9ewiJJe_nYI/maxresdefault.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 6, text: 'Card #6', uri: 'https://lh3.googleusercontent.com/zo-hb8BiWaxhNVReZSV06shUpzkJ1DSnp1TqmA5PweJFunMwYDDfQcdi3ZlepM-uG-tCQoWCdw=w640-h400-e365', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
        { id: 8, text: 'Card #8', uri: 'https://img5.goodfon.com/wallpaper/nbig/0/75/igra-art-kiborg-cd-projekt-red-cyberpunk-2077-kiberpank-cy-7.jpg', link: 'https://www.instagram.com/ar/286501029217031' },
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