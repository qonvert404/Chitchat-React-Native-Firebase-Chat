import React, { Component } from 'react';
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import { shape, func } from 'prop-types';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions/chat/actions';
import EmptyState from '../../components/common/EmptyState';
import { styles } from './styles';

const getUsers = ({ users, mainUserId }) =>
  users ? [...Object.values(users)].filter(({ id }) => id !== mainUserId) : [];

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  keyExtractor = (item, index) => `user-${index}`;

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      onPress={() => this.props.goToMessage({ receptorData: item })}
      leftAvatar={{ source: { uri: item.avatar } }}
      bottomDivider={true}
    />
  );

  render() {
    const { users, user } = this.props;
    const userList = getUsers({ users, mainUserId: user.uid });
    return (
      <SafeAreaView style={styles.container}>
        <EmptyState list={userList} />
        <FlatList keyExtractor={this.keyExtractor} data={userList} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

Users.defaultProps = {
  users: []
};

Users.propTypes = {
  loadUsers: func.isRequired,
  goToMessage: func.isRequired,
  users: shape({}),
  user: shape({}).isRequired
};

const mapStateToProps = ({ sessionReducer, chatReducer }) => ({
  user: sessionReducer.user,
  users: chatReducer.users
});

const mapDispatchToProps = {
  loadUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
