import React, {Component} from 'react';

import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Images from '@assets/images';
import {NavigationActions} from 'react-navigation'

import {Drawer, Container, Content, Card, Header, Body, Button, Title, CardItem, Left, Icon} from 'native-base';

class DrawerMenu extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({});

    onHomePressed = () => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
        }))
    };

    navigateTo = (screen) => {

        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'}),
                NavigationActions.navigate({ routeName: screen})
            ]
        });
        this.props.navigation.dispatch(resetAction);

    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Header style={styles.header}><Text style={styles.headerTitle}>Menu</Text></Header>
                <Content>
                    <Button large transparent iconLeft onPress={() => this.onHomePressed()}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.textContent}>Home</Text>
                    </Button>
                    <Button large transparent iconLeft onPress={() => this.navigateTo('About')}>
                        <Icon name='about' style={styles.icon}/>
                        <Text style={styles.textContent}>About</Text>
                    </Button>
                    <Button large transparent iconLeft onPress={() => this.navigateTo('Settings')}>
                        <Icon name='settings' style={styles.icon}/>
                        <Text style={styles.textContent}>Settings</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f1ecf1',
    },
    textContent: {
        fontSize: 20,
        color: 'gray',
        paddingLeft: 10,
    },
    icon: {
        width: 20,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccecf',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }
};

export default DrawerMenu;
