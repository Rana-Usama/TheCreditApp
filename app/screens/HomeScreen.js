import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <Text>
                Home
            </Text>
        </Screen>
    );
}

export default HomeScreen;