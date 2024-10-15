import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../constant/colors';

const Step3 = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            {/* Owner Name */}
            <Text style={styles.label}>Owner Name</Text>
            <TextInput
                placeholder="Enter owner name"
                value={formData.ownerName}
                onChangeText={text => setFormData({ ...formData, ownerName: text })}
                style={styles.input}
            />

            {/* Phone Number */}
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChangeText={text => setFormData({ ...formData, phoneNumber: text })}
                style={styles.input}
                keyboardType="phone-pad"  // Use phone-pad for numeric input
            />

            {/* Rent Price */}
            <Text style={styles.label}>Rent Price (₹)</Text>
            <TextInput
                placeholder="Enter rent price"
                value={formData.rentPrice}
                onChangeText={text => setFormData({ ...formData, rentPrice: text })}
                style={styles.input}
                keyboardType="numeric"
            />

            {/* Availability Date */}
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
        marginTop: 10,
        fontWeight: '600',
        color: colors.baseColor,
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
});

export default Step3;
