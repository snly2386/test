import React from 'react';
import Message from './message.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class MessageList extends React.Component{
  constructor(props){
    super()
    this.state = {
      messages: [
        'hello',
        "its me"
      ]
    }
  }

  render(){
    var messages = this.state.messages.map((message) => {
      return <div><Message message={message}/></div>
    })

    return(
      <Card style={{
        flexGrow: 2,
        marginLeft: 20
      }}>
        <CardText>
          <List>
            {messages}
          </List>
        </CardText>
      </Card>
    )
  }
}

export default MessageList
