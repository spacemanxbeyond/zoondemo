import React, {Component} from 'react';
import CommunityFlatList from '../components/CommunityFlatList/RandomUsers'
import DrawerButton from '../components/DrawerButton';

import {View, Text, StyleSheet, Button} from 'react-native';

export default class AboutScreen extends Component {

    static navigationOptions = ({navigation}) => ({

        headerRight: <DrawerButton navigation={navigation} />,
        title: "About Us",

        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#592fbf',
        },

    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>This is a demo app for Zooniverse.</Text>
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
        paddingTop: 10,
        alignItems: 'center',
        justifyContent:'center',
    }
});