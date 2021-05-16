import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
const DestinationSearch = (props) => {

    const navigation = useNavigation();
    return (


        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    navigation.navigate('Guests')
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyBmeuaWQ005oxyRalpVH9c0C8yfHGPQSUM',
                    language: 'en',
                    type: '(cities)'
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />


        </View>
    );
}

export default DestinationSearch;