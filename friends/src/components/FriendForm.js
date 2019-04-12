import React from 'react';
import PropTypes from 'prop-types';

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

    componentDidMount() {
        if (this.props.friends) {
            this.setState({
                name: this.props.friends.name,
                age: this.props.friends.age,
                email: this.props.friends.email
            });
        }
    }

    handleChange = e => {
        this.setState({[this.state.value]: e.target.value})
    }
    
    handleSubmit = e => {
        e.preventDefault();
    }

    handleSubmit = e => {
        e.preventDefault();
        
        if (!this.props.friends) {
            this.props.addFriend({
                ...this.state
            })
        }

        else {
            this.props.updateFriend({
                ...this.state,
                id: this.props.friends.id
            });
        }

        this.setState({
            name: '',
            age: '',
            email: ''
        });

        this.props.history.push("/friend-list")
    };

    render() {
        return(
            <div className="new-friend-wrapper">
                <h2>Be My New Friend</h2>
                <form onSubmit={this.handleSubmit}>
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

FriendForm.propTypes = {
    addFriend: PropTypes.func,
}