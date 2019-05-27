import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSeasons, setSeason } from '../actions'

class MainMenu extends React.Component {

    componentDidMount() {
        this.props.fetchSeasons()
    }

    render() {
        return (

            <div>
                <ul>
                    {this.props.seasons.map((season, idx) => {
                        return (
                            <li key={idx} onClick={() => this.props.setSeason(season.year)} >
                                <Link to={`/seasonhome/${season.year}`}>
                                    {`${season.year - 1}-${season.year} Season`} </Link>
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
