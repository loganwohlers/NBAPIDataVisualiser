import React from 'react';
import PlayerSeasonTable from '../components/PlayerSeasonTable';
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import { fetchAllPlayerSeasons } from '../actions'

class PlayerSeasonContainer extends React.Component {

    // onClick = { this.props.fetchAllPlayerSeasons }

    constructor() {
        super()
        this.state = {
            playerSeasons: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllPlayerSeasons()
        // //season yr + stats gets us all player_lines for a given season
        // fetch(`http://localhost:3000/seasons/${this.props.match.params.year}?stats=true`)
        //     .then(res => res.json())
        //     .then(seasons => {
        //         let playerSeasons = seasons.filter(ps => {
        //             //filtering blank seasons out(players who didn't finish on a roster)
        //             return ps.age
        //         })


        //         this.setState({
        //             playerSeasons
        //         })
        //     })
    }

    onSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }


    //search button AND seasontable
    render() {
        let filteredPlayers = this.props.playerSeasons.filter(ps => {
            return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return (
            <div>
                {
                    this.props.playerSeasons.length === 0 ?
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

const mapStateToProps = (state) => {
    return { playerSeasons: state.playerSeasons }
}


export default connect(mapStateToProps, { fetchAllPlayerSeasons })(PlayerSeasonContainer)


