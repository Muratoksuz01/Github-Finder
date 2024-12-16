import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserConsumer from "../context";
import axios from 'axios';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '' };
    }

    handleInputChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSearchSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { searchQuery } = this.state;

        if (searchQuery.trim() === '') {
            alert('Lütfen bir arama terimi girin.');
            return;
        }

        try {
            console.log("Navbar API çağrısı başladı...");
            const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
            console.log("API'den gelen veri: ", response.data.items);

            // API sonucunu dispatch ile reducer'a gönder
            dispatch({ type: "SEARCH_USER", payload: response.data.items });
        } catch (error) {
            console.error("API çağrısı sırasında hata oluştu: ", error);
        }
    };

    render() {
        return (
            <UserConsumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div>
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                                <div className="container-fluid">
                                    <a className="navbar-brand d-flex align-items-center" href="/">
                                        <img
                                            src="/images/github.png"
                                            width={40}
                                            height={40}
                                            className="me-2 rounded-circle"
                                            alt="GitHub Logo"
                                        />
                                        <span>GitHub Finder</span>
                                    </a>

                                    <div className="d-flex ms-auto">
                                        <form onSubmit={this.handleSearchSubmit.bind(this, dispatch)} className="d-flex" role="search">
                                            <input
                                                type="search"
                                                className="form-control me-2"
                                                placeholder="Search"
                                                aria-label="Search"
                                                name="search"
                                                onChange={this.handleInputChange}
                                                value={this.state.searchQuery}
                                            />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </UserConsumer>
        );
    }
}

export default Navbar;
