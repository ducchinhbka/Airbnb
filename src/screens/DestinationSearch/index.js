import React, {useState} from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = (props) => {

    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList
                keyExtractor={item => item.id}
                data={search}
                renderItem={({item}) => 
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View> 
                }
            />
        </View>
    );
}

export default DestinationSearch;