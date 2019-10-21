import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCourses} from '../store/action'
import "../css/button.css"

export class Button extends Component {

    //fetchCourses triggers dispatching of text (in action.js), that triggers the FETCH-cases i searchReducer
    onClick = e => {
        e.preventDefault()
        this.props.fetchCourses(this.props.input)
    }
    render() {
        return (
            <button className="btn btn-success btn-bg mt-3"
                type = "button"
                onClick={this.onClick}
            >
            Search
            </button>
        )
    }
}

//Maps state 'text' to as a props named 'input'
const mapStateToProps = (state) => ({
    input: state.courses.text 
})


export default connect(mapStateToProps, {fetchCourses})(Button)
