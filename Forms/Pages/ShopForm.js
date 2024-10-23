import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ShopForm = ({ formData, setFormData }) => {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Shop Area</Text>
            <TextInput
                value={formData.shopArea}
                onChangeText={text => setFormData({ ...formData, shopArea: text })}
                placeholder="Enter shop area in sq ft"
                style={styles.input}
            />

            {/* Add more fields specific to Shops */}
        </View>

    );
};

const styles = StyleSheet.create({
    formContainer: { marginBottom: 30, paddingHorizontal: 10 },
    label: { fontSize: 14, marginBottom: 5, marginTop: 15, fontWeight: '600', color: '#333' },
    input: { backgroundColor: 'white', padding: 10, borderRadius: 8, borderWidth: 1, borderColor: 'gray', marginBottom: 10 },
});

export default ShopForm;
