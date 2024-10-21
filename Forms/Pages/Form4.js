// components/Pages/Step4.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../constant/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const Step4 = ({ formData, setFormData }) => {
    const [images, setImages] = useState([]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            if (images.length < 6) {
                setImages([...images, result.assets[0]]);
            } else {
                Alert.alert('Limit Reached', 'You can only add up to 6 photos.');
            }
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            quality: 1,
        });

        if (!result.canceled) {
            if (images.length < 6) {
                setImages([...images, result.assets[0]]);
            } else {
                Alert.alert('Limit Reached', 'You can only add up to 6 photos.');
            }
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <View style={styles.container}>

            {/* Buttons for uploading and clicking photos */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                    <Feather name="image" size={24} color="white" />
                    <Text style={styles.buttonText}>Upload Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
                    <FontAwesome name="camera" size={20} color="white" />
                    <Text style={styles.buttonText}>Click Photos</Text>
                </TouchableOpacity>
            </View>

            {/* Display selected photos */}
            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={{ uri: image.uri }} style={styles.image} />
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => handleRemoveImage(index)}
                        >
                            <Text style={styles.removeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
        color: colors.baseColor,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    uploadButton: {
        backgroundColor: colors.baseColor,
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 20
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    imageWrapper: {
        position: 'relative',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    removeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 12,
        padding: 4,
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Step4;
