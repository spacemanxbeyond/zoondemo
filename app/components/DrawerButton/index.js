import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Images from '@assets/images';

const DrawerButton = (props) => {

    return (
        <View style={{paddingRight: 10}}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('DrawerOpen')
            }}>
                <Image source={Images.menuIcon}/>
            </TouchableOpacity>
        </View>
    );
};

export default DrawerButton;