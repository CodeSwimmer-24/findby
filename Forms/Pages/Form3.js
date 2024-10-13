// components/forms/Step3.js

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../constant/colors';

const Step3 = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Rent Price ($)</Text>
            <TextInput
                placeholder="Enter rent price"
                value={formData.rentPrice}
                onChangeText={text => setFormData({ ...formData, rentPrice: text })}
                style={styles.input}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Availability Date</Text>
            <TextInput
                placeholder="Enter availability date (e.g., YYYY-MM-DD)"
                value={formData.availabilityDate}
                onChangeText={text => setFormData({ ...formData, availabilityDate: text })}
                style={styles.input}
            // For a better user experience, consider integrating a Date Picker
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

export default Step3;
