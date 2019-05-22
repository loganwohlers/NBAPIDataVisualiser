import React from 'react';
import PlayerSeasonTable from '../components/PlayerSeasonTable';
import SearchBar from '../components/SearchBar'

class PlayerSeasonContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            playerSeasons: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        //we query for season#show- which returns all of it's player_seasons
        fetch(`http://localhost:3000/seasons/${this.props.match.params.year}?stats=true`)
            .then(res => res.json())
            .then(seasons => {
                let playerSeasons = seasons.filter(ps => {
                    //filtering blank seasons out(players who didn't finish on a roster)
                    return ps.age
                })

                console.log(playerSeasons)

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
        let filteredPlayers = this.state.playerSeasons.filter(ps => {
            return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return (
            <div>
                {
                    this.state.playerSeasons.length === 0 ?
                        <div>LOADING...</div> :
                        <div>
                            <SearchBar onSearchChange={this.onSearchChange} />
                            <PlayerSeasonTable playerSeasons={filteredPlayers} />
                        </div>
                }
            </div >
        )
    }

}


export default PlayerSeasonContainer
