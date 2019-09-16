import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: ['home', 'about', 'contact', 'gallery']
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.menus.map((v,i)=>{
                            return (
                                <ListItem klass="item" name={v}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
