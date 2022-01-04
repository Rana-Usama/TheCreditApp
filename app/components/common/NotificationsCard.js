import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../Screen';
//screens
import Colors from '../../config/Colors';

function NotificationsCard({ imageSource, Title, subTitle, time }) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ justifyContent: 'center', width: '90%', height: RFPercentage(14), backgroundColor: Colors.twoButtons, borderRadius: RFPercentage(2), alignSelf: 'center' }}>

                <TouchableOpacity style={{ marginLeft: RFPercentage(3), flexDirection: 'row', width: '90%', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {/* DP Image */}
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image style={{ width: RFPercentage(8), height: RFPercentage(8) }} source={imageSource} />
                    </TouchableOpacity>
                    {/* Details */}
                    <View style={{ marginLeft: RFPercentage(1.2) }}>
                        <Text style={{ color: Colors.black, fontWeight: '600', fontSize: RFPercentage(1.9) }}>
                            {Title}
                        </Text>
                        <View style={{ marginTop: RFPercentage(0.8), flexDirection: 'row' }}>
                            <Text style={{ color: '#707070', fontSize: RFPercentage(1.6) }}>
                                {subTitle}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ color: "#707070", position: 'absolute', right: 0, fontSize: RFPercentage(1.7) }}>
                        {time}
                    </Text>
                </TouchableOpacity>

            </View>

        </Screen>
    );
}

export default NotificationsCard;