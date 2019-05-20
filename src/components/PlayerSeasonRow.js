import React from 'react';

class PlayerSeasonRow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <td>Player</td>
                <td>Pos</td>
                <td>Age</td>
                <td>Team</td>
                <td>G</td>
                <td>GS</td>
                <td>MP</td>
                <td>FG</td>
                <td>FGA</td>
                <td>FG%</td>
                <td>3P</td>
                <td>3PA</td>
                <td>3P%</td>
                <td>2P</td>
                <td>2PA</td>
                <td>2P%</td>
                <td>eFG%</td>
                <td>FT</td>
                <td>FTA</td>
                <td>ORB</td>
                <td>DRB</td>
                <td>TRB</td>
                <td>AST</td>
                <td>STL</td>
                <td>BLK</td>
                <td>TOV</td>
                <td>PF</td>
                <td>PTS</td>
            </tr>
        )
    }

}


export default PlayerSeasonRow