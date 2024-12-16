import axios from 'axios';
import React, { Component } from 'react';

// Context ve reducer tanımı
const UserContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USER":
            return {
                ...state,
                users: action.payload // API'den gelen kullanıcıları state'e ata
            };
        default:
            return state;
    }
};

export class UserProvider extends Component {
    state = {
        users: [],
        loading: true,
        dispatch: (action) => {
            this.setState(state => reducer(state, action)); // Senkron `reducer` çağrısı
        }
    };

    componentDidMount = async () => {
        const response = await axios.get("https://api.github.com/users");
        this.setState({
            users: response.data,
            loading: false
        });
    };

    render() {
        return (
            <UserContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
