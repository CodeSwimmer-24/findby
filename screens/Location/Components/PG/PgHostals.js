import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import colors from '../../../../constant/colors';

const PgHostals = () => {
    const [floor, setFloor] = useState("All");
    const [availableFor, setAvailableFor] = useState(null);
    const [foodAvailable, setFoodAvailable] = useState(null);
    const [bathroomType, setBathroomType] = useState(null);
    const [facilities, setFacilities] = useState([]);

    const toggleFacility = (item) => {
        setFacilities((prev) =>
            prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
        );
    };

    const renderOptions = (options, selected, setSelected) => (
        <View style={styles.row}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.box, selected === option && styles.activeBox]}
                    onPress={() => setSelected(option)}
                >
                    <Text style={[styles.boxText, selected === option && styles.activeText]}>
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const renderMultiSelect = (options, selectedList, toggleFunc) => (
        <View style={styles.row}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.box, selectedList.includes(option) && styles.activeBox]}
                    onPress={() => toggleFunc(option)}
                >
                    <Text style={[styles.boxText, selectedList.includes(option) && styles.activeText]}>
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Select Your Floor</Text>
            {renderOptions(
                ["All", 'Ground', '0th', '1st', '2nd', '3rd', '4th', '5th +', 'Terrace'],
                floor,
                setFloor
            )}

            <Text style={styles.sectionTitle}>Available For</Text>
            {renderOptions(['Boys', 'Girls'], availableFor, setAvailableFor)}

            <Text style={styles.sectionTitle}>Food Available</Text>
            {renderOptions(['Yes', 'No'], foodAvailable, setFoodAvailable)}

            <Text style={styles.sectionTitle}>Bathroom Type</Text>
            {renderOptions(['Separate', 'Common'], bathroomType, setBathroomType)}

            <Text style={styles.sectionTitle}>Facilities</Text>
            {renderMultiSelect(
                ['Lift', 'Wi-Fi', 'Laundry', 'Room Cleaning', 'Security Guard', 'Power Backup'],
                facilities,
                toggleFacility
            )}
        </ScrollView>
    );
};

export default PgHostals;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
        color: colors.baseColor,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 15,
    },
    box: {
        width: '30%',
        padding: 8,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    activeBox: {
        backgroundColor: colors.baseColor,
        borderColor: colors.baseColor,
    },
    boxText: {
        fontSize: 14,
        color: colors.baseColor,
        textAlign: 'center',
    },
    activeText: {
        color: 'white',
    },
});
