import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = (props) => {

    const navigation = useNavigation();
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (

        <View style={{ height: '100%', justifyContent: 'space-between' }}>

            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adult</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setAdults(adults > 0 ? adults - 1 : 0)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
                            {adults}
                        </Text>
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 2-12</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setChildren(children > 0 ? children - 1 : 0)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
                            {children}
                        </Text>
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                        <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setInfants(infants > 0 ? infants - 1 : 0)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
                            {infants}
                        </Text>
                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Pressable
                onPress={() =>
                    navigation.navigate('Explore', {
                        screen: 'SearchResults',
                    })
                }
                style={{
                    marginBottom: 20,
                    backgroundColor: '#f15454',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Search</Text>
            </Pressable>
        </View>
    );
}

export default GuestsScreen;