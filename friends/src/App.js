import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, NavLink } from 'react-router-dom';
import Friend from './components/FriendsList/Friend';
import Home from './components/Home/Home'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      currentFriend: null
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

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => { console.log(res);
      })
      .catch(err => {console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then( res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
      })
      .catch( err => console.log(err));
  }

  updateFriend = item => {
    axios
      .put(`http://localhost:5000/friends/${this.friend.id}`, item )
      .then(res => {
        this.setState({ friends: res.data, currentFriend: null })
      })
  }

  setupUpdate = item => {
    this.setState({ friends: item });
    this.props.history.push('/friend-list');
  }

  render() {
    return (
      <div className="App">
      <nav>
        <h1>Welcome Friends</h1>
        <div className='nav-links'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/friend-list">My friends</NavLink>
          <NavLink to="/new-friend">Add a friend</NavLink>
        </div>
      </nav>
        <Route
          exact path="/"
          component={Home}
        />
        <Route
          exact path="/friend-list"
          render={ props => <FriendsList {...props} 
          friends={this.state.friends} />}
        />
        <Route
          path="/friend-list/:id"
          render={props => <Friend {...props}
          setupUpdate={this.setupUpdate}
          deleteFriend={this.deleteFriend} />}
        />
        <Route
          exact path="/new-friend"
          render={ props => <FriendForm {...props} 
          friends={this.state.friends} />}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
        />
        
      </div>
    );
  }
}

export default App;
