import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: "#fff",
        width: '70%',
        marginLeft: 25
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginTop: 25,
        marginLeft: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        top: 20
        

    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

});

export default styles;