import React from 'react';
import GameTable from '../components/GameTable';
import { connect } from 'react-redux'

class GamesContainer extends React.Component {

    render() {
        return (
            <div>
                <GameTable seasonGames={this.props.seasonGames.data} />
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return { seasonGames: state.seasonGames }
}

export default connect(mapStatetoProps)(GamesContainer)
