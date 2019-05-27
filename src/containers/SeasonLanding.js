import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SeasonLanding extends React.Component {
    render() {
        const yr = this.props.season
        return (
            <div>
                <h2>{yr} SEASON LANDING PAGE</h2>

                <hr></hr>

                <button className="ui primary basic button" ><Link to={`/seasonavgs/${yr}`}>{yr} Season Stats</Link></button>
                <button className="ui primary basic button"><Link to={`/games/${yr}`}>{yr} Season Schedule</Link></button>
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return { season: state.currSeason }
}


export default connect(mapStateToProps)(SeasonLanding)
