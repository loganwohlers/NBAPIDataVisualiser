import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'
import PlayerRadar from '../components/SelectedDisplay/PlayerRadar'

import PracticeVictory from '../components/SelectedDisplay/PracticeVictory'

let season2019 = [
    {
        PTS: 10.2,
        REB: 4.1,
        AST: 2.0,
        STL: 0.7,
        BLK: 0.4
    },
    {
        PTS: 20.2,
        REB: 4.1,
        AST: 8.0,
        STL: 3.7,
        BLK: 1.4
    }]


// const comparison = [lamarcus, abrines]

class MainMenu extends React.Component {
    render() {
        return (
            <div className='ui container center aligned'>
                {/* <PracticeVictory lines={lamarcus.reverse()} />
                <PracticeVictory lines={abrines.reverse()} /> */}
                <PlayerRadar stats={season2019} />

                {this.props.seasons.map((season, idx) => {
                    let year = season.year
                    return (
                        <>
                            <Link key={idx} to={`/seasonhome/${year}`}>
                                <div className='ui centered card' key={idx} onClick={() => this.props.setSeason(year)} >
                                    <div className="image">
                                        <img src={season.image} alt='' />
                                        {`${year - 1}-${year} Season`}
                                    </div>
                                </div>
                            </Link>
                            <br></br>
                            <br></br>
                        </>
                    )
                })}

            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return { seasons: state.allSeasons }
}

export default connect(mapStateToProps, { setSeason })(MainMenu)
