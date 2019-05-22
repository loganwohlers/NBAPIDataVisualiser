import React from 'react';
import { Link } from 'react-router-dom'
class SeasonLanding extends React.Component {
    render() {
        return (
            <div>

                LANDING ON SEASON: {this.props.match.params.year}

                <button className="ui primary basic button"><Link to={`/seasonavgs/${this.props.match.params.year}`}>2018 Season Stats</Link></button>
                <button className="ui primary basic button"><Link to="/games">2018 Season Schedule</Link></button>


            </div >
        )
    }

}


export default SeasonLanding
