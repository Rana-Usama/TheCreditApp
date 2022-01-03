import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';

//config
import Colors from "../../config/Colors";

function InputField({
    onTouchStart = () => { },
    onTouchEnd = () => { },
    placeholder,
    atStartPlaceholder = false,
    handleFeild,
    borderColor = Colors.white,
    borderWidth = RFPercentage(0),
    fontFamily = null,
    placeholderAtCenter = true,
    leftImageSource = null,
    placeholderColor = "#B4B6B8",
    borderRadius = RFPercentage(1),
    backgroundColor = Colors.white,
    keyboardType = "default",
    textCenter = "left",
    fontSize = RFPercentage(2.5),
    editIcon = false,
    dropdownIcon = false,
    width,
    value,
    height = RFPercentage(6.9),
    secure = false,
    handleClear = false,
    leftIconName = '',
    autoFocus = false,
    searchMarginLeft = null,
    color = "black",
    borderRightColor = null,
    borderTopColor = null,
    borderLeftColor = null,
    borderBottomColor = null,
    ...otherProps
}) {
    const [eyeIcon, setEyeIcon] = useState(false);

    return (
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, width: width, height: height, borderRadius: borderRadius, marginVertical: RFPercentage(0.7), borderRightColor: borderRightColor, borderTopColor: borderTopColor, borderLeftColor: borderLeftColor, borderBottomColor: borderBottomColor }} >
            {leftIconName ? (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(1.2) }}>
                    <MaterialIcons
                        color={Colors.black}
                        size={RFPercentage(3.7)}
                        style={{ opacity: 0.5 }}
                        name={leftIconName}
                    />
                </TouchableOpacity>
            ) : null}


            {secure ?
                <Image style={{ position: 'absolute', left: RFPercentage(5), width: RFPercentage(2, 5), height: RFPercentage(2.6) }} source={leftImageSource} />
                :
                <Image style={{ position: 'absolute', left: RFPercentage(5), width: RFPercentage(3.2), height: RFPercentage(2.2) }} source={leftImageSource} />

            }


            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                onChangeText={(text) => handleFeild(text)}
                onResponderStart={onTouchStart}
                onEndEditing={onTouchEnd}
                value={value}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                secureTextEntry={secure && !eyeIcon}
                textAlign={textCenter}
                style={{ marginBottom: atStartPlaceholder ? RFPercentage(12) : RFPercentage(0), marginLeft: placeholderAtCenter ? RFPercentage(16) : RFPercentage(0), color: color, alignSelf: "center", fontFamily: fontFamily, fontSize: fontSize, width: leftIconName ? "85%" : "90%" }}
                {...otherProps}
            />

            {handleClear && value.length > 0 ? (
                <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), }}>
                    <MaterialCommunityIcons
                        color={Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(3)}
                        name="close"
                    />
                </TouchableOpacity>
            ) : null}

            {editIcon ? (
                <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), top: RFPercentage(1.4) }}>
                    <MaterialIcons
                        color={Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(1.5)}
                        name="edit"
                    />
                </TouchableOpacity>
            ) : null}

            {dropdownIcon ? (
                <TouchableOpacity style={{ position: "absolute", right: RFPercentage(2) }}>
                    <Ionicons
                        color={Colors.black}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(4)}
                        name="caret-down"
                    />
                </TouchableOpacity>
            ) : null}

            {secure ? (
                <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                    <MaterialCommunityIcons
                        color={eyeIcon ? "#242424" : Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(3)}
                        name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

export default InputField;