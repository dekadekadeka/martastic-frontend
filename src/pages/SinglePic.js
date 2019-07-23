import React, { Component } from 'react'
import { connect } from 'react-redux';

class SinglePic extends Component {

    componentDidMount(){
        this.props.single_pic(this.props.match.params.id)
    }

    render() {
        if(this.props.selected === undefined) return null
        console.log(this.props.selected)
        return (
            <div className="single-pic">
                Single Pic
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.pics.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        single_pic: (id) => {
            dispatch({
                type: 'SINGLE_PIC',
                data: {
                    id: parseInt(id)
                }
            })
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SinglePic)