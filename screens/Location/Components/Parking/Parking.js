import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import colors from '../../../../constant/colors';

const Parking = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [parkingType, setParkingType] = useState(null);
    const [budget, setBudget] = useState([0, 500000]);

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

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Select Vehicle Type</Text>
            {renderOptions(["Bike", "Small Car", "Big Car", "Auto", "Other"], selectedVehicle, setSelectedVehicle)}

            <Text style={styles.sectionTitle}>Select Parking Type</Text>
            {renderOptions(["Open Area", "Shade Area", "Building Parking"], parkingType, setParkingType)}

            <Text style={styles.sectionTitle}>Budget: ₹{budget[0]} to ₹{budget[1]}</Text>
            <MultiSlider
                values={budget}
                onValuesChange={(values) => setBudget(values)}
                min={0}
                max={500000}
                step={5000}
                sliderLength={340}
                selectedStyle={{ backgroundColor: colors.baseColor }}
                markerStyle={{ backgroundColor: colors.baseColor }}
            />
        </ScrollView>
    );
};

export default Parking;

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
