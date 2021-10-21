import React, { Component } from 'react'
import { SafeAreaView, View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator, dataSource, loading } = props
    return (
        <SafeAreaView style={styles.parentContainer}>
           
            <View style={{ margin: 18 }}>
                <Button
                    title={'Get With Fetch'}
                    onPress={goForFetch}
                    color='purple'
                />
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Get With Axios'}
                    onPress={goForAxios}
                    color='purple'
                />
            </View>


            {fromFetch ?
                <FlatList
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                /> : <FlatList
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </SafeAreaView>
    )
}
export default ApiView;