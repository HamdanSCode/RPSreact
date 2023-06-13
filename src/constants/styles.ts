import { View, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    basicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'gray',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 40
    },
    subText: {
        fontWeight: 'normal',
        fontSize: 20
    }
});

export default styles;