import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllSeasonDataIfNeeded } from '../actions'
import Loader from 'react-loader-spinner'

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
                {ready ?
                    <div>
                        <div className='ui container center aligned landing'>
                            <div className='ui centered '>
                                <button className="ui primary basic button"><Link to={`/seasonavgs/${yr}`}> Player Averages</Link></button>
                            </div>
                            <br></br>
                            <div className='ui centered '>
                                <button className="ui primary basic button"><Link to={`/games/${yr}`}>Schedule / Boxscores</Link></button>
                            </div>
                            <br></br>
                            <div className='ui centered '>
                                <button className="ui primary basic button"><Link to={`/comparison/${yr}`}>Player Comparison</Link></button>
                            </div>


                        </div>


                    </div> :
                    <div className="ui container center aligned">
                        <div className="ui item centered">
                            <h2>Loading Season Data...</h2>
                            <Loader type="Rings" color='#266ee2' height={400} width={400} />
                        </div>

                    </div>
                }
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        season: state.currSeason,
    }
}


export default connect(mapStateToProps, { fetchAllSeasonDataIfNeeded })(SeasonLanding)


