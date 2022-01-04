import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from './../config/Colors';

function ShopScreen(props) {

    const data = [
        {
            title: 'My Account',
            iconName: 'account-circle-outline'
        },
        {
            title: 'Shopping Bag',
            iconName: 'shopping-outline'
        },
        {
            title: 'Sign Out',
            iconName: 'logout-variant'
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
                    Shop
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(8), width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.8) }} >
                    Your shopping cart is empty
                </Text>
            </View>

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                <MyAppButton
                    title="Browse Store"
                    padding={RFPercentage(1.8)}
                    // onPress={() => handleLogin()}
                    backgroundColor={Colors.white}
                    color={Colors.primary}
                    borderColor={Colors.black}
                    borderWidth={RFPercentage(0.1)}
                    bold={false}
                    borderRadius={RFPercentage(1.1)}
                    width={"45%"}
                />
            </View>

            {data.map((item, i) => (

                <TouchableOpacity key={i} activeOpacity={0.8} style={{ marginTop: i == 0 ? RFPercentage(7) : RFPercentage(4), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <MaterialCommunityIcons name={item.iconName} style={{ fontSize: RFPercentage(4.3) }} color={Colors.grey} />
                    <Text style={{ color: Colors.dark, fontSize: RFPercentage(2.4), marginTop: RFPercentage(1) }}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}


        </Screen>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ShopScreen;