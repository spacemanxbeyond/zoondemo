import React, {Component} from 'react';
import CommunityFlatList from '../components/CommunityFlatList/RandomUsers'
import DrawerButton from '../components/DrawerButton';

import {View, Text, StyleSheet, Button} from 'react-native';

export default class CommunityScreen extends Component {

    static navigationOptions = ({navigation}) => ({

        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Community",

        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#d000ff',
        },

    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <CommunityFlatList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18
    },
    container: {
        flex: 1,
        paddingTop: 10
    }
});