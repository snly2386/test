import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {List, ListItem} from 'material-ui/List';


class Channel extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ListItem primaryText={this.props.channel}/>
    )
  }
}

export default Channel;
