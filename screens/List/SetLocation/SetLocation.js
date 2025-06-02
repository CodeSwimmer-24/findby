import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { Picker } from '@react-native-picker/picker';
import colors from '../../../constant/colors';

const SetLocation = ({ isModalVisible, toggleModal }) => {

    const [city, setCity] = useState("delhi");
    const [location, setLocation] = useState(null);
    const [exactLocation, setExactLocation] = useState(null);


    const cityItems = [
        { label: "Bangalore", value: "bangalore" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Delhi", value: "delhi" },
    ];

    const locationItems = [
        { label: "Koramangala", value: "koramangala" },
        { label: "Whitefield", value: "whitefield" },
        { label: "Indiranagar", value: "indiranagar" },
    ];

    const exactLocationItems = [
        { label: "Exact Location 1", value: "exactLocation1" },
        { label: "Exact Location 2", value: "exactLocation2" },
        { label: "Exact Location 3", value: "exactLocation3" },
    ];

    return (
        <View style={styles.container}>

            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropOpacity={0.5}
            >
                <View style={styles.modalContent}>
                    <View style={styles.modalHandle} />

                    <Text style={styles.modalTitle}>Set Location</Text>

                    <View style={{ display: "none" }}>
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownLabel}>Select City</Text>
                            <View style={styles.pickerWrapper}>
                                <Picker
                                    selectedValue={city}
                                    onValueChange={(value) => setCity(value)}
                                    dropdownIconColor={colors.baseColor}
                                >
                                    <Picker.Item label="Select City" value={null} />
                                    {cityItems.map((item) => (
                                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                    </View>

                    {/* Select Location (conditional) */}
                    {city && (
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownLabel}>Select Location</Text>
                            <View style={styles.pickerWrapper}>
                                <Picker
                                    selectedValue={location}
                                    onValueChange={(value) => setLocation(value)}
                                    dropdownIconColor={colors.baseColor}
                                >
                                    <Picker.Item label="Select Location" value={null} />
                                    {locationItems.map((item) => (
                                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                    )}

                    {/* Select Exact Location (conditional) */}
                    {location && (
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownLabel}>Select Exact Location</Text>
                            <View style={styles.pickerWrapper}>
                                <Picker
                                    selectedValue={exactLocation}
                                    onValueChange={(value) => setExactLocation(value)}
                                    dropdownIconColor={colors.baseColor}
                                >
                                    <Picker.Item label="Select Exact Location" value={null} />
                                    {exactLocationItems.map((item) => (
                                        <Picker.Item
                                            key={item.value}
                                            label={item.label}
                                            value={item.value}
                                            color={exactLocation === item.value ? colors.baseColor : colors.baseColor}
                                            style={exactLocation === item.value ? styles.selectedItem : {}}
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                    )}

                    <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                        <Text style={styles.closeButtonText}>Find Your Place</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default SetLocation

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 12,
        paddingHorizontal: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 300,
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#ddd',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    dropdownContainer: {
        marginBottom: 20,
    },
    dropdownLabel: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderRadius: 10,
        backgroundColor: "#f8f8f8",
    },
    modalBody: {
        flex: 1,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    modalButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    modalButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        fontWeight: '500',
    },
    selectedItem: {
        backgroundColor: "#f0f0f0"

    },
    closeButton: {
        backgroundColor: colors.baseColor,
        paddingVertical: 15,
        borderRadius: 8,
        elevation: 5
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
})