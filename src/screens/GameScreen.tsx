import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../constants/styles';

const GameScreen = () => {
    return (
        <View style={styles.basicContainer}>
            {Array(3).fill(null).map((_, index) => (
                <TouchableOpacity key={index} style={styles.box} />
            ))}
        </View>
    );
};

export default GameScreen;
