import React from 'react';
import { Link } from 'react-router-dom'
class SeasonLanding extends React.Component {
    render() {
        const yr = this.props.match.params.year
        return (
            <div>

                <h2>{yr} SEASON LANDING PAGE</h2>

                <hr></hr>

                <button className="ui primary basic button"><Link to={`/seasonavgs/${yr}`}>{yr} Season Stats</Link></button>
                <button className="ui primary basic button"><Link to={`/games/${yr}`}>{yr} Season Schedule</Link></button>


            </div >
        )
    }

}


export default SeasonLanding
