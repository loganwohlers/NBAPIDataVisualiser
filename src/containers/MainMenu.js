import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSeasons, setSeason } from '../actions'

import giannis from '../assets/giannis.jpg'
import harden from '../assets/harden.jpg'

class MainMenu extends React.Component {

    componentDidMount() {
        this.props.fetchSeasons()
    }

    render() {
        return (
            <div>
                <img className='homePage' style={{ width: 300, height: 300 }} src={giannis} alt='' />
                <img className='homePage' style={{ width: 300, height: 300 }} src={harden} alt='' />
                <ul>
                    {Object.keys(this.props.seasons).map(season => {
                        let year = parseInt(season)
                        return (
                            <li key={season} onClick={() => this.props.setSeason(year)} >
                                <Link to={`/seasonhome/${year}`}>
                                    {`${year - 1}-${year} Season`} </Link>
                            </li>
                        )

                    })}
                </ul>
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return { seasons: state.allSeasons }
}

export default connect(mapStateToProps, { fetchSeasons, setSeason })(MainMenu)
