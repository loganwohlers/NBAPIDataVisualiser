import React from 'react';
import PlayerSeasonContainer from './PlayerSeasonContainer';
import GamesContainer from './GamesContainer';

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            currView: ''
        }
    }

    selectedView = () => {
        if (this.state.currView === 'STATS') {
            return <PlayerSeasonContainer />
        } else {
            return <GamesContainer />
        }
    }

    handleChoice = (e) => {
        this.setState({
            currView: e.target.innerText
        })
    }

    render() {

        return (

            <div>
                MAIN MENU?
                {/* {this.state.currView === '' ?
                    <div>
                        <button className="ui primary button"
                            onClick={this.handleChoice}>
                        </button>

                        <button className="ui primary button">
                            SEASON

                        </button>


                    </div>

                    :
                    this.selectedView()
                } */}

            </div>
        )
    }

}

export default MainMenu