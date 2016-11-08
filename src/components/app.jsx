import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: [
        "FUCK THIS WEBPACK SHIT how are you",
        "SO FUCKING ......"
      ]
    }
  }

  render(){
    var messages = this.state.messages.map((message) => {
      return <div>{message}</div>
    })

    return(
      <div>{messages}</div>
    )
  }
}

export default App
