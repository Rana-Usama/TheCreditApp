import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import NotificationsCard from './../components/common/NotificationsCard';

//config
import Colors from '../config/Colors';

function NotificationsScreen(props) {


    const carData = [
        {
            imageSource: require('../../assets/images/f1.png'),
            title: 'Robert Fox',
            subTitle: 'Sent you Cash',
            time: '5 Min'
        },
        {
            imageSource: require('../../assets/images/f2.png'),
            title: 'AI',
            subTitle: 'Deposi cash in your Acc',
            time: '1 Hour'
        },
        {
            imageSource: require('../../assets/images/f3.png'),
            title: 'Shane Max',
            subTitle: 'Payment Due in 2 Hours',
            time: '5 Hour'
        },
        {
            imageSource: require('../../assets/images/f4.png'),
            title: 'Aniity James',
            subTitle: 'Send $500 in your Acc',
            time: '2 Day'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                    <Ionicons name="ios-chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: '700', color: Colors.black }}>
                    Notifications
                </Text>
                <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: Colors.secondary, fontSize: RFPercentage(1.7) }}>
                        Mark all as read
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Cart */}
                    {carData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(2), width: '100%', }}>

                            <NotificationsCard imageSource={item.imageSource} Title={item.title} subTitle={item.subTitle} time={item.time} />

                        </View>

                    ))}
                    <View style={{ marginBottom: RFPercentage(15) }} />
                </View>
            </ScrollView>

        </Screen >
    );
}


const styles = StyleSheet.create({
    dots: {
        width: RFPercentage(0.6),
        height: RFPercentage(0.6),
        backgroundColor: Colors.black,
        borderRadius: RFPercentage(10)
    },
    navContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NotificationsScreen;