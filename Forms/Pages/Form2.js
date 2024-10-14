import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../../constant/colors';

const Step2 = ({ formData, setFormData }) => {
    // Dropdown data options
    const squareFeetOptions = [
        { label: '500 sq ft', value: '500' },
        { label: '1000 sq ft', value: '1000' },
        { label: '1500 sq ft', value: '1500' },
        { label: '2000 sq ft', value: '2000' },
    ];

    const bedroomOptions = [
        { label: '1 Bedroom', value: '1' },
        { label: '2 Bedrooms', value: '2' },
        { label: '3 Bedrooms', value: '3' },
        { label: '4 Bedrooms', value: '4' },
    ];

    const bathroomOptions = [
        { label: '1 Bathroom', value: '1' },
        { label: '2 Bathrooms', value: '2' },
        { label: '3 Bathrooms', value: '3' },
    ];

    const yesNoOptions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

    const floorOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
    ];

    const parkingOptions = [
        { label: 'Car', value: 'car' },
        { label: 'Bike', value: 'bike' },
    ];

    return (
        <View style={styles.formContainer}>
            {/* Square Feet */}
            <Text style={styles.label}>Square Feet</Text>
            <Dropdown
                style={styles.dropdown}
                data={squareFeetOptions}
                labelField="label"
                valueField="value"
                placeholder="Select square feet"
                value={formData.squareFeet}
                onChange={item => setFormData({ ...formData, squareFeet: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Number of Bedrooms */}
            <Text style={styles.label}>Number of Bedrooms</Text>
            <Dropdown
                style={styles.dropdown}
                data={bedroomOptions}
                labelField="label"
                valueField="value"
                placeholder="Select number of bedrooms"
                value={formData.numberOfBedrooms}
                onChange={item => setFormData({ ...formData, numberOfBedrooms: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Number of Bathrooms */}
            <Text style={styles.label}>Number of Bathrooms</Text>
            <Dropdown
                style={styles.dropdown}
                data={bathroomOptions}
                labelField="label"
                valueField="value"
                placeholder="Select number of bathrooms"
                value={formData.numberOfBathrooms}
                onChange={item => setFormData({ ...formData, numberOfBathrooms: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Lift (Yes/No) */}
            <Text style={styles.label}>Lift</Text>
            <Dropdown
                style={styles.dropdown}
                data={yesNoOptions}
                labelField="label"
                valueField="value"
                placeholder="Select lift availability"
                value={formData.lift}
                onChange={item => setFormData({ ...formData, lift: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Watchman (Yes/No) */}
            <Text style={styles.label}>Watchman</Text>
            <Dropdown
                style={styles.dropdown}
                data={yesNoOptions}
                labelField="label"
                valueField="value"
                placeholder="Select watchman availability"
                value={formData.watchman}
                onChange={item => setFormData({ ...formData, watchman: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Parking */}
            <Text style={styles.label}>Parking</Text>
            <Dropdown
                style={styles.dropdown}
                data={parkingOptions}
                labelField="label"
                valueField="value"
                placeholder="Select parking type"
                value={formData.parking}
                onChange={item => setFormData({ ...formData, parking: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Balcony (Yes/No) */}
            <Text style={styles.label}>Balcony</Text>
            <Dropdown
                style={styles.dropdown}
                data={yesNoOptions}
                labelField="label"
                valueField="value"
                placeholder="Select balcony availability"
                value={formData.balcony}
                onChange={item => setFormData({ ...formData, balcony: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Floor */}
            <Text style={styles.label}>Floor</Text>
            <Dropdown
                style={styles.dropdown}
                data={floorOptions}
                labelField="label"
                valueField="value"
                placeholder="Select floor"
                value={formData.floor}
                onChange={item => setFormData({ ...formData, floor: item.value })}
                placeholderStyle={styles.placeholderStyle}
            />

            {/* Advance Details */}
            <Text style={styles.label}>Advance Details</Text>
            <TextInput
                placeholder="Enter advance details"
                value={formData.advanceDetails}
                onChangeText={text => setFormData({ ...formData, advanceDetails: text })}
                style={styles.input}
                placeholderTextColor="gray"
            />

            {/* Parking Details */}
            <Text style={styles.label}>Parking Details</Text>
            <TextInput
                placeholder="Enter parking details"
                value={formData.parkingDetails}
                onChangeText={text => setFormData({ ...formData, parkingDetails: text })}
                style={styles.input}
                placeholderTextColor="gray"
            />

            {/* Maintenance Details */}
            <Text style={styles.label}>Maintenance Details</Text>
            <TextInput
                placeholder="Enter maintenance details"
                value={formData.maintenanceDetails}
                onChangeText={text => setFormData({ ...formData, maintenanceDetails: text })}
                style={styles.input}
                placeholderTextColor="gray"
            />

            {/* Security Deposit */}
            <Text style={styles.label}>Security Deposit</Text>
            <TextInput
                placeholder="Enter security deposit"
                value={formData.securityDeposit}
                onChangeText={text => setFormData({ ...formData, securityDeposit: text })}
                style={styles.input}
                placeholderTextColor="gray"
            />

            {/* Agreement Details */}
            <Text style={styles.label}>Agreement Details</Text>
            <TextInput
                placeholder="Enter agreement details"
                value={formData.agreementDetails}
                onChangeText={text => setFormData({ ...formData, agreementDetails: text })}
                style={styles.input}
                placeholderTextColor="gray"
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
    dropdown: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        fontSize: 12
    },
    placeholderStyle: {
        color: 'gray',  // Change placeholder color here
        fontSize: 14,
    },
});

export default Step2;
