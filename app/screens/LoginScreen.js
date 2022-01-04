import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Platform, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// components
import AppTextInput from "../components/common/AppTextInput"
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from '../components/common/LoadingModal';
import Screen from './../components/Screen';

// config
import Colors from "../config/Colors"

function LoginScreen(props) {

    const [active, setActive] = useState('1');

    // Login

    const [tick, setTick] = useState(false);

    const [indicator, showIndicator] = useState(false);

    const [inputField, setInputFeild] = useState([
        {
            id: 0,
            title: "Enter your E-mail",
            placeHolder: 'Email',
            value: '',
            secure: false,
            icon: "email-outline"
        },
        {
            id: 1,
            title: "Enter your Password",
            placeHolder: 'Password',
            value: '',
            secure: true,
            icon: "lock-outline"
        },
    ]);

    const handleChange = (text, id) => {
        const tempFeilds = [...inputField];
        tempFeilds[id].value = text;
        setInputFeild(tempFeilds);
    }

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        props.navigation.navigate("HomeDrawer")

        try {
            // API integration
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    // Signup

    const [inputField2, setInputFeild2] = useState([
        {
            id: 0,
            placeHolder: "First Name",
            value: '',
            secure: false,
            icon: "account"

        },
        {
            id: 1,
            placeHolder: "Last Name",
            value: '',
            secure: false,
            icon: "account"
        },
        {
            id: 2,
            placeHolder: "Email",
            value: '',
            secure: false,
            icon: "email-outline"
        },
        {
            id: 3,
            placeHolder: "Company or Creditor Name",
            value: '',
            secure: false,
            icon: "robot-industrial"
        },
        {
            id: 4,
            placeHolder: "Password",
            value: '',
            secure: true,
            icon: "lock-outline"
        },
    ]);

    const handleChange2 = (text, id) => {
        const tempFeilds = [...inputField];
        tempFeilds[id].value = text;
        setInputFeild(tempFeilds);
    }

    const handleLogin2 = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "" || tempfeilds[4].value === "") {
            alert("Please fill all the feilds !");
            showIndicator(false);
            return true;
        }

        try {
            // API call

        } catch (error) {
            alert("Login Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

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

                                // Login

                                <View style={styles.container}>

                                    <LoadingModal show={indicator} />

                                    {/* Text feilds */}
                                    {inputField.map((item, i) =>
                                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(-1) : RFPercentage(3), width: "90%" }} >
                                            <Text style={{ marginBottom: RFPercentage(2) }} >{item.title}</Text>
                                            <AppTextInput
                                                placeHolder={item.placeHolder}
                                                width="100%"
                                                value={item.value}
                                                secure={item.secure}
                                                onChange={(text) => handleChange(text, item.id)}
                                                secure={item.secure}
                                                icon={item.icon}
                                            />
                                        </View>
                                    )}

                                    <View style={styles.forgetRememberContainer}>
                                        {/* Check Box */}
                                        <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={styles.checkBox}>
                                            {tick ?
                                                <TouchableOpacity activeOpacity={0.8} onPress={() => setTick(false)} >
                                                    <Octicons name="check" style={{ fontSize: RFPercentage(2) }} color={Colors.primary} />
                                                </TouchableOpacity>
                                                : null}
                                        </TouchableOpacity>
                                        <Text style={styles.rememberMe}>
                                            Remember Me
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.5} style={{ position: 'absolute', right: 0, }}>
                                            <Text style={{ fontWeight: Platform.OS == 'android' ? 'bold' : '700', fontSize: RFPercentage(1.8), color: Colors.primary }}>
                                                Forget Password?
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Login button */}
                                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(5) }}>
                                        <MyAppButton
                                            title="Login"
                                            padding={RFPercentage(1.5)}
                                            onPress={() => handleLogin()}
                                            backgroundColor={Colors.primary}
                                            color={Colors.white}
                                            bold={false}
                                            borderRadius={RFPercentage(1.3)}
                                            width={"70%"}
                                        />
                                    </View>

                                    {/* Heading */}
                                    <View style={styles.heading} >
                                        <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '700' : 'bold', color: Colors.black }} >
                                            Continue with Socials
                                        </Text>
                                    </View>

                                    {/* Social Links */}
                                    <View style={styles.socialLinksContainer} >
                                        <TouchableOpacity activeOpacity={0.8} style={styles.google}>
                                            <FontAwesome name="google" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.8} style={styles.facebook}>
                                            <FontAwesome name="facebook-f" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                        </TouchableOpacity >
                                        <TouchableOpacity activeOpacity={0.8} style={styles.apple}>
                                            <FontAwesome name="apple" style={{ fontSize: RFPercentage(3) }} color={Colors.white} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                :

                                // Signup

                                <View style={styles.containerLogin}>

                                    <LoadingModal show={indicator} />

                                    {/* Text feilds */}
                                    {inputField2.map((item, i) =>
                                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(-1) : RFPercentage(2), width: "90%" }} >
                                            <Text style={{ marginBottom: RFPercentage(2) }} >{item.placeHolder}</Text>
                                            <AppTextInput
                                                placeHolder={item.placeHolder}
                                                width="100%"
                                                value={item.value}
                                                onChange={(text) => handleChange2(text, item.id)}
                                                secure={item.secure}
                                                icon={item.icon}
                                            />
                                        </View>
                                    )}

                                    {/* Sign Up button */}
                                    <View style={{ marginBottom: RFPercentage(4), width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                                        <MyAppButton
                                            title="Sign Up"
                                            padding={RFPercentage(1.5)}
                                            // onPress={() => handleLogin()}
                                            backgroundColor={Colors.primary}
                                            color={Colors.white}
                                            bold={false}
                                            borderRadius={RFPercentage(1.3)}
                                            width={"70%"}
                                        />
                                    </View>
                                </View>
                            }

                        </View>
                    </ScrollView>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    containerLogin: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    forgetRememberContainer: {
        marginTop: RFPercentage(2.4),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: RFPercentage(2.5),
        height: RFPercentage(2.5),
        borderRadius: RFPercentage(0.5),
        borderColor: Colors.inputFieldBackgroundColor,
        borderWidth: RFPercentage(0.09),
        backgroundColor: Colors.white
    },
    heading: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    },
    rememberMe: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.8),
        color: '#242424'
    },
    socialLinksContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: RFPercentage(2),
        marginBottom: RFPercentage(5)
    },
    google: {
        position: 'absolute',
        left: 0,
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#03a9f7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebook: {
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#3b5999',
        justifyContent: 'center',
        alignItems: 'center'
    },
    apple: {
        position: 'absolute',
        right: 0,
        width: RFPercentage(16),
        height: RFPercentage(5.6),
        borderRadius: RFPercentage(1),
        backgroundColor: '#242424',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen;