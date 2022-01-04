import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextInput from "../../components/common/AppTextInput"
import AppTextButton from "../../components/common/AppTextButton"
import LoadingModal from "../../components/common/LoadingModal"


// config
import Colors from '../../config/Colors';

function SignUp(props) {
    const [indicator, showIndicator] = useState(false);

    const [inputField, setInputFeild] = useState([
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

    const handleChange = (text, id) => {
        const tempFeilds = [...inputField];
        tempFeilds[id].value = text;
        setInputFeild(tempFeilds);
    }

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "") {
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
                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(-1) : RFPercentage(2), width: "90%" }} >
                    <Text style={{ marginBottom: RFPercentage(2) }} >{item.placeHolder}</Text>
                    <AppTextInput
                        placeHolder={item.placeHolder}
                        width="100%"
                        value={item.value}
                        onChange={(text) => handleChange(text, item.id)}
                        secure={item.secure}
                        icon={item.icon}
                    />
                </View>
            )}

            {/* Login button */}
            <View style={{ marginBottom: RFPercentage(4), width: "90%", marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center' }} >
                <AppTextButton
                    name="Signup"
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.primary}
                    width="80%"
                />
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
    }
})

export default SignUp;