import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from './../config/Colors';

function AboutUsScreen(props) {

    const listData = [
        {
            data: 'Total amout of debt reported to TheCredit App.',
            imageSource: require('../../assets/images/a1.png'),
            money: '$35,529,045'
        },
        {
            data: 'Total amout collected for our customers.',
            imageSource: require('../../assets/images/a2.png'),
            money: '$6,395,228'
        },
        {
            data: '18% of all accounts are paid in full. Average debt reported $6,811.',
            imageSource: require('../../assets/images/a3.png'),
            money: '18%'
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* NavBar */}
            <View style={styles.navContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                    <Ionicons name="ios-chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(2.6), fontWeight: '700', color: Colors.black }}>
                    About Us
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Deatils listings */}
                    {listData.map((item, i) => (
                        <View key={i} style={{ marginLeft: i == 2 ? RFPercentage(3) : RFPercentage(0), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                            <View style={{ marginTop: RFPercentage(6), width: '96%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                <Image style={{ width: i == 2 ? RFPercentage(6) : RFPercentage(10), height: i == 2 ? RFPercentage(6) : RFPercentage(10) }} source={item.imageSource} />
                                <View style={{ width: '80%', marginLeft: RFPercentage(1) }} >
                                    <Text style={{ marginLeft: i == 2 ? RFPercentage(2) : RFPercentage(0), fontSize: RFPercentage(2.2), color: Colors.black }} >
                                        {item.data}
                                    </Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: i == 2 ? RFPercentage(3) : RFPercentage(-1), fontSize: RFPercentage(2.6), fontWeight: Platform.OS == 'android' ? 'bold' : '700', color: Colors.black }} >
                                {item.money}
                            </Text>
                        </View>
                    ))}

                    {/* Image */}
                    <ImageBackground style={{ marginTop: RFPercentage(6), overflow: 'hidden', width: RFPercentage(50), height: RFPercentage(30), borderRadius: RFPercentage(3), alignSelf: 'center' }} source={require('../../assets/images/about.png')}>
                        <View style={styles.emptyLayer} />
                    </ImageBackground>

                    {/* Below Image Main Heading */}

                    <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), marginTop: RFPercentage(6), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                            A smarter way to collect
                        </Text>
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(3), marginTop: RFPercentage(-0.3), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                            nonpayments
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(4), width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                        <AntDesign name="rightcircleo" style={{ position: 'absolute', top: RFPercentage(0.5), left: 0, fontSize: RFPercentage(2.7) }} color={Colors.secondary} />

                        <Text style={{ marginLeft: RFPercentage(4), fontSize: RFPercentage(2.2), color: Colors.black, lineHeight: RFPercentage(3.1) }} >
                            The Credit App allows contractors, small business owners,
                            and sole proprietors to report defaults and nonpayments from
                            their customers directly to the in credit bureaus. With this service
                            you can avoid the $200 an hour collection attorneys and the 30% fees
                            from collection agents. You get the same result for a low flat fee and
                            spend the same amount of time it is would take to fill out the contract with
                            the debt of a collector. All you have to do is fill out the new debtor form, pay
                            the $99, and wait for your customer to call. The customer immediately receives
                            an email and a text letting them know what is going on. They receive two weeks
                            to pay or dispute the claim and then the balance owed goes on their credit report,
                            right next to your company's name.
                        </Text>
                    </View>

                    <View style={{ marginBottom: RFPercentage(6) }} />
                </View>
            </ScrollView>

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
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    navContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AboutUsScreen;