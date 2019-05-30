// import React, { Component } from 'react'
// import {
//     Search, Grid, Header,
//     Segment
// } from 'semantic-ui-react'
// import _ from 'lodash'

// const resultRenderer = (results) => (
//     <span key={results} title={results}>
//         TEST
//         {results}
//     </span>
// );


// class BigSearchBar extends Component {
//     constructor() {
//         super()
//         this.state = { isLoading: false, results: [], value: '', source: [] }
//     }
//     componentDidMount() {
//         this.setState({ ...this.state, source: this.props.players })

//     }

//     handleResultSelect = (e, { result }) => this.setState({ value: result })

//     handleSearchChange = (e, { value }) => {
//         this.setState({ isLoading: true, value })

//         setTimeout(() => {
//             if (this.state.value.length < 1) return this.setState({ isLoading: false, results: [], value: '', source: this.props.players })

//             const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//             const isMatch = result => re.test(result)
//             console.log(isMatch)

//             this.setState({
//                 isLoading: false,
//                 results: _.filter(this.state.source, isMatch),
//             })
//         }, 300)
//     }

//     render() {
//         const { isLoading, value, results } = this.state
//         return (
//             <Grid>
//                 <Grid.Column width={6}>
//                     <Search
//                         loading={isLoading}
//                         onResultSelect={this.handleResultSelect}
//                         onSearchChange={_.debounce(this.handleSearchChange, 500, {
//                             leading: true,
//                         })}
//                         results={results}
//                         resultRenderer={resultRenderer}
//                         value={value}
//                         {...this.props}
//                     />
//                 </Grid.Column>
//                 <Grid.Column width={10}>
//                     <Segment>
//                         <Header>State</Header>
//                         <pre style={{ overflowX: 'auto' }}>
//                             {JSON.stringify(this.state, null, 2)}
//                         </pre>
//                         <Header>Options</Header>
//                         <pre style={{ overflowX: 'auto' }}>
//                             {JSON.stringify(this.state.source, null, 2)}
//                         </pre>
//                     </Segment>
//                 </Grid.Column>

//             </Grid>
//         )
//     }
// }


// export default BigSearchBar