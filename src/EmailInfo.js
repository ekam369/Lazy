import React, { Component } from 'react';

class EmailInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
               contact at :- {
                   this.props.match.params.id
               }
            </div>
        );
    }
}

export default EmailInfo;