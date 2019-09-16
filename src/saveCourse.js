import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

class saveCourse extends Component {
    constructor() {
        super();
        this.state = {
            course_name: '',
            course_content: '',
            Loader: false
        };
    }
    successNotify = (msg) => {
        toast.success(msg);
    }
    errorNotify = (msg) => {
        toast.error(msg);
    }
    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }
    handleCourseName = (e) => {
        this.setState({
            course_name: e.target.value
        });
    }
    handleCourseContent = (e) => {
        this.setState({
            course_content: e.target.value
        });
    }
    saveCourse = () => {
        this.toggleLoader();
        let course = {
            coursename: this.state.course_name,
            course_content: this.state.course_content
        };
        fetch("http://staging.nugen.co.in/api/v1/courses", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if (res.msg === 1) {
                    this.successNotify(res.content[0]);
                } else if (res.msg === -1) {
                    this.errorNotify("Please provide all the input fields properly");
                }
            })
            .catch((err) => {
                console.error(`Error while saving course ${err}`);
            })
            .finally(_ => {
                this.toggleLoader();
            })
    }
    render() {
        return (
            <div>
                <ToastContainer />
                <Loader loader={this.state.loader} />
                <input type="text" placeholder="Enter Course Name" onChange={(e) => this.handleCourseName(e)} />
                <input type="text" placeholder="Course Content" onChange={(e) => this.handleCourseContent(e)} />
                <button
                    onClick={() => this.saveCourse()}
                >Save Course</button>
            </div>
        );
    }
}

export default saveCourse;