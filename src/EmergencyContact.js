import React, { Component } from 'react';

class EmergencyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num
        };
        // console.log("Emergency contact's constructor fired")
    }
    componentWillMount() {
        // console.log("Emergency contact's component will mount fired");
    }
    changeNumber = () => {
        // this.props.num = "3456789"; wrong method
        // this.state.num = "456789"; wrong method
        this.setState({
            num: "1234567890"
        });
    }
    render() {
        //   console.log(this.props);
        console.log("Emergency contact's render fired");
        return (
            <div> In case of any emergency contact us at :-  <b>{this.state.num}</b>
                <button
                    onClick={() => this.changeNumber()}
                >Change Number</button>
            </div>
        );
    }
    componentDidMount() {
        // console.log("Emergency contact's component did mount fired");
    }
}

export default EmergencyContact;
