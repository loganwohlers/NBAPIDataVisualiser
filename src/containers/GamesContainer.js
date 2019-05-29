import React from 'react';
import GameTable from '../components/GameTable';

class GamesContainer extends React.Component {

    render() {
        return (
            <div className='ui container center aligned'>
                <h2 className="ui centered ">SEASON SCHEDULE</h2>
                <GameTable />
            </div>
        )
    }
}


export default GamesContainer
