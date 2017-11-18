import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MainNavButton extends Component {

    render() {
        const {onPress, title, imageSource, style} = this.props;
        const {container} = styles;
        // Technique for combining styles to passed into components
        // Ref: https://stackoverflow.com/questions/29363671/can-i-make-dynamic-styles-in-react-native
        const combineStyles = StyleSheet.flatten([container, style]);
        return (
            <TouchableOpacity onPress={onPress} style={combineStyles}>
                <View style={styles.leftIcon}>
                    <Image source={imageSource}/>
                </View>

                <Text style={styles.buttonLabel}>
                    {title}
                </Text>

                <View style={styles.rightIcon}>
                    <Icon name='angle-right' size={34} color={"#fff"}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0,
        borderColor: '#fff',
        height: 80,
        borderRadius: 5,
        margin: 5,
    },

    leftIcon: {
        flexGrow: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },

    buttonLabel: {
        flexGrow: 1,
        fontSize: 34,
        paddingRight: 10,
        color: 'white',
    },

    rightIcon: {
        flexGrow: 0,
        paddingRight: 10,
    }
});
