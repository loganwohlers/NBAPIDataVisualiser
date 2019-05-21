import React from 'react';
import BoxScoreTable from '../components/BoxScoreTable';

class GameBoxScore extends React.Component {

    constructor() {
        super()
        this.state = {
            boxscore: []
        }
    }

    //fetch w/ game in aboutProps
    componentDidMount() {
        fetch('http://localhost:3000/games/' + this.props.location.aboutProps.game.id)
            .then(res => res.json())
            .then(boxscore => {
                //order boxscore here

                this.setState({
                    boxscore
                })
            })

    }

    filterBoxScore() {
    }

    render() {
        return (
            <div>
                {this.state.boxscore.length === 0 ?
                    <div>LOADING... </div>
                    :
                    <BoxScoreTable lines={this.state.boxscore} />
                }
            </div>
        )
    }

}

export default GameBoxScore

