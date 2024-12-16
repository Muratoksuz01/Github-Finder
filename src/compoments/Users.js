import React, { Component } from 'react'
import User from './User'
import UserConsumer from "../context"

export class Users extends Component {



    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { users,loading } = value
                        if (loading) {
                            return (
                                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                                    {/* Bootstrap Spinner */}
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div className="container mt-4">
                                <div className="row">
                                    {

                                        users.length > 0 ? users.map(user => (
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" key={user.id}>
                                                <User login={user.login} bio={user.bio}  avatar_url={user.avatar_url} html_url={user.html_url} />
                                            </div>
                                        )
                                        ) : <div>
                                            <h2 className='text-center text-danger'>maalesef icerik yok </h2>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default Users
