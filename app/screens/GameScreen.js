import React, {Component} from 'react';
import {
    Alert, TouchableHighlight,
    Animated, Dimensions, Image, StyleSheet,
    Modal, Text, View, Button
} from 'react-native';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Card, CardItem, Container, DeckSwiper, Header, Left, Thumbnail} from 'native-base';
import DrawerButton from '../components/DrawerButton';
import {gameCards} from '../data/local/gameData'
import {NavigationActions} from "react-navigation";


class GameScreen extends Component {

    cardIndex = 0;

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

    checkForCorrectAnswer(answer) {

        const {dispatch, action} = this.props;

        if (answer === "right" && gameCards[this.cardIndex].isPlanet) {
            dispatch({type: 'CORRECT'});
            this.showAnswerAlert('Correct', gameCards[this.cardIndex].name + ' is a planet');
        } else if (answer === "left" && !gameCards[this.cardIndex].isPlanet) {
            dispatch({type: 'CORRECT'});
            this.showAnswerAlert('Correct', gameCards[this.cardIndex].name + ' is a moon');
        } else if (answer === "left" && gameCards[this.cardIndex].isPlanet) {
            dispatch({type: 'INCORRECT'});
            this.showAnswerAlert('Sorry incorrect', gameCards[this.cardIndex].name + ' is a planet');
        } else if (answer === "right" && !gameCards[this.cardIndex].isPlanet) {
            dispatch({type: 'INCORRECT'});
            this.showAnswerAlert('Sorry incorrect', gameCards[this.cardIndex].name + ' is a moon',);
        }

        this.cardIndex++;
    }

    quitGame() {
        const {dispatch, action} = this.props;
        dispatch({type: 'RESET_GAME'});
        this.gotoHomeScreen();

    }

    playAgain() {
        const {dispatch, action} = this.props;
        dispatch({type: 'RESET_GAME'});
        this.restartGame('Game');
    }

    gotoHomeScreen = () => {
        const {dispatch} = this.props.navigation;
        dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'Home'})]
        }))
    };

    restartGame = (screen) => {
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

    showAnswerAlert(messageTitle, messageBody) {
        Alert.alert(
            messageTitle,
            messageBody,
            [
                {
                    text: 'OK', onPress: () => {
                        if (this.cardIndex >= gameCards.length) {
                            this.cardIndex = 0;
                            this.showPlayAgainAlert();
                        }
                    }
                },
            ]
        )
    }

    showPlayAgainAlert() {
        Alert.alert(
            'Game Over',
            'Play again?',
            [
                {text: 'NO', onPress: () => this.quitGame()},
                {text: 'YES!', onPress: () => this.playAgain()},
            ],
            {cancelable: false}
        )
    }

    render() {
        const {state, action} = this.props;
        const {correctAnswer, incorrectAnswer} = this.props;
        return (

            <Container style={styles.container}>

                <View style={styles.deckSwiperContainer}>
                    <DeckSwiper
                        onSwipeRight={() => this.checkForCorrectAnswer('right')}
                        onSwipeLeft={() => this.checkForCorrectAnswer('left')}
                        looping={false}
                        dataSource={gameCards}
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
                                              color={"#b040ff"}/>
                                        <Text style={styles.no}>NO</Text>
                                        <View style={styles.middle}><Text style={styles.footer}>SWIPE</Text></View>
                                        <Text style={styles.yes}>YES</Text>
                                        <Icon style={styles.rightIcon} active name="chevron-circle-right" size={54}
                                              color={"#b040ff"}/>
                                    </View>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>

                <View style={styles.scoreContainer}>
                    <Text style={{fontWeight: 'bold', color: '#979797', fontSize: 18}}>Correct
                        answers: {correctAnswer}/{gameCards.length}</Text>
                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    deckSwiperContainer: {
        flex: 1,
        flexGrow: 2,
    },
    scoreContainer: {
        height: 50,
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
        color: '#DDDDDD',
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