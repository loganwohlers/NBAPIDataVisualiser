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
            <div className="ui container center aligned">
                <SearchBar className='ui segment' onSearchChange={this.onSearchChange} />
                <PlayerSeasonTable className='ui centered segment' playerSeasons={filteredPlayers} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { season: state.currSeason }
}

export default connect(mapStateToProps)(PlayerSeasonContainer)


//     < div className = "ui container"
// style = {{
//     height: '100%',
//         width: '100%',
//             margin: '20px',
//                 overflowX: 'scroll',
//                     display: 'flex',
//                         justifyContent: 'center'
// }}>
//      </div >