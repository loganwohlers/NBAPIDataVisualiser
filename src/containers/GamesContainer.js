import React from 'react';
import GameTable from '../components/GameTable';
import { connect } from 'react-redux'
import { fetchSeasonGames } from '../actions'


class GamesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchSeasonGames()
    }

    render() {
        return (
            <div>
                {this.props.seasonGames.length === 0 ?
                    <div>LOADING... </div>
                    :
                    <GameTable seasonGames={this.props.seasonGames} />
                }
            </div>
        )
    }

}
const mapStatetoProps = (state) => {
    return { seasonGames: state.seasonGames }
}


export default connect(mapStatetoProps, { fetchSeasonGames })(GamesContainer)
