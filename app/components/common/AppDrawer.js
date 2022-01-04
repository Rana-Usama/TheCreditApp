import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//config
import Colors from "../../config/Colors";

function AppDrawer({ navigation }) {
    const items = [
        {
            id: 0,
            label: "Home",
            icon: 'home-variant-outline'
            // path: "ProfileScreen"
        },
        {
            id: 1,
            label: "Shop",
            icon: 'shopping-outline'
            // path: "MyChannelScreen"
        },
        {
            id: 3,
            label: "FAQ",
            icon: 'frequently-asked-questions'


            // path: "NotificationsScreen"
        },
        {
            id: 4,
            label: "Contact Us",
            icon: 'contacts-outline'

            // path: "AdvertisementScreen"
        },
        {
            id: 5,
            label: "About Us",
            icon: 'file-table-outline',
            path: "AboutUsScreen"
        },
        {
            id: 6,
            label: "Facebook",
            icon: 'facebook'

            // path: "NotificationsScreen"
        },
        {
            id: 6,
            label: "Notification Center",
            icon: 'notification-clear-all'

            // path: "NotificationsScreen"
        },

    ]

    return (
        <View style={{ flex: 1, width: '100%', position: 'absolute' }}  >

            <ImageBackground style={{ width: '100%', height: Platform.OS == 'android' ? RFPercentage(30) : RFPercentage(28), justifyContent: 'center', alignItems: 'center' }} source={require('../../../assets/images/top2.png')} >
                <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: RFPercentage(2) }}>
                    <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(1) }} >
                        <Image style={{ width: RFPercentage(15), height: RFPercentage(15) }} source={require('../../../assets/images/profile.png')} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(1.5), color: Colors.white, fontWeight: 'bold' }} >
                        Robert C
                    </Text>
                    <Text style={{ alignSelf: 'center', marginTop: RFPercentage(0.5), color: Colors.inputFieldBackgroundColor }} >
                        abc@mail.com
                    </Text>
                </View>
            </ImageBackground>

            <ScrollView style={{ flex: 1, width: '100%' }} >

                {items.map((item, index) => (
                    <View key={index} style={{ marginTop: index === 0 ? RFPercentage(4) : RFPercentage(4.2), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                        <MaterialCommunityIcons name={item.icon} style={{ fontSize: RFPercentage(3.3) }} color={Colors.primary} />
                        <View style={{ alignItems: "center", width: "70%" }} >
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                navigation.navigate(item.path)
                            }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.3) }} >{item.label}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Logout */}
                <View style={{ marginLeft: RFPercentage(-1.5), marginTop: RFPercentage(4.2), justifyContent: 'center', alignItems: "center", flexDirection: 'row' }} >
                    <View style={{ alignItems: "center", width: "70%" }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }} activeOpacity={0.7} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <MaterialCommunityIcons name="logout-variant" size={24} color={Colors.primary} />
                            <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2.2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>

        </View >
    );
}


export default AppDrawer;