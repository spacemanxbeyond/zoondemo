import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import DrawerButton from '../components/DrawerButton';
import settings from '../data/local/settingsData.json';
import SettingSwitch from '../components/SettingSwitch';

class SettingsScreen extends Component {

    generalSettings = settings[0]['GeneralSettings'];
    generalNotifications = settings[1]['GeneralNotifications'];
    planetNotifications = settings[2]['PlanetNotifications'];

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
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={styles.sectionHeader}>General Settings</Text>
                    <View style={styles.switchesContainer}>
                        {
                            this.generalSettings.map((data) =>
                                <SettingSwitch key={data.uid} uid={data.uid} description={data.description}/>
                            )
                        }
                    </View>

                    <Text style={styles.sectionHeader}>General Notifications</Text>
                    <View style={styles.switchesContainer}>
                        {
                            this.generalNotifications.map((data) =>
                                <SettingSwitch key={data.uid} uid={data.uid} description={data.description}/>
                            )
                        }
                    </View>

                    <Text style={styles.sectionHeader}>Planet Update Notifications</Text>
                    <View style={styles.switchesContainer}>
                        {
                            this.planetNotifications.map((data) =>
                                <SettingSwitch key={data.uid} uid={data.uid} description={data.description}/>
                            )
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    switchesContainer: {
        paddingTop: 5,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
    }
});

export default SettingsScreen;