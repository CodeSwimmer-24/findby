import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FlatForm = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Number of Bedrooms</Text>
            <TextInput
                value={formData.bedrooms}
                onChangeText={text => setFormData({ ...formData, bedrooms: text })}
                placeholder="Enter number of bedrooms"
                style={styles.input}
            />

            {/* Add more fields specific to Flats */}
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: { marginBottom: 30, paddingHorizontal: 10 },
    label: { fontSize: 14, marginBottom: 5, marginTop: 15, fontWeight: '600', color: '#333' },
    input: { backgroundColor: 'white', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: 'gray', marginBottom: 10 },
});

export default FlatForm;
