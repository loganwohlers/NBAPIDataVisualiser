//overkill to give this a reducer- just for redux practice
//will add more season specific data so that these have some merit-- no reason to fetch them from rails when there's only 2-3
export default (state = [], action) => {
    return [
        { year: 2018 },
        { year: 2019 }
    ]
}
