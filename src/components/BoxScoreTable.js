import React from 'react';
import BoxRow from './BoxRow'

class BoxScoreTable extends React.Component {
    render() {
        return (
            <table id="Games" className="">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>MP</th>
                        <th>MP</th>
                        <th>FG</th>
                        <th>FGA</th>
                        <th>FG%</th>
                        <th>3P</th>
                        <th>3PA</th>
                        <th>3P%</th>
                        <th>FT</th>
                        <th>FTA</th>
                        <th>FT%</th>
                        <th>ORB</th>
                        <th>DRB</th>
                        <th>TRB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>BLK</th>
                        <th>TOV</th>
                        <th>PF</th>
                        <th>PTS</th>
                        <th>+/-</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.lines.map((li, idx) => {
                        return <BoxRow line={li} key={idx} />
                    })}

                </tbody>
            </table>
        )


    }
}

export default BoxScoreTable