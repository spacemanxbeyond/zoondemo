import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import {List, ListItem, SearchBar} from "react-native-elements";
import {connect} from 'react-redux';
import DrawerButton from '../components/DrawerButton';
import {fetchRandomUsersData} from '../actions/fetchRandomUsersDataAction'

class CommunityScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    static navigationOptions = ({navigation}) => ({
        headerRight: <DrawerButton navigation={navigation}/>,
        title: "Community",
        headerTintColor: 'white',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center', color: 'white'},
        headerStyle: {
            backgroundColor: '#d000ff',
        },

    });

    componentWillMount() {
        this.props.fetchRandomUsersData();
    }

    handleRefresh = () => {
        //TODO: Proper handle refresh
    };

    handleLoadMore = () => {
        //TODO: Proper handle load more
    };

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round/>;
    };

    renderFooter = () => {
        if (!this.state.isFetching) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    render() {
        return (
            <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
                <FlatList
                    data={this.props.randomUsersData.data}
                    renderItem={({item}) => (
                        <ListItem
                            roundAvatar
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            avatar={{uri: item.picture.thumbnail}}
                            containerStyle={{borderBottomWidth: 0}}
                        />
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={50}
                />
            </List>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    },
    footer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    }
});

function mapStateToProps(state) {
    return {
        randomUsersData: state.randomUsersData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRandomUsersData: () => dispatch(fetchRandomUsersData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityScreen)