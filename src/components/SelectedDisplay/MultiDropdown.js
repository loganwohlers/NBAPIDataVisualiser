import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class MultiDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            playerSeasons: this.props.playerSeasons,
            selected: []
        }
    }

    //maybe some sort of find here?
    handleChange = (e, { value }) => {
        let selected
        console.log(value)
        const maxSelect = 3
        if (value.length > maxSelect) {
            selected = value.slice(0, 3)
        } else {
            selected = value
        }
        this.setState({
            selected
        })
    }


    render() {
        console.log(this.state)
        return (
            <>
                <Dropdown
                    onChange={this.handleChange}
                    placeholder='Select a Player'
                    fluid
                    multiple
                    search
                    selection
                    options={
                        this.state.playerSeasons.map((ps, idx) => {
                            return ({
                                key: idx,
                                text: ps.player.name,
                                value: ps.id
                            })
                        })
                    }
                />

            </>
        )
    }
}


export default MultiDropdown

