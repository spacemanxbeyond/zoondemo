import React, {Component} from 'react';
import {TouchableOpacity, TouchableHighlight, Image, Linking, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Body,
    Right
} from 'native-base';
import Images from '@assets/images';
import DrawerButton from '../components/DrawerButton';

export default class PlanetsScreen extends Component {

    static navigationOptions = ({navigation}) => ({

        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Planets",

        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#615bdd',
        },

    });

    handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'white'}}>
                    <TouchableHighlight onPress={() => this.handleClick("https://en.wikipedia.org/wiki/Earth")}
                                        activeOpacity={.5} underlayColor={'white'} style={styles.card}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={Images.earth} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={styles.titleText}>Earth</Text>
                                <Text>The Earth is the best place to live in the universe, we must save it.</Text>
                                </Body>
                                <Right>
                                    <Icon active name="chevron-circle-right" size={54} color={"#615bdd"}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handleClick("https://en.wikipedia.org/wiki/Jupiter")}
                                        activeOpacity={.5} underlayColor={'white'} style={styles.card}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={Images.jupiter} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={styles.titleText}>Jupiter</Text>
                                </Body>
                                <Right>
                                    <Icon active name="chevron-circle-right" size={54} color={"#615bdd"}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handleClick("https://en.wikipedia.org/wiki/Mars")}
                                        activeOpacity={.5} underlayColor={'white'} style={styles.card}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={Images.mars} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={styles.titleText}>Mars</Text>
                                </Body>
                                <Right>
                                    <Icon active name="chevron-circle-right" size={54} color={"#615bdd"}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handleClick("https://en.wikipedia.org/wiki/Saturn")}
                                        activeOpacity={.5} underlayColor={'white'} style={styles.card}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={Images.saturn} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={styles.titleText}>Saturn</Text>
                                </Body>
                                <Right>
                                    <Icon active name="chevron-circle-right" size={54} color={"#615bdd"}/>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableHighlight>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});