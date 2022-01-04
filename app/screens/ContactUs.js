import React from 'react';
import { View, Text, TouchableOpacity, Platformm, ScrollView, ImageBackground, StyleSheet, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from './../config/Colors';

function ContactUs(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Image */}
            <ImageBackground style={styles.image} source={require('../../assets/images/contact.png')} >
                <View style={styles.emptyLayer} />
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2), top: RFPercentage(4) }} >
                    <Ionicons name="ios-chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.white} />
                </TouchableOpacity>
                <Text style={{ marginTop: RFPercentage(4), color: Colors.white, fontSize: RFPercentage(3.3), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                    Contact Us
                </Text>
            </ImageBackground>

            <View style={{ marginTop: RFPercentage(4), width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(3), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                    Report Nonpayments to
                </Text>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(3), marginTop: RFPercentage(-0.3), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                    the Credit Bureaus
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(4), width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    The Credit App
                </Text>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), marginTop: RFPercentage(0.7) }} >
                    11884 Greenville Ave.  STE 110
                </Text>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.2), marginTop: RFPercentage(0.7) }} >
                    Dallas, TX 75243
                </Text>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.2), marginTop: RFPercentage(0.7) }} >
                    Support@thecreditapp.org
                </Text>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    emptyLayer: {
        borderRadius: RFPercentage(1),
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    image: {
        width: RFPercentage(55),
        height: RFPercentage(25),
        borderRadius: RFPercentage(2),
        overflow: 'hidden',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default ContactUs;