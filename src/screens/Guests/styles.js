import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderColor: 'lightgrey',
        borderBottomWidth: 1

    }
});

export default styles;