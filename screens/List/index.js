import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useIsFocused, useRoute } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Card from "./Cards";
import colors from "../../constant/colors";
import SetLocation from "./SetLocation/SetLocation";

const List = ({ navigation }) => {
  const isFocused = useIsFocused();
  const route = useRoute();
  const { category } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Auto-open modal when location is null
  useEffect(() => {
    if (location === null) {
      setModalVisible(true);
    }
  }, [location]);

  useEffect(() => {
    if (isFocused) {
      const parent = navigation.getParent();
      parent?.setOptions({
        tabBarStyle: { display: "none" },
      });
    }
  }, [isFocused]);

  const handleLocationSet = (selectedLocation) => {
    setLocation(selectedLocation);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Entypo name="chevron-left" size={24} color={colors.baseColor} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{category}</Text>
        </View>
      </View>

      {/* Filter Section */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filter}>
          <MaterialCommunityIcons
            name="filter"
            size={24}
            color={colors.baseColor}
          />
        </TouchableOpacity>
        {["3 BHK", "2 BHK", "4 BHK", "1 BHK"].map((bhk) => (
          <TouchableOpacity key={bhk} style={styles.filterButton}>
            <Text style={styles.filterText}>{bhk}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Entypo name="location" size={20} color={colors.baseColor} />
        <Text style={styles.footerText}>
          Know <Text style={styles.highlight}>
            {location || "Lalpur"}
          </Text> with
        </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Locality Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <Card navigation={navigation} />
      </View>

      {/* Location Modal */}
      <SetLocation
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        onLocationSet={handleLocationSet}
        toggleModal={toggleModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.baseColor,
  },
  filters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 15,
  },
  filter: {
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  filterText: {
    fontSize: 14,
    color: colors.baseColor,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    marginLeft: 5,
  },
  highlight: {
    fontWeight: "600",
    color: colors.baseColor,
  },
  linkText: {
    fontSize: 16,
    color: colors.baseColor,
    marginLeft: 5,
    fontWeight: "600",
  },
  cardContainer: {
    flex: 1,
    marginTop: 0,
  },
});

// Modal Styles
const modalStyles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  modalButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default List;