import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PicList from '../components/PicList'

class Pics extends Component {
    render() {
        return (
            <div className="all-pics">
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