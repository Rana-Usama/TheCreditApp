import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from './../config/Colors';
import FaqComponent from './../components/common/FaqComponent';

function FaqScreen(props) {

    const faqData = [
        {
            ques: ' How do I dispute a debt?',
            ans: 'Email support@thecreditapp.org a full explanation of why the debt is not owed along with any supporting documents or photos. The review process takes 5 business days.'
        },
        {
            ques: ' What information do i need to report credit?',
            ans: 'The more information you have on the debtor, the more likely we are to report the debt to the correct account at the credit bureaus. If you only have a name, for example, the odds are very slim that we can report your debtor due to conflicts with the credit bureaus. But if you have an address, we can likely associate the individual. Unlike other credit data furnishers, we skip trace every debtor you submit so that we can have an accurate report every time. With The Credit App you no longer need a SSN or even a DOB to provide accurate credit reporting.'
        },
        {
            ques: ' Awaiting processing?',
            ans: 'When a previous purchased order has an account status of “Awaiting Processing”, this means that we have received the file and sent out all notices. When the status changes to “Processing” this means that the account was not disputed, and the debtor was reported to the credit bureaus. We call it processing because we are processing the file every month until the debtor pays.'
        },
        {
            ques: ' How much does it cost?',
            ans: '$99 per transaction, whether that is to upload a New Debtor Form, Update a Balance or Dispute a Claim. If your contract includes “collection costs” then you can also include the cost of this service in the balance owed.'
        },
        {
            ques: ' What if I have a lot of orders to submit?',
            ans: 'Please contact support@thecreditapp.org for bulk order options.'
        },

        {
            ques: ' What states can you report in?',
            ans: 'We are currently reporting credit data in all 50 states.'
        },
        {
            ques: ' Who can pay debt and who can I report?',
            ans: 'Any LLC, corporation, or sole proprietor can report customer defaults through The Credit App to the Credit Bureaus. If the contract was signed by a business, the debt must be reported as a business debt, unless there is a personal guarantee in the contract. You can report the debt for any individual, business, or both in which they defaulted on a signed contract for goods or services in exchange for money.'
        },
        {
            ques: ' Why dont you have a phone number?',
            ans: 'For obvious reasons we do not make our office number public. The amount that we charge does not include listening to a hundred angry debtors every day pretending to be lawyers. We have a chat box and a public email support@thecreditapp.org. If you wish to speak to us on the phone, please email us your information and we will reach out to you within one business day.'
        },

    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(1.7), width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} activeOpacity={0.8} style={{ position: 'absolute', left: 0 }} >
                    <Ionicons name="ios-chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                    FAQ
                </Text>
            </View>

            {/* FAQ Container */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {faqData.map((item, i) => (
                        <View key={i} style={{ width: '100%', marginTop: i == 0 ? RFPercentage(8) : RFPercentage(4) }}>
                            <FaqComponent ans={item.ans} ques={item.ques} />
                        </View>
                    ))}
                </View>

                <View style={{ marginBottom: RFPercentage(12) }} />
            </ScrollView>

        </Screen>
    );
}

export default FaqScreen;