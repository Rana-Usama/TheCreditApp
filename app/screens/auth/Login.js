import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


// components
import AppTextInput from "../../components/common/AppTextInput"
import AppTextButton from "../../components/common/AppTextButton"
import LoadingModal from "../../components/common/LoadingModal"

// config
import Colors from '../../config/Colors';

function Login(props) {
    const [indicator, showIndicator] = useState(false);

    const [tick, setTick] = useState(false);


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
            <View style={{ width: "90%", marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }} >
                <AppTextButton
                    name="Login"
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    width="80%"
                />
            </View>


            {/* Heading */}
            <View style={styles.heading} >
                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS == 'ios' ? '700' : 'bold', color: Colors.black }} >
                    Continue with Socials
                </Text>
            </View>

            <View style={styles.socialLinksContainer} >
                {/* google */}
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
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginTop: RFPercentage(3.5)
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
        marginTop: RFPercentage(2)
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

export default Login;