import React from 'react';
import { View, Image } from 'react-native';
import { theme } from '../styles'
import plantImg from '../assets/images/plantIcon.png';

const Home: React.FC = ({ }) => {
    return (
        <View style={theme.container}>
            <Image source={plantImg} style={theme.drawImg} />

            <View style={theme.card}>

            </View>
        </View >
    )
}

export default Home;

