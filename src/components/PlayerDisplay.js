import React from 'react';
import PersonalBoxTable from './PersonalBoxTable';
import PlayerDisplayTable from './SelectedDisplay/PlayerDisplayTable'

import { connect } from 'react-redux'
import { fetchOnePlayerSeason } from '../actions'

class PlayerDisplay extends React.Component {

    componentDidMount() {
        this.props.fetchOnePlayerSeason()
    }

    render() {
        return (
            <div>
                <PlayerDisplayTable playerSeason={this.props.currPlayerSeason} />
                <br>
                </br>
                {
                    this.props.currPlayerSeason.games ?
                        <div>
                            <h3>Last 10 Games</h3>
                            <PersonalBoxTable lines={this.props.currPlayerSeason.games} />
                        </div> :
                        <div>Loading</div>
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return { currPlayerSeason: state.currPlayerSeason }
}


export default connect(mapStateToProps, { fetchOnePlayerSeason })(PlayerDisplay)