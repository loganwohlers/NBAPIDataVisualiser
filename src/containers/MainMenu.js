import React from 'react';
// import PlayerSeasonContainer from './PlayerSeasonContainer';
// import GamesContainer from './GamesContainer';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            currView: ''
        }
    }

    // selectedView = () => {
    //     if (this.state.currView === 'STATS') {
    //         return <PlayerSeasonContainer />
    //     } else {
    //         return <GamesContainer />
    //     }
    // }

    // handleChoice = (e) => {
    //     this.setState({
    //         currView: e.target.innerText
    //     })
    // }

    render() {

        return (

            <div>
                <button className="ui primary basic button"><Link to="/seasonavgs">Season Stats</Link></button>
                <button className="ui primary basic button"><Link to="/games">Season Schedule</Link></button>
            </div>

        )
    }
}

export default MainMenu

// {this.state.currView === '' ?
//                     <div>
//                         <button className="ui primary button"
//                             onClick={this.handleChoice}>
//                         </button>

//                         <button className="ui primary button">
//                             SEASON

//                         </button>


//                     </div>

//                     :
//                     this.selectedView()
//                 } 
