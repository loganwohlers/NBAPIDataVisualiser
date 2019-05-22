import React from 'react';

class PersonalRow extends React.Component {

    render() {
        let { mp, fg, fga, fg_pct, fg3, fg3a, fg3_pct, ft, fta, ft_pct, orb, drb, trb, ast, stl, blk, tov, pts, plus_minus, pf, dnp } = this.props.line

        let date = this.props.line.game.date

        return (
            dnp ?
                <tr>
                    <td>{date}</td>
                    <td>DNP</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>

                </tr>
                :
                < tr >
                    <td>{date}</td>
                    <td>{mp}</td>
                    <td>{fg}</td>
                    <td>{fga}</td>
                    <td>{fg_pct || '.000'}</td>
                    <td>{fg3}</td>
                    <td>{fg3a}</td>
                    <td>{fg3_pct || '.000'}</td>
                    <td>{ft}</td>
                    <td>{fta}</td>
                    <td>{ft_pct || '.000'}</td>
                    <td>{orb}</td>
                    <td>{drb}</td>
                    <td>{trb}</td>
                    <td>{ast}</td>
                    <td>{stl}</td>
                    <td>{blk}</td>
                    <td>{tov}</td>
                    <td>{pf}</td>
                    <td>{pts}</td>
                    <td>{plus_minus}</td >
                </tr >
        )
    }

}


export default PersonalRow
