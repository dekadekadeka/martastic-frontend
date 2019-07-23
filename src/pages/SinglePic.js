import React, { Component } from 'react'

export default class SinglePic extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="single-pic">
                Single Pic
            </div>
        )
    }
}
