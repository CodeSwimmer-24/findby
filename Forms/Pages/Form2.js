// components/forms/Step2.js

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../constant/colors';

const Step2 = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Number of Rooms</Text>
            <TextInput
                placeholder="Enter number of rooms"
                value={formData.numberOfRooms}
                onChangeText={text => setFormData({ ...formData, numberOfRooms: text })}
                style={styles.input}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Amenities</Text>
            <TextInput
                placeholder="Enter amenities (e.g., Pool, Gym)"
                value={formData.amenities}
                onChangeText={text => setFormData({ ...formData, amenities: text })}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 15,
        fontWeight: '600',
        color: colors.baseColor,
    },
    input: {
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});

export default Step2;
