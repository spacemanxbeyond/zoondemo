import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from "react-redux";
import {NavigationActions} from 'react-navigation'
import {Button, Container, Content, Header, Icon} from 'native-base';

class DrawerMenu extends Component {

    constructor(props) {
        super(props);
    }

    onHomePressed = () => {
        const {dispatch} = this.props.navigation;
        dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
        }))
    };

    //TODO: This a workaround for no replace screen in react native navigation
    onNavigateTo = (screen) => {
        const {dispatch} = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({routeName: 'Home'}),
                NavigationActions.navigate({routeName: screen})
            ]
        });
        dispatch(resetAction);
    };

    render() {

        return (
            <Container style={styles.container}>
                <Header style={styles.header}><Text style={styles.headerTitle}>Menu</Text></Header>
                <Content>
                    <Button large transparent iconLeft onPress={() => this.onHomePressed()}>
                        <Icon name='home' style={styles.icon}/>
                        <Text style={styles.textContent}>Home</Text>
                    </Button>
                    <Button large transparent iconLeft onPress={() => this.onNavigateTo('About')}>
                        <Icon name='about' style={styles.icon}/>
                        <Text style={styles.textContent}>About</Text>
                    </Button>
                    <Button large transparent iconLeft onPress={() => this.onNavigateTo('Settings')}>
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

const mapStateToProps = (state) => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(DrawerMenu);
