import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const style = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10, 
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    }
});

export default style;