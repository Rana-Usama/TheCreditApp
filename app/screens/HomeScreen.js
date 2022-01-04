import React from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {


    const firstListings = [
        {
            data: 'Upload the information and documents of the customer that is in default.',
        },
        {
            data: 'We send out a personalized notice via email and text, notifying the debtor of the nonpayment. We instruct them to pay you directly to prevent the negative credit mark from going on their record.',
            imageSource: require('../../assets/images/notice.png'),
            width: RFPercentage(16),
            height: RFPercentage(12)
        },
        {
            data: 'After the two-week grace period and no payment has been made, the debt will be reported to the credit bureaus with your companys name as the creditor.',
            imageSource: require('../../assets/images/report.png'),
            width: RFPercentage(16.5),
            height: RFPercentage(12)
        },
        {
            data: 'Credit reporting with The Credit App is similar to filing a lien. It lets the world know that this person is a high credit risk. The negative mark will stay on their record until they pay you or 7 years.',
            imageSource: require('../../assets/images/board.png'),
            width: RFPercentage(18),
            height: RFPercentage(18)
        },
        {
            data: 'When the property owner sees the negative mark on their credit, they know where to mail the check when they are ready to have credit again.',
            // imageSource: require('../../assets/images/notice.png'),
            width: RFPercentage(16.5),
            height: RFPercentage(12)
        }

    ]


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(1.7), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                    <AntDesign name="menu-unfold" style={{ fontSize: RFPercentage(3) }} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    Home
                </Text>
            </View>

            {/* Scroll Starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.4), marginTop: RFPercentage(6), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                        The Credit App
                    </Text>

                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), marginTop: RFPercentage(2) }} >
                        Start reporting nonpayments from your
                    </Text>

                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), marginTop: RFPercentage(0.8) }} >
                        customers directly to the credit bureaus, just
                    </Text>

                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), marginTop: RFPercentage(0.8) }} >
                        like the big banks!
                    </Text>
                </View>

                {/* Button */}
                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                    <MyAppButton
                        title="Start Reporting"
                        padding={RFPercentage(1.8)}
                        // onPress={() => handleLogin()}
                        backgroundColor={Colors.secondary}
                        color={Colors.white}
                        bold={false}
                        borderRadius={RFPercentage(10)}
                        width={"55%"}
                    />
                </View>

                {/* First main Headline */}
                <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(3.2), marginTop: RFPercentage(6), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                        A smarter way to collect
                    </Text>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(3.2), marginTop: RFPercentage(0.5), fontWeight: Platform.OS == 'android' ? 'bold' : '500' }} >
                        nonpayments
                    </Text>
                </View>

                {/* Points */}

                {firstListings.map((item, i) => (
                    <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', width: '100%' }}>
                        <View style={{ marginTop: RFPercentage(4), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', width: '90%' }} >
                            <AntDesign name="rightcircleo" style={{ position: 'absolute', top: RFPercentage(0.5), left: 0, fontSize: RFPercentage(2.7) }} color={Colors.secondary} />
                            <View style={{ width: '90%' }} >
                                <Text style={{ lineHeight: RFPercentage(3.5), marginLeft: RFPercentage(4), color: Colors.black, fontSize: RFPercentage(2.5) }} >
                                    {item.data}
                                </Text>
                            </View>
                        </View>
                        {i == 0 ?
                            <Ionicons name="cloud-upload" style={{ fontSize: RFPercentage(10), marginTop: RFPercentage(2) }} color={'#2c5580'} />
                            :
                            <Image style={{ marginTop: RFPercentage(4), width: item.width, height: item.height }} source={item.imageSource} />
                        }
                    </View>
                ))}


            </ScrollView>

        </Screen>
    );
}

export default HomeScreen;