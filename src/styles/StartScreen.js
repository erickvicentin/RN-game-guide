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
        width: '40%'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0 , height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
        borderRadius: 10,

    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputText: {
        width: '80%',
        marginBottom: 20,
        textAlign: 'center',
    }
});

export default style;