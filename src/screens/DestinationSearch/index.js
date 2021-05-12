import React, {useState} from 'react';
import { Text, View, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = (props) => {

    const navigation = useNavigation();
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
                    <Pressable style={styles.row}
                        onPress={() => navigation.navigate('Guests')}
                    >
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable> 
                }
            />
        </View>
    );
}

export default DestinationSearch;