import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSeasons } from '../actions'

class MainMenu extends React.Component {



    componentDidMount() {
        this.props.fetchSeasons()
        // fetch('http://localhost:3000/seasons')
        //     .then(res => res.json())
        //     .then(seasons => {
        //         this.setState({ seasons })
        //     })
    }


    render() {
        return (

            <div>
                <ul>
                    {this.props.seasons.map((season, idx) => {
                        return <li key={idx}><Link to={`/seasonhome/${season.year}`}>
                            {`${season.year - 1}-${season.year} Season`} </Link></li>
                    })}
                </ul>
            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return { seasons: state.seasons }
}

export default connect(mapStateToProps, { fetchSeasons })(MainMenu)
