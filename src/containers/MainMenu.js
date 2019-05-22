import React from 'react';
import { Link } from 'react-router-dom'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            seasons: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/seasons')
            .then(res => res.json())
            .then(seasons => {
                this.setState({ seasons })
            })
    }

    render() {
        return (

            <div>
                <ul>
                    {this.state.seasons.map((season, idx) => {
                        return <li key={idx}><Link to={`/seasonhome/${season.year}`}>2018 Season </Link></li>
                    })}
                </ul>
            </div >

        )
    }
}

export default MainMenu
