import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import useLocationStore from "../../store/location";
import colors from "../../constant/colors";
import AntDesign from '@expo/vector-icons/AntDesign';

const LOCATIONS = {
    "New Town": ["Sector 8", "Sector 9", "Sector 5"],
    "Salt Lake": ["Block A", "Block B", "Block C"],
    "Park Street": ["Street 1", "Street 2", "Street 3"],
};

const LocationModal = ({ isVisible, onClose }) => {
    const { selectedLocation, selectedSector, setLocation } = useLocationStore();
    const [tempLocation, setTempLocation] = useState(selectedLocation);
    const [tempSector, setTempSector] = useState(selectedSector);

    const handleApply = () => {
        setLocation(tempLocation, tempSector);
        onClose();
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection="down"
            style={styles.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            useNativeDriver
        >
            <View style={styles.modalContainer}>
                {/* Header Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: "https://img.freepik.com/premium-vector/delhi-red-fort-sketch_250484-316.jpg",
                        }}
                        style={styles.headerImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Modal Title */}
                <Text style={styles.modalTitle}>Select Your Location</Text>

                {/* Description */}
                <Text style={styles.modalDescription}>
                    You have to select the location near which you want to search for your priority.
                </Text>

                {/* Location Pickers */}
                <View style={styles.pickersContainer}>
                    {/* Your Locality Picker */}
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerLabel}>Your Locality</Text>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={tempLocation}
                                onValueChange={(itemValue) => {
                                    setTempLocation(itemValue);
                                    setTempSector(null); // Reset sector when location changes
                                }}
                                style={styles.picker}
                                dropdownIconColor="gray"
                            >
                                <Picker.Item label="Select location" value={null} />
                                {Object.keys(LOCATIONS).map((location) => (
                                    <Picker.Item key={location} label={location} value={location} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    {/* Your Exact Location Picker */}
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerLabel}>Your Exact Location</Text>
                        <View style={styles.pickerWrapper}>
                            <Picker
                                selectedValue={tempSector}
                                onValueChange={setTempSector}
                                style={styles.picker}
                                dropdownIconColor="gray"
                                enabled={tempLocation !== null} // Disable if no location selected
                            >
                                <Picker.Item label={tempLocation ? "Select sector" : "Select location first"} value={null} />
                                {tempLocation &&
                                    LOCATIONS[tempLocation].map((sector) => (
                                        <Picker.Item key={sector} label={sector} value={sector} />
                                    ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.modalActions}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.cancelButtonText}>Skip</Text>
                        <AntDesign name="right" size={16} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.applyButton,
                            (!tempLocation || !tempSector) && styles.disabledButton,
                        ]}
                        onPress={handleApply}
                        disabled={!tempLocation || !tempSector}
                    >
                        <Text style={styles.applyButtonText}>Let's Gooo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

// Stylesheet
const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContainer: {
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 660, // Adjusted to accommodate all elements
        justifyContent: "space-between",
    },
    imageContainer: {
        alignItems: "center",
    },
    headerImage: {
        height: 140,
        width: "80%",
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "600",
        marginTop: 20,
        paddingHorizontal: 5,
        textAlign: "center",
    },
    modalDescription: {
        fontSize: 12,
        fontWeight: "300",
        color: "gray",
        marginBottom: 20,
        paddingHorizontal: 5,
        textAlign: "center",
    },
    pickersContainer: {
        flex: 1,
        justifyContent: "flex-start",
    },
    pickerContainer: {
        marginBottom: 15,
    },
    pickerLabel: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: "#D3D3D3", // Light gray border
        borderRadius: 8,
        overflow: "hidden",
    },
    picker: {
        height: 50,
        width: "100%",
        color: "#000",
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20, // Margin from bottom
    },
    cancelButton: {
        flex: 0.4,
        marginRight: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        flexDirection: "row",
    },
    cancelButtonText: {
        color: colors.baseColor,
        fontSize: 16,
        fontWeight: "400",
        marginRight: 5,
    },
    applyButton: {
        flex: 1,
        backgroundColor: colors.baseColor, // Primary color from constants
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        elevation: 5,
    },
    disabledButton: {
        backgroundColor: "#A9A9A9", // Gray color for disabled state
    },
    applyButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default LocationModal;
