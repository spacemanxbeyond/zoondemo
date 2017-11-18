import React from 'react';
import {Icon, Image, TouchableOpacity, View} from 'react-native';
import Images from '@assets/images';

import {Button, Card, CardItem, Container, Content, Drawer, Header, Left, Title} from 'native-base';

const DrawerButton = (props) => {

    return (
        <View style={{paddingRight:10}}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('DrawerOpen')
            }}>
                <Image source={Images.menuIcon}/>
            </TouchableOpacity>
        </View>
    );
};

export default DrawerButton;