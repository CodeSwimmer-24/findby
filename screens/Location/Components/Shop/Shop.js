import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import colors from '../../../../constant/colors';

const Shop = () => {
    const [area, setArea] = useState([0, 1000]);
    const [rent, setRent] = useState([5000, 500000]);
    const [bathroom, setBathroom] = useState(null);
    const [side, setSide] = useState(null);
    const [furnishing, setFurnishing] = useState(null);

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
            {/* Area Selection */}
            <Text style={styles.sectionTitle}>Shop Area (Gaz): {area[0]} to {area[1]}</Text>
            <MultiSlider
                values={area}
                onValuesChange={setArea}
                min={0}
                max={1000}
                step={10}
                sliderLength={340}
                selectedStyle={{ backgroundColor: colors.baseColor }}
                markerStyle={{ backgroundColor: colors.baseColor }}
            />

            {/* Rent/Cost */}
            <Text style={styles.sectionTitle}>Rent/Cost: ₹{rent[0]} to ₹{rent[1]}</Text>
            <MultiSlider
                values={rent}
                onValuesChange={setRent}
                min={0}
                max={500000000}
                step={1000000}
                sliderLength={340}
                selectedStyle={{ backgroundColor: colors.baseColor }}
                markerStyle={{ backgroundColor: colors.baseColor }}
            />

            {/* Bathroom */}
            <Text style={styles.sectionTitle}>Bathroom</Text>
            {renderOptions(["Yes", "No"], bathroom, setBathroom)}

            {/* Side */}
            <Text style={styles.sectionTitle}>Side</Text>
            {renderOptions(["Front Side", "Gali"], side, setSide)}

            {/* Furnishing */}
            <Text style={styles.sectionTitle}>Furnishing Status</Text>
            {renderOptions(["Furnished", "Semi Furnished", "Unfurnished"], furnishing, setFurnishing)}
        </ScrollView>
    );
};

export default Shop;

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
