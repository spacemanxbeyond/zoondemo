import React, {Component} from 'react';
import DrawerButton from '../components/DrawerButton';
import {Button, StyleSheet, Text, View} from 'react-native';

class SettingsScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Settings",

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
                <Text>Settings</Text>
            </View>
        )
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
        justifyContent: 'center',
    }
});


export default SettingsScreen;