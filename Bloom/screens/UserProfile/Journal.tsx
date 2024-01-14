import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { getJournals } from '../../api/journal/Journal';
import Diary from '../../components/Journal/Diary';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

const Journal = () => {
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { data: Journals, isLoading, isError, isFetched, refetch } = getJournals();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch().then(() => setRefreshing(false)); // Assuming `refetch` is a function to re-fetch journals
    }, [refetch()]);

    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.content}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text style={styles.headingText}>My Journal</Text>
                <View style={styles.card}>
                    {Journals?.map((ele: any) => (
                        <Diary
                            key={ele.id}
                            diary={{ content: ele.content, title: ele.title, id: ele.id }}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
               <TouchableOpacity onPress={() => navigation.navigate('CreateJournal')}>
                <Ionicons
                    name='add-circle-sharp'
                    size={54}
                    color='black'
                />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    content: {
        flex: 1, 
    },
    buttonContainer: {
        alignItems: 'center', 
        marginBottom: 10, 
    },
    headingText: {
        fontSize: 36,
        margin:10,
        color: '#242424'
     },
     card: {
        flex:1,

     },
});

export default Journal;
