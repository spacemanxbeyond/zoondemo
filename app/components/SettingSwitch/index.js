import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Switch, Text, View} from 'react-native';

export default class SettingSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {isSelected: false}
    }

    componentWillMount() {
        this.getSetting();
    }

    async toggle(uid) {
        const update = {};
        update['isSelected'] = !this.state['isSelected'];
        this.setState(update);
        try {
            await AsyncStorage.setItem(uid, JSON.stringify(!this.state['isSelected']));
        } catch (error) {
            // Error saving data
        }
    }

    async getSetting() {
        const {uid} = this.props;
        try {
            const value = await AsyncStorage.getItem(uid);
            if (value !== null) {
                const update = {};
                update['isSelected'] = JSON.parse(value);
                this.setState(update);
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render() {
        const {uid, description} = this.props;
        return (
            <View style={styles.container}>
                <Switch onTintColor={'#ca98f8'} thumbTintColor={'#592fbf'} tintColor={'#DDDDDD'}
                        onValueChange={() => this.toggle(uid)}
                        value={this.state.isSelected}/>
                <Text style={styles.switchLabel}>{description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        margin: 5,
    },

    switchLabel: {
        paddingLeft: 10,
    }
});