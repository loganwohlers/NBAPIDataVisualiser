import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'



class MainMenu extends React.Component {
    render() {

        return (
            <div className='ui container center aligned'>
                {this.props.seasons.map((season, idx) => {
                    let year = season.year
                    return (
                        <>
                            <Link key={idx} to={`/seasonhome/${year}`}>
                                <div className='ui centered inverted card mainCard' key={idx} onClick={() => this.props.setSeason(year)} >
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
