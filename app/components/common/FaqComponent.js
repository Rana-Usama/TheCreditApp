import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

//config
import Colors from './../../config/Colors';

function FaqComponent({ ques, ans }) {

    const [down, setDown] = useState(false)

    return (
        <>
            <View style={{ width: '100%' }} >
                <View style={{ flexDirection: 'row', height: RFPercentage(8), borderRadius: RFPercentage(2), borderColor: Colors.inputFieldBackgroundColor, borderWidth: RFPercentage(0.1), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', backgroundColor: Colors.white }} >
                    {/* Drop Down */}
                    <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(2) }} >
                        <TouchableOpacity onPress={() => setDown(true)} >
                            {down ?
                                <TouchableOpacity onPress={() => setDown(false)} >
                                    <FontAwesome name="caret-up" size={24} color={'#2c5580'} />
                                </TouchableOpacity>
                                :
                                <FontAwesome name="caret-down" size={24} color={'#2c5580'} />
                            }
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <Text style={{ marginLeft: RFPercentage(3), fontSize: RFPercentage(2.2), color: down ? Colors.primary : Colors.black }} >
                        {ques}
                    </Text>
                </View>

                {down ?
                    <View style={{ width: '85%', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center', marginTop: RFPercentage(2) }} >
                        <Text style={{ lineHeight: RFPercentage(3.8), color: Colors.black, fontSize: RFPercentage(2) }}>
                            {ans}
                        </Text>
                    </View>
                    :
                    null
                }
            </View>
        </>
    );
}

export default FaqComponent;