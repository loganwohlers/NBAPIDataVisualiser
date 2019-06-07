import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const test = [
    {
        key: 1,
        text: 'aaa',
        value: 'aaa'
    },
    {
        key: 2,
        text: 'bbb',
        value: 'bbb'
    },
    {
        key: 2,
        text: 'ccc',
        value: 'ccc'
    }
]



const DropdownExampleMultipleSearchSelection = ({ playerSeasons }) => {
    console.log(playerSeasons)

    return (
        <Dropdown
            placeholder='Select a Player'
            fluid
            multiple
            search
            selection
            options={playerSeasons.map((ps, idx) => {
                return ({
                    key: idx,
                    text: ps.player.name,
                    value: ps.id
                })
            })}
        />
    )
}

export default DropdownExampleMultipleSearchSelection