import React from 'react';
import PlayerSeasonTable from '../components/PlayerSeasonTable';
import SearchBar from '../components/SearchBar'
class PlayerSeasonContainer
    extends React.Component {

    constructor() {
        super()
        this.state = {
            playerSeasons: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/player_seasons')
            .then(res => res.json())
            .then(seasons => {
                //filtering blank seasons out
                let playerSeasons = seasons.filter(ps => {
                    return ps.age
                })
                this.setState({
                    playerSeasons
                })
            })
    }

    onSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }


    //search button AND seasontable
    render() {
        console.log(this.props.match)
        let filteredPlayers = this.state.playerSeasons.filter(ps => {
            return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return (
            <div>
                {this.state.playerSeasons.length === 0 ?
                    <div>LOADING...</div> :
                    <div>
                        <SearchBar onSearchChange={this.onSearchChange} />
                        <PlayerSeasonTable playerSeasons={filteredPlayers} />
                    </div>
                }
            </div>
        )
    }

}


export default PlayerSeasonContainer
