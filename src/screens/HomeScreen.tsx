import React from 'react';
import BaseText from '../components/atoms/BaseText';
import { View, TouchableWithoutFeedback, } from 'react-native';
import { StackNavigationProp, } from '@react-navigation/stack';
import styles from '../constants/styles';
import STRING_RESOURCES from '../constants/strings';
import SectionText from '../components/molecules/SectionText';

type HomeScreenNavigationProp = StackNavigationProp<
    { Game: undefined },
    'Game'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
    return (
        // I don't think it makes sense to make a molecule or organism for this,
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Game')}>
            <View style={styles.basicContainer}>
                <SectionText text={STRING_RESOURCES.welcomeTitle} textStyle={styles.titleText} containerStyle={styles.basicContainer} />
                <SectionText text={STRING_RESOURCES.welcomeSubText} textStyle={styles.subText} containerStyle={styles.basicContainer} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default HomeScreen;
