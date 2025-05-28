import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import colors from '../../../../constant/colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Entypo from '@expo/vector-icons/Entypo';

const FlatFilter = () => {
    const [rentRange, setRentRange] = useState([5000, 500000]);
    const [isExpanded, setIsExpanded] = useState(false);

    const [selectedBHK, setSelectedBHK] = useState("All");
    const [selectedFloor, setSelectedFloor] = useState("All");
    const [selectedParking, setSelectedParking] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedSide, setSelectedSide] = useState(null);
    const [selectedBathroom, setSelectedBathroom] = useState(null);
    const [selectedAvailableFor, setSelectedAvailableFor] = useState(null);
    const [selectedFurnishing, setSelectedFurnishing] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [lift, setLift] = useState(null);
    const [security, setSecurity] = useState(null);

    const renderOptions = (options, selected, setSelected) => (
        <View style={styles.row}>
            {options.map((type, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.box, selected === type && styles.activeBox]}
                    onPress={() => setSelected(type)}
                >
                    <Text style={[styles.boxText, selected === type && styles.activeText]}>
                        {type}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <ScrollView>
            <Text style={styles.sectionTitle}>BHK Type</Text>
            {renderOptions(["1 RK", "1 BHK/RK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"], selectedBHK, setSelectedBHK)}

            <Text style={styles.sectionTitle}>Select Your Floor</Text>
            {renderOptions(["All", "Ground", "1'st", "2'nd", "3'rd", "4'th", "5'th", "6'th", "Terrace"], selectedFloor, setSelectedFloor)}

            <Text style={styles.sectionTitle}>Parking Space</Text>
            {renderOptions(["Car Parking", "Bike Parking", "No Parking"], selectedParking, setSelectedParking)}

            <Text style={styles.sectionTitle}>Rent Range: ₹{rentRange[0]} to ₹{rentRange[1]}</Text>
            <MultiSlider
                style={styles.slider}
                values={rentRange}
                sliderLength={340}
                onValuesChange={(values) => setRentRange(values)}
                min={10000}
                max={50000}
                step={2000}
                selectedStyle={{ backgroundColor: colors.baseColor }}
                markerStyle={{ backgroundColor: colors.baseColor }}
            />

            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>{isExpanded ? "View Less Filters" : "View More Filters"}</Text>
                <Entypo name={isExpanded ? "chevron-up" : "chevron-down"} size={24} color="gray" />
            </TouchableOpacity>

            {isExpanded && (
                <>
                    <Text style={styles.sectionTitle}>Carpet Area in Gaz</Text>
                    {renderOptions(["< 100 gaz", "100-200 gaz", "300-400 gaz", "400-500 gaz", "500-600 gaz", "600-700 gaz", "700-800 gaz", "800-900 gaz", "900-1000 gaz"], selectedArea, setSelectedArea)}

                    <Text style={styles.sectionTitle}>Side</Text>
                    {renderOptions(["Front Side", "Back Side", "Ground"], selectedSide, setSelectedSide)}

                    <Text style={styles.sectionTitle}>Bathroom</Text>
                    {renderOptions(["1", "2", "3", "4"], selectedBathroom, setSelectedBathroom)}

                    <Text style={styles.sectionTitle}>Available For</Text>
                    {renderOptions(["Family", "Men", "Women"], selectedAvailableFor, setSelectedAvailableFor)}

                    <Text style={styles.sectionTitle}>Furnishing Status</Text>
                    {renderOptions(["Semi-furnished", "Furnished", "Unfurnished"], selectedFurnishing, setSelectedFurnishing)}

                    <Text style={styles.sectionTitle}>Age of Property</Text>
                    {renderOptions(["0-1 yrs", "1-5 yrs", "5-10 yrs", "10+ yrs"], selectedAge, setSelectedAge)}

                    <Text style={styles.sectionTitle}>Lift Facility</Text>
                    {renderOptions(["Yes", "No"], lift, setLift)}

                    <Text style={styles.sectionTitle}>Security Guard</Text>
                    {renderOptions(["Yes", "No"], security, setSecurity)}
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 5,
        color: colors.baseColor,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 15,
    },
    box: {
        width: "30%",
        padding: 8,
        borderWidth: 0.8,
        borderColor: "gray",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    activeBox: {
        backgroundColor: colors.baseColor,
        borderColor: colors.baseColor,
    },
    boxText: {
        fontSize: 14,
        color: colors.baseColor,
    },
    activeText: {
        color: "white",
    },
    slider: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 40,
        marginBottom: 20,
    },
    viewMoreButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    viewMoreText: {
        fontSize: 14,
        color: "gray",
        marginRight: 5,
    },
});

export default FlatFilter;
