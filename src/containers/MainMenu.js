import React from 'react';
// import PlayerSeasonContainer from './PlayerSeasonContainer';
// import GamesContainer from './GamesContainer';
import { Link } from 'react-router-dom'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            currView: ''
        }
    }

    render() {
        return (

            <div>
                <button className="ui primary basic button"><Link to={`/seasonavgs/${2018}`}>2018 Season Stats</Link></button>
                <button className="ui primary basic button"><Link to="/games">2018 Season Schedule</Link></button>
                <div>
                    <h2>HOMEPAGE</h2>
                </div>
            </div >

        )
    }
}

export default MainMenu
