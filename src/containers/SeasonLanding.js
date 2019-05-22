import React from 'react';
import { Link } from 'react-router-dom'
class SeasonLanding extends React.Component {
    render() {
        const yr = this.props.match.params.year
        return (
            <div>

                LANDING ON SEASON: {yr}

                <hr></hr>

                <button className="ui primary basic button"><Link to={`/seasonavgs/${yr}`}>2018 Season Stats</Link></button>
                <button className="ui primary basic button"><Link to={`/games/${yr}`}>2018 Season Schedule</Link></button>


            </div >
        )
    }

}


export default SeasonLanding
