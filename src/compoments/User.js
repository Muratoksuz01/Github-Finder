import React, { Component } from 'react'

export class User extends Component {
    render() {
        const { login, avatar_url, html_url ,bio } = this.props
        return (
            <div className="card mb-2" style={{ width: "18rem" }}>
                <img src={avatar_url} className="card-img-top" alt={login} />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <p className="card-text">{bio}</p>
                    <a href={html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            </div>
        )
    }
}

export default User
