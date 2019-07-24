import React, { Component } from 'react'
import { connect } from 'react-redux';

class SingleStation extends Component {

    componentDidMount(){
        this.props.single_station(this.props.match.params.slug)
    }

    render() {
        console.log(this.props.selected)
        return (
            <div className="single-station">
                {this.props.selected.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.stations.selected || {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        single_station: (slug) => {
            dispatch({
                type: 'SINGLE_STATION',
                data: {
                    slug: slug
                }
            })
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleStation)