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
                <button className="ui primary basic button"><Link to={`/seasonhome/${2018}`}>2018 Season Stats</Link></button>
                <button className="ui primary basic button"><Link to="/games">2018 Season Schedule</Link></button>
            </div >

        )
    }
}

export default MainMenu
