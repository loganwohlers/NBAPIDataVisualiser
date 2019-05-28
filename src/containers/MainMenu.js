import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'

import giannis from '../assets/giannis.jpg'
import harden from '../assets/harden.jpg'

class MainMenu extends React.Component {

    render() {
        return (
            <div>
                <img className='homePage' style={{ width: 300, height: 300 }} src={giannis} alt='' />
                <img className='homePage' style={{ width: 300, height: 300 }} src={harden} alt='' />
                <ul>
                    {this.props.seasons.map((season, idx) => {
                        let year = season.year
                        return (
                            <li key={idx} onClick={() => this.props.setSeason(year)} >
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

export default connect(mapStateToProps, { setSeason })(MainMenu)
