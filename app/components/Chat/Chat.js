import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { sendMessage, loadMessages } from '../../actions/chat/actions';
import EmptyState from '../../components/common/EmptyState';
import { sendPushNotification, setOnlineStatus } from '../../api';

const getMessages = ({ messages }) => (messages ? [...Object.values(messages)].reverse() : []);

class Chat extends Component {
  state = {
    inputText: '',
    messages: []
  };

  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#3bd1b3'
          }
        }}
      />
    )
  }

  componentDidMount() {
    const { user, navigation = {} } = this.props;
    const {
      params: { id: receptorId }
    } = navigation.state;
    setOnlineStatus({ id: user.uid, status: true });
    this.props.loadMessages({ mainId: user.uid, receptorId });
  }

  componentWillUnmount() {
    const { user } = this.props;
    setOnlineStatus({ id: user.uid, status: false });
  }

  async onSend(messages = []) {
    if (!this.state.inputText) return;

    const { params } = this.props.navigation.state;

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    this.props.sendMessage({ message: this.state.inputText, user: this.props.user, receptorData: params });

    sendPushNotification({
      message: this.state.inputText,
      deviceToken: params.deviceToken,
      deviceType: params.deviceType,
      displayName: this.props.user.displayName,
      avatar: this.props.user.photoURL
    });
  }

  handleInputTextChanged = text => this.setState({ inputText: text });

  render() {
    const messagesList = getMessages({ messages: this.props.messages });
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <EmptyState list={messagesList} />

        <GiftedChat
          text={this.state.inputText}
          onInputTextChanged={text => this.handleInputTextChanged(text)}
          messages={messagesList}
          onSend={messages => this.onSend(messages)}
          renderBubble={this.renderBubble}
          showUserAvatar
          isAnimated
          user={{
            _id: this.props.user.uid
          }}
          parsePatterns={linkStyle => [
            {
              pattern: /#(\w+)/,
              style: { ...linkStyle, color: 'lightgreen' }
            }
          ]}
        />
      </SafeAreaView>
    );
  }
}

Chat.DefaultProps = {
  messages: []
};

Chat.propTypes = {
  user: shape({}).isRequired,
  navigation: shape({}).isRequired,
  loadMessages: func.isRequired,
  sendMessage: func.isRequired,
  messages: shape({})
};

const mapStateToProps = ({ sessionReducer, chatReducer }) => ({
  user: sessionReducer.user,
  messages: chatReducer.messages
});

const mapDispatchToProps = {
  sendMessage,
  loadMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
