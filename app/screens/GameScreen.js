import React, {Component} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Button} from 'native-base';
import DrawerButton from '../components/DrawerButton';
import Images from '@assets/images';
import {connect} from "react-redux";

// Since we can't dynamically reference image assets through a JSON object. We have to hard our data objects
// Ideally we can use some REST Api to get our data
cards = [
    {
        text: '1',
        name: 'Earth',
        image: Images.earth,
        isPlanet: true,
    },
    {
        text: '2',
        name: 'Jupiter',
        image: Images.jupiter,
        isPlanet: true,
    },
    {
        text: '3',
        name: 'Mars',
        image: Images.mars,
        isPlanet: true,
    },
    {
        text: '4',
        name: 'Titan',
        image: Images.titan,
        isPlanet: false,
    },
    {
        text: '5',
        name: 'Moon',
        image: Images.moon,
        isPlanet: false,
    },
    {
        text: '6',
        name: 'Mars',
        image: Images.mars,
        isPlanet: true,
    },
];

cardIndex = 0;
correctAnswerCount = 0;

class GameScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({

        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Game",

        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#b040ff',
        },

    });

    componentWillMount() {

        cards = [
            {
                text: '1',
                name: 'Earth',
                image: Images.earth,
                isPlanet: true,
            },
            {
                text: '2',
                name: 'Jupiter',
                image: Images.jupiter,
                isPlanet: true,
            },
            {
                text: '3',
                name: 'Mars',
                image: Images.mars,
                isPlanet: true,
            },
            {
                text: '4',
                name: 'Titan',
                image: Images.titan,
                isPlanet: false,
            },
            {
                text: '5',
                name: 'Moon',
                image: Images.moon,
                isPlanet: false,
            },
            {
                text: '6',
                name: 'Mars',
                image: Images.mars,
                isPlanet: true,
            },
        ];

        cardIndex = 0;
        correctAnswerCount = 0;
    }

    checkForCorrectAnswer(answer) {

        const {dispatch, action} = this.props;

        if (answer === "right" && cards[cardIndex].isPlanet) {
            correctAnswerCount++;
            dispatch({type: 'CORRECT'});
            Alert.alert(
                'Correct!',
                cards[cardIndex].name + ' is a planet',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        } else if (answer === "left" && !cards[cardIndex].isPlanet) {
            dispatch({type: 'CORRECT'});
            Alert.alert(
                'Correct!',
                cards[cardIndex].name + ' is a moon',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        } else if (answer === "left" && cards[cardIndex].isPlanet) {
            dispatch({type: 'INCORRECT'});
            Alert.alert(
                'Sorry incorrect',
                cards[cardIndex].name + ' is a planet',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        } else if (answer === "right" && !cards[cardIndex].isPlanet) {
            dispatch({type: 'INCORRECT'});
            Alert.alert(
                'Sorry incorrect',
                cards[cardIndex].name + ' is a moon',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
        console.log("Correct answer so far: " + correctAnswerCount);
        cardIndex++;

        if (cardIndex > cards.length) {
            cardIndex = 0;
            correctAnswerCount = 0;
        }
    }

    render() {
        const {state, action} = this.props;
        const {correctAnswer, incorrectAnswer} = this.props;
        return (
            <Container style={styles.container}>
                <View>
                    <DeckSwiper
                        onSwipeRight={() => this.checkForCorrectAnswer('right')}
                        onSwipeLeft={() => this.checkForCorrectAnswer('left')}
                        looping={false}
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{elevation: 3}}>
                                <CardItem style={{justifyContent: 'center'}}>
                                    <Text style={styles.title}>Planet?</Text>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{height: 300, flex: 1}} source={item.image}/>
                                </CardItem>
                                <CardItem>
                                    <View style={styles.bottomContainer}>
                                        <Icon style={styles.leftIcon} active name="chevron-circle-left" size={54}
                                              color={"#615bdd"}/>
                                        <Text style={styles.no}>NO</Text>
                                        <View style={styles.middle}><Text style={styles.footer}>SWIPE</Text></View>
                                        <Text style={styles.yes}>YES</Text>
                                        <Icon style={styles.rightIcon} active name="chevron-circle-right" size={54}
                                              color={"#615bdd"}/>
                                    </View>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scoreContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftIcon: {
        flexGrow: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },

    middle: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    yes: {
        flexGrow: 0,
        fontSize: 34,
        color: 'green',
        fontWeight: 'bold',
    },

    no: {
        flexGrow: 0,
        fontSize: 34,
        color: 'red',
        fontWeight: 'bold',
    },

    footer: {
        fontSize: 34,
        color: '#c6c1c6',
        fontWeight: 'bold',
    },

    rightIcon: {
        flexGrow: 0,
        paddingLeft: 10,
        paddingRight: 10,
    }
});

const mapStateToProps = (state) => ({
    game: state.game,
    correctAnswer: state.game.correctAnswer,
    incorrectAnswer: state.game.incorrectAnswer,
});

export default connect(mapStateToProps)(GameScreen);