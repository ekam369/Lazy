import React, { Component, Suspense, lazy } from 'react';
// import Footer from './Footer';
// import Slider from './Slider';
import EmergencyContact from './EmergencyContact';
import EmailInfo from './EmailInfo';
import { Switch, Route } from 'react-router-dom';
const Footer = lazy(() => import('./Footer'));

const EMAIL = "info@gmail.com";

class Help extends Component {
    constructor(props) {
        super(props);
        this.state={
            slider: null
        };
        console.log(this.props);
    }
    openPage = (pageName) => {
        this.props.history.push(`${this.props.match.url}/${pageName}`);
    }
    loadSlider = () =>{
        import("./Slider").then((cmp)=>{
            this.setState({
                slider: <cmp.default/>
            });
        })
    }
    render() {
        return (
            <div>
                <div>Here goes header content</div>
                <br />
                <button
                    onClick={() => this.openPage('email/info@gmail.com')}
                >Email Info</button>
                <br />
                <button
                    onClick={() => this.openPage('emergency')}
                >Emergency</button>
                <br />
                <Switch>
                    <Route path={`${this.props.match.url}/emergency`} component={EmergencyContact} email={EMAIL} id="myId" num="9915296866" />
                    <Route path={`${this.props.match.url}/email/:id`} component={EmailInfo} />
                </Switch>
                <br />
                <Suspense fallback={<div>Loading Footer Page ....</div>}>
                    <button
                        onClick={()=>this.loadSlider()}
                    >Load Slider</button>
                    <button
                        onClick={()=> this.props.history.push('ok/Nugen')}
                    >Open Okay</button>
                    <Footer />
                </Suspense>
                {
                    this.state.slider
                }
            </div>
        );
    }
}

export default Help;