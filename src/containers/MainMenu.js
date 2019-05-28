import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'

class MainMenu extends React.Component {

    render() {
        return (
            <div className='main container'>

                {this.props.seasons.map((season, idx) => {
                    let year = season.year
                    return (
                        <div className='ui card' key={idx} onClick={() => this.props.setSeason(year)} >


                            <Link to={`/seasonhome/${year}`}>
                                <img className='image' style={{ width: 300, height: 300 }} src={season.image} alt='' />
                                {`${year - 1}-${year} Season`} </Link>

                        </div>
                    )
                })}}

            </div >

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { seasons: state.allSeasons }
}

export default connect(mapStateToProps, { setSeason })(MainMenu)
