import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
    super(props);

    var config = {
      apiKey: "AIzaSyDWSIlY4BzgguVpbmpkRps61YIFrSmqYYQ",
      authDomain: "react-testing-6a790.firebaseapp.com",
      databaseURL: "https://react-testing-6a790.firebaseio.com",
      projectId: "react-testing-6a790",
      storageBucket: "",
      messagingSenderId: "337416915475"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="container">
      <Header title="Message Firebase" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
