import React from 'react';
import PlayerSeasonTable from '../components/PlayerSeasonTable';
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'


class PlayerSeasonContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    render() {


        let filteredPlayers = this.props.season.playerSeasons.data.filter(ps => {
            return ps.player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return (
            <div>
                <SearchBar className='ui segment' onSearchChange={this.onSearchChange} />
                <PlayerSeasonTable id='PlayerSeason' className='ui centered segment' playerSeasons={filteredPlayers} />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { season: state.currSeason }
}

export default connect(mapStateToProps)(PlayerSeasonContainer)

