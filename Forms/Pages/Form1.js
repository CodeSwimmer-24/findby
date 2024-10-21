// components/forms/Step1.js

import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown'; // Import Dropdown component
import colors from '../../constant/colors';

const PROPERTY_TYPES = [
    { label: 'Room', value: 'Room' },
    { label: 'Flat', value: 'Flat' },
    { label: 'Office', value: 'Office' },
    { label: 'Shop', value: 'Shop' },
    { label: 'Parking', value: 'Parking' },
    { label: 'Goudune', value: 'Goudune' }
];

const Step1 = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            {/* Property Type Dropdown */}
            <Text style={styles.label}>Property Type</Text>
            <Dropdown
                style={styles.input} // Apply the same style as other input boxes
                data={PROPERTY_TYPES}
                labelField="label"
                valueField="value"
                placeholder="Select property type"
                value={formData.propertyType}
                onChange={item => setFormData({ ...formData, propertyType: item.value })}
                placeholderStyle={styles.placeholderStyle} // Custom placeholder style
                selectedTextStyle={styles.selectedTextStyle} // Custom selected text style
                containerStyle={styles.dropdownContainer} // Dropdown container style
                renderRightIcon={() => <AntDesign name="down" size={16} color="gray" />}
            />

            {/* Apartment/House Name */}
            <Text style={styles.label}>Apartment/House Name</Text>
            <TextInput
                placeholder="Enter property name"
                value={formData.propertyName}
                onChangeText={text => setFormData({ ...formData, propertyName: text })}
                style={styles.input}
            />

            {/* Exact Location */}
            <Text style={styles.label}>Exact Location</Text>
            <TextInput
                placeholder="Enter exact location"
                value={formData.address}
                onChangeText={text => setFormData({ ...formData, address: text })}
                style={styles.input}
            />

            {/* Locality */}
            <Text style={styles.label}>Locality</Text>
            <TextInput
                placeholder="Enter locality"
                value={formData.locality}
                onChangeText={text => setFormData({ ...formData, locality: text })}
                style={styles.input}
            />

            {/* Area */}
            <Text style={styles.label}>Area</Text>
            <TextInput
                placeholder="Enter Area"
                value={formData.area} // Corrected from locality to area
                onChangeText={text => setFormData({ ...formData, area: text })}
                style={styles.input}
            />

            {/* Transaction Type Radio Buttons */}
            <Text style={styles.label}>Transaction Type</Text>
            <View style={styles.radioContainer}>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setFormData({ ...formData, transactionType: 'For Rent' })}
                    activeOpacity={0.8}
                >
                    <AntDesign
                        name={formData.transactionType === 'For Rent' ? 'checkcircle' : 'checkcircleo'}
                        size={20}
                        color={formData.transactionType === 'For Rent' ? colors.baseColor : 'gray'}
                    />
                    <Text style={styles.radioLabel}>For Rent</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setFormData({ ...formData, transactionType: 'For Sale' })}
                    activeOpacity={0.8}
                >
                    <AntDesign
                        name={formData.transactionType === 'For Sale' ? 'checkcircle' : 'checkcircleo'}
                        size={20}
                        color={formData.transactionType === 'For Sale' ? colors.baseColor : 'gray'}
                    />
                    <Text style={styles.radioLabel}>For Sale</Text>
                </TouchableOpacity>
            </View>

            {/* Short Description */}
            <Text style={styles.label}>Short Description</Text>
            <TextInput
                placeholder="Enter a short description"
                value={formData.shortDescription}
                onChangeText={text => setFormData({ ...formData, shortDescription: text })}
                style={[styles.input, styles.textArea]} // Add a separate style for the text area
                multiline
                numberOfLines={3}
                textAlignVertical="top" // Ensures text starts at the top
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
    placeholderStyle: {
        color: 'gray',
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000',
    },
    dropdownContainer: {
        borderWidth: 0.7,
        borderColor: 'lightgray',
        borderRadius: 8,
    },
    textArea: {
        height: 100, // Adjust height as needed
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
    },
});

export default Step1;
