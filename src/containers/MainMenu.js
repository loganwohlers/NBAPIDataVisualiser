import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'
import PlayerRadar from '../components/SelectedDisplay/PlayerRadar'

import PracticeVictory from '../components/SelectedDisplay/PracticeVictory'

// const comparison = [lamarcus, abrines]

class MainMenu extends React.Component {
    render() {
        return (
            <div className='ui container center aligned'>
                {/* <PracticeVictory lines={lamarcus.reverse()} />
                <PracticeVictory lines={abrines.reverse()} /> */}
                <PlayerRadar test={5} />

                {this.props.seasons.map((season, idx) => {
                    let year = season.year
                    return (
                        <Link key={idx} to={`/seasonhome/${year}`}>
                            <div className='ui centered card' key={idx} onClick={() => this.props.setSeason(year)} >
                                <div className="image">
                                    <img src={season.image} alt='' />
                                    {`${year - 1}-${year} Season`}
                                </div>
                            </div>
                        </Link>
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
