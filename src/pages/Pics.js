import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { fetchPics } from '../actions/picActions'
import PropTypes from 'prop-types';
import PicList from '../components/PicList'

class Pics extends Component {
    render() {
        console.log(this.props.pics)
        return (
            <div className="all-pics">
                <h1>All Pictures</h1>
                <section className="picslist">
                    <div className="picslist-center">
                    <PicList pics={this.props.pics} />
                    </div>
                </section>
            </div>
        )
    }
}

Pics.propTypes = {
    pics: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    pics: state.pics.pics
})

export default connect(mapStateToProps)(Pics)