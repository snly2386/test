import React from 'react';
import Channel from './channel.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

class ChannelList extends React.Component{
  constructor(props){
    super()
    this.state = {
      channels: [
        'dogs',
        "cats"
      ]
    }
  }

  render(){
    var channels = this.state.channels.map((channel) => {
      return <div><Channel channel={channel}/></div>
    })

    return(
      <Card style={{
        flexGrow: 1
      }}>
        <CardText>
          <List>
            {channels}
          </List>
        </CardText>
      </Card>
    )
  }
}

export default ChannelList
