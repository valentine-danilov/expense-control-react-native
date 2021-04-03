import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#3F5EFB',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        width: 250,
        elevation: 4,
        borderRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        textAlign: 'center'
    },
});