import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from "../../config/Colors"

function AppTextInput({
    keyboard = "default",
    backgroundColor = Colors.lightGrey,
    autoFocus = false,
    elevation = 0,
    borderColor = Colors.primary,
    rightIcon = false,
    rightFunction,
    borderWidth = 0,
    placeHolder,
    value,
    onChange,
    width = "100%",
    height = RFPercentage(6),
    icon,
    secure = false,
    iconType = "MaterialCommunityIcons",
    editable = true,
    startEdit,
    endEdit
}) {


    const [eyeIcon, setEyeIcon] = useState(false);

    return (
        <View style={{
            backgroundColor, borderRadius: RFPercentage(1.2),
            width: width, alignItems: 'flex-start', justifyContent: 'center',
            borderWidth: borderWidth, borderColor: borderColor, height, elevation
        }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                {iconType === "Feather" ?
                    <Feather color={Colors.mediumGrey} style={{ padding: RFPercentage(1), paddingRight: 0, marginLeft: RFPercentage(1.5) }} size={RFPercentage(2.2)} name={icon} />
                    :
                    <MaterialCommunityIcons color={Colors.mediumGrey} style={{ padding: RFPercentage(1), paddingRight: 0, marginLeft: RFPercentage(1.5) }} size={RFPercentage(3)} name={icon} />
                }
                {rightIcon ?
                    <TouchableOpacity onPress={() => rightFunction()} style={{ width: "10%", justifyContent: "center", alignItems: "center" }} >
                        <MaterialCommunityIcons key={'3'} color={Colors.primary} style={{ right: RFPercentage(1) }} size={RFPercentage(3)} name={rightIcon} />
                    </TouchableOpacity>
                    : null
                }
                <TextInput style={{ color: Colors.black, padding: rightIcon ? 0 : RFPercentage(1), width: icon ? "95%" : "100%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.mediumGrey}
                    value={value}
                    editable={editable}
                    secureTextEntry={secure && !eyeIcon}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                    autoFocus={autoFocus}
                    keyboardType={keyboard}
                />

                {
                    secure ? (
                        <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                            <MaterialCommunityIcons
                                color={eyeIcon ? "#4c4c4c" : "#4c4c4c"}
                                style={{ right: RFPercentage(1) }}
                                size={RFPercentage(3)}
                                name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                            />
                        </TouchableOpacity>
                    ) : null
                }

            </View>
        </View>
    );
}

export default AppTextInput;