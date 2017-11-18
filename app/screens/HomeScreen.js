import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Button} from 'react-native-elements';
import DrawerButton from '../components/DrawerButton'
import MainNavButton from '../components/MainNavButton'

import {View, Text, StyleSheet} from 'react-native';
import Images from "../assets/images";

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Zoon Demo",
        headerBackTitle: null,
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
                <View style={styles.buttonContainer}>
                    <MainNavButton title={'Planets'} onPress={() => navigate('Planets')}
                                   style={{backgroundColor: '#615bdd'}}
                                   imageSource={require('../assets/icons/ic_public_white_36dp_2x.png')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <MainNavButton title={'Game'} onPress={() => navigate('Game')} style={{backgroundColor: '#b040ff'}}
                                   imageSource={require('../assets/icons/ic_sentiment_very_satisfied_white_36dp_2x.png')}/>
                </View>
                <View style={styles.buttonContainer}>
                    <MainNavButton title={'Community'} onPress={() => navigate('Community')}
                                   style={{backgroundColor: '#d000ff'}}
                                   imageSource={require('../assets/icons/ic_group_white_36dp_2x.png')}/>
                </View>
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
        paddingTop: 50,
        backgroundColor: "#ca98f8",
    },
    buttonContainer: {
        paddingBottom: 10,
        backgroundColor: "#ca98f8",
    },

});

export default connect()(HomeScreen);