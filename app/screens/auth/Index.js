import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView, Dimensions, Image, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import Login from './Login';
import SignUp from './SignUp';

// config
import Colors from "../../config/Colors"

const { width } = Dimensions.get("window");

function LoginScreen(props) {

    const [active, setActive] = useState('1');


    return (
        <View style={styles.container}>

            <StatusBar style="light" barStyle="light-content" translucent={true} backgroundColor={Colors.primary} />
            {/* Wecome Text */}
            <View style={{ backgroundColor: Colors.primary, width: "100%", flex: 0.78, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(4) }}>
                    The Credit App
                </Text>
            </View>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(4), borderTopRightRadius: RFPercentage(4), borderTopLeftRadius: RFPercentage(4), backgroundColor: Colors.white, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ width: "100%", justifyContent: 'flex-start', flex: 1, justifyContent: 'center', alignItems: "center" }}>
                    {/* Tabs */}
                    <View style={{ marginBottom: RFPercentage(1), borderRadius: RFPercentage(10), padding: 3, backgroundColor: Colors.primaryLight2, width: "70%", flexDirection: "row", height: RFPercentage(6.8), marginTop: RFPercentage(6), justifyContent: "center", alignItems: "center" }}>

                        <TouchableOpacity onPress={() => setActive('1')} style={{ backgroundColor: active == '1' ? Colors.primary : null, height: RFPercentage(6), flex: 1, justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(10) }}>
                            <Text style={{ fontSize: RFPercentage(2.2), color: Colors.white }}>
                                Login
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setActive('2')} style={{ backgroundColor: active == '2' ? Colors.primary : null, height: RFPercentage(6), flex: 1, justifyContent: "center", alignItems: "center", borderRadius: RFPercentage(10) }}>
                            <Text style={{ fontSize: RFPercentage(2.2), color: Colors.white }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ width: "100%" }} >

                        {/* Login and Sign Up Container */}
                        <View style={{ marginTop: RFPercentage(4) }} >

                            {active == '1' ?
                                <Login />
                                :
                                <SignUp />
                            }

                        </View>

                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
})

export default LoginScreen;