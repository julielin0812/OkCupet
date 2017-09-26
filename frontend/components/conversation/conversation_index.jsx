import React from 'react';
import ConversationIndexContainer from './conversation_index_container';

import ConversationIndexItem from './conversation_index_item';
import NavContainer from '../nav/nav_container';

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers().then(this.props.fetchAllConversations());
  }


  render() {

    const conversations = this.props.conversations;
    const users = this.props.users;

    // Messages List Header?
    // <li className='convo-li'>
    //   <div>Sender Profile Image:</div>
    //   <div>Sender:</div>
    //   <div>Subject:</div>
    // </li>

    if (conversations && users) {
      return (
        <div>
          <NavContainer />
          <h1>Messages</h1>
            <ul className="convo-list">
              {conversations.map((conversation, idx) => (
                <ConversationIndexItem
                  key={idx}
                  conversation={conversation}
                  users={users} />
              ))}
            </ul>

        </div>
      );
    }
    else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default ConversationIndex;
