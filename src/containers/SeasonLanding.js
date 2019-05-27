import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllPlayerSeasons } from '../actions'
import { fetchSeasonGames } from '../actions'

class SeasonLanding extends React.Component {

    componentDidMount() {
        //could be a combined action--"prep season"
        this.props.fetchAllPlayerSeasons()
        this.props.fetchSeasonGames()
    }

    render() {
        const yr = this.props.season
        let ready = (this.props.playerSeasons.length !== 0 && this.props.seasonGames.length !== 0)
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
    return {
        season: state.currSeason,
        playerSeasons: state.playerSeasons,
        seasonGames: state.seasonGames
    }
}


export default connect(mapStateToProps, { fetchAllPlayerSeasons, fetchSeasonGames })(SeasonLanding)
