import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: 'black',
        fontSize: 18,
        
    }
});

export default style;