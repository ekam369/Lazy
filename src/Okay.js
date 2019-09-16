import React, { Component } from 'react';

class Okay extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>Welcome to  
                {
                    this.props.match.params.name
                }      
                !!!
            </div>
        );
    }
}

export default Okay;