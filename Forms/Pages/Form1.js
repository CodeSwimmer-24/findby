// components/forms/Step1.js

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../constant/colors';

const Step1 = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Apartment/House Name</Text>
            <TextInput
                placeholder="Enter property name"
                value={formData.propertyName}
                onChangeText={text => setFormData({ ...formData, propertyName: text })}
                style={styles.input}
            />

            <Text style={styles.label}>Exact Location</Text>
            <TextInput
                placeholder="Enter exact location"
                value={formData.address}
                onChangeText={text => setFormData({ ...formData, address: text })}
                style={styles.input}
            />

            <Text style={styles.label}>Locality</Text>
            <TextInput
                placeholder="Enter locality"
                value={formData.locality}
                onChangeText={text => setFormData({ ...formData, locality: text })}
                style={styles.input}
            />
            <Text style={styles.label}>Area</Text>
            <TextInput
                placeholder="Enter Area"
                value={formData.locality}
                onChangeText={text => setFormData({ ...formData, locality: text })}
                style={styles.input}
            />

            <Text style={styles.label}>Short Description</Text>
            <TextInput
                placeholder="Enter a short description"
                value={formData.shortDescription}
                onChangeText={text => setFormData({ ...formData, shortDescription: text })}
                style={[styles.input, styles.textArea]} // Add a separate style for the text area
                multiline
                numberOfLines={3}
                textAlignVertical="top" // This ensures text starts at the top
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
        backgroundColor: 'white',
        marginBottom: 2,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 0.7,
        borderColor: 'lightgray',
    },
});

export default Step1;
