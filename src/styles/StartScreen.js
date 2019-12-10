import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15   
    },
    button: {
        width: 95
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputText: {
        width: '80%',
        marginBottom: 20,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default style;