import React from 'react';

export default class FriendForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }  
        }
    }

    handleChange = e => {
        this.setState({[this.state.value]: e.target.value})
    }

    render() {
        return(
            <div className="new-friend-wrapper">
                <h2>Be My New Friend</h2>
                <form onSubmit={this.props.addFriend}>
                    <input 
                        name='name'
                        type='text'
                        value={this.state.name}
                        placeholder='first name'
                        onChange={this.handleChange}
                    />
                    <input 
                        name='age'
                        type='number'
                        value={this.state.age}
                        placeholder='age'
                        onChange={this.handleChange}
                    />
                    <input 
                        name='email'
                        type='email'
                        value={this.state.email}
                        placeholder='email'
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Add New Friend</button>
                </form>
            </div>
        );
    }
    
}