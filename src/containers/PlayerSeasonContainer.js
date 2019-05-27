import React from 'react';
import PlayerSeasonTable from '../components/PlayerSeasonTable';
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import { fetchAllPlayerSeasons } from '../actions'

class PlayerSeasonContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.props.fetchAllPlayerSeasons()
    }

    onSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

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


