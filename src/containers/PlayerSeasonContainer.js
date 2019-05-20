import React from 'react';
import PlayerSeasonTable from './PlayerSeasonTable';

class PlayerSeasonContainer
    extends React.Component {

    constructor() {
        super()
        this.state = {
            player_seasons: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/player_seasons')
            .then(res => res.json())
            .then(seasons => {
                let player_seasons = seasons.filter(ps => {
                    return ps.age
                })

                this.setState({
                    player_seasons
                })
            })
    }
    //render button AND seasontable
    render() {
        return (
            <div>
                <PlayerSeasonTable player_seasons={this.state.player_seasons} />
            </div>
        )
    }

}


export default PlayerSeasonContainer
