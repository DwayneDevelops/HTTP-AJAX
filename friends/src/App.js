import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then( res => {
      console.log(res);
      this.setState({ friends: res.data })
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  addFriend = () => {
    axios
      .post('http://localhost:5000/friends', { newFriend: {name: '', age: '', email: ''}})
      .then(res => { console.log(res);
      })
      .catch(err => {console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
      <nav>
        <h1>Welcome Friends</h1>
        <div className='nav-links'>
          <Link exact to="/">Home</Link>
          <Link exact to="/friend-list">My friends</Link>
          <Link to="/new-friend">Add a friend</Link>
        </div>
      </nav>
        <Route
          path="/friend-list/"
          render={ props => <FriendsList {...props} 
          friends={this.state.friends} />}
        />
        <Route
          path="/new-friend"
          render={ props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
