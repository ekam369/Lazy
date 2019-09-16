import React, { Component } from 'react';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pic from './Pic';
import ProfilePic from './ProfilePic';
import {Switch, Route, Link} from 'react-router-dom';

toast.configure({
    autoClose: 8000,
    draggable: true,
    //etc you get the idea
});
class fetchUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loader: false
        };
    }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }
    toggleLoader = () => {
        this.setState({ loader: !this.state.loader });
    }
    componentDidMount() {
        this.toggleLoader();
        fetch("https://randomuser.me/api/?results=5")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                // console.log(res.results);
                this.setState({
                    users: res.results,
                });
                this.successNotify('Users fetched successfully');
            })
            .catch((err) => {
                console.error(`Error while fetching users ${err}`);
                this.errorNotify(`Error while fetching users ${err}`);
            })
            .finally(() => {
                this.toggleLoader();
            })
    }
    render() {
        return (
            <div>
                <ToastContainer />
                <Loader loader={this.state.loader} />
                <ul>
                    {
                        this.state.users.map((v, i) => {
                            return (
                                <li key={i}>{v.name.title} {v.name.first} {v.name.last}</li>
                            );
                        })
                    }
                </ul>
                <Link to="/users/pic">Pic</Link>
                <br/>
                <Link to="/users/profilepic">Profile Pic</Link>
                <Switch>
                    <Route path="/users/pic" component={Pic}/>
                    <Route path="/users/profilepic" component={ProfilePic}/>
                </Switch>
            </div>
        );
    }
}

export default fetchUsers;