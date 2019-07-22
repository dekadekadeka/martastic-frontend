import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPics } from '../actions/picActions'
import defaultImg from '../images/404.jpg'
import { Link } from 'react-router-dom'

class Pics extends Component {
    componentDidMount(){
        this.props.fetchPics()
    }

    render() {
        const allPics = this.props.pics.map(pic => (
        <article className="pic">
            <div className="img-container">
                <Link to={`/pics/${pic.id}`}>
                <img src={pic.pic_url || defaultImg} 
                alt={{...pic}.station.name} />
                </Link>
            </div>
        </article>
        ))
        return (
            <div className="all-pics">
                <h1>All Pictures</h1>
                <section className="picslist">
                    <div className="picslist-center">
                    {allPics}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pics: state.pics.pics
})

export default connect(mapStateToProps, { fetchPics })(Pics)