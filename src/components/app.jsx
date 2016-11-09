import React from 'react';
import MessageList from './message_list.jsx';
import ChannelList from './channel_list.jsx';
import MessageBox from './message_box.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar title="Awesome Chat App" />
            <div style={{
              display: 'flex',
              flexFlow: 'row wrap',
              maxWidth: 1200,
              width: '100%',
              margin: '30 px auto 30px'
            }}>
              <ChannelList />
              <MessageList />
            </div>
          </div>
        </MuiThemeProvider>
    )
  }
}

export default App
