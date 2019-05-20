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
        fetch('http://localhost:3000/games')
            .then(res => res.json())
            .then(seasonGames => {
                this.setState({
                    seasonGames
                })
            })
    }

    //could let them search by date?
    // onSearchChange = (e) => {
    //     this.setState({ searchTerm: e.target.value })
    // }


    //search button AND seasontable
    render() {
        // let filteredPlayers = this.state.playerSeasons.filter(ps => {
        //     return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        // })
        return (
            <div>
                <SearchBar />
                <GameTable playerSeasons={filteredPlayers} />
            </div>
        )
    }

}


export default GamesContainer
