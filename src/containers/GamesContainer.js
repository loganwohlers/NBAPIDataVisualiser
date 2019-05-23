import React from 'react';
import GameTable from '../components/GameTable';


class GamesContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            seasonGames: []
        }
    }

    componentDidMount() {
        //passes yr + games in string query to get back all games in season for this yr
        fetch(`http://localhost:3000/seasons/${this.props.match.params.year}?games=true`)
            .then(res => res.json())
            .then(seasonGames => {
                this.setState({
                    seasonGames
                })
            })
    }


    //search button AND seasontable
    render() {
        // let filteredPlayers = this.state.playerSeasons.filter(ps => {
        //     return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        // })
        return (
            <div>
                {this.state.seasonGames.length === 0 ?
                    <div>LOADING... </div>
                    :
                    <GameTable seasonGames={this.state.seasonGames} />
                }
            </div>
        )
    }

}


export default GamesContainer
