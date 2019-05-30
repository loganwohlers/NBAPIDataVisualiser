//overkill to give this a reducer- just for redux practice
//will add more season specific data so that these have some merit-- no reason to fetch them from rails when there's only 2-3

import giannis from '../assets/giannis.jpg'
import harden from '../assets/harden.jpg'

//currently only working with 2019 season for data vis stuff

export default (state = [], action) => {
    return [
        { year: 2018, image: giannis },
        { year: 2019, image: harden }
    ]
}
