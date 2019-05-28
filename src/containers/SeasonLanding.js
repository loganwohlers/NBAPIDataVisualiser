import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllSeasonDataIfNeeded } from '../actions'

class SeasonLanding extends React.Component {

    componentDidMount() {
        this.props.fetchAllSeasonDataIfNeeded()
    }

    render() {
        const yr = this.props.season.year
        const playerSeasons = this.props.season.playerSeasons
        const seasonGames = this.props.season.seasonGames
        let ready = (!(playerSeasons.data === 0 || seasonGames.data === 0) && !(playerSeasons.isFetching || seasonGames.isFetching))
        return (
            <div>
                <h2>{yr} SEASON LANDING PAGE</h2>

                <hr></hr>

                {ready ?
                    <div>
                        <button className="ui primary basic button" ><Link to={`/seasonavgs/${yr}`}>{yr} Season Stats</Link></button>
                        <button className="ui primary basic button"><Link to={`/games/${yr}`}>{yr} Season Schedule</Link></button>
                    </div> :
                    <h3>Loading All Season Data...</h3>
                }
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        season: state.currSeason,
    }
}


export default connect(mapStateToProps, { fetchAllSeasonDataIfNeeded })(SeasonLanding)
