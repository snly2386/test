import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';


class MessageBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Card>
        <textarea />
      </Card>
    )
  }
}

export default MessageBox;
