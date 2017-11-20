import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerButton from '../components/DrawerButton';

class AboutScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: <DrawerButton navigation={navigation}/>,
        title: "About Us",
        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#592fbf',
        },

    });

    render() {
        return (
            <View style={styles.container}>
                <Text>This is a demo app for Zooniverse.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default AboutScreen;