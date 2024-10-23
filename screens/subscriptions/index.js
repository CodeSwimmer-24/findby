import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native';
import Header from '../../components/Header';

const Subscriptions = ({ navigation }) => {

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            const parent = navigation.getParent();
            parent?.setOptions({
                tabBarStyle: { display: "none" },
            });
        }
    }, [isFocused]);

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            <Header search={false} />
            <Text style={{
                paddingVertical: 5,
                paddingHorizontal: 30,
                fontSize: 20,
                fontWeight: "500",
                color: "#383838"
            }}>
                Select Your Plans
            </Text>
            <Text style={{
                paddingVertical: 0,
                paddingHorizontal: 30,
                fontSize: 12,
                fontWeight: "300",
                color: "#383838"
            }}>
                You can pay the platform fee to access all the features according to the plan selected.
            </Text>
            <View>
                <View>
                    <View>
                        <Text>
                            For Rental
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Subscriptions