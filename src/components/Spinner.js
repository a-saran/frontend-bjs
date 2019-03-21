// import React from 'react';
// import spinner from './spinner.png';

// export default () => {
//     return (
//         <div>
//             <img src={spinner} alt="loading.." style={{ width: '200px', margin: 'auto', display: 'block' }} />
//         </div>
//     )
// }

import React, { Component } from 'react';
import spinner from './spinner.png';

export default class Spinner extends Component {

    state = {
        time1: true,
        time2: true
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                time1: !this.state.time1
            })
        }, 4000);
    }

    render() {
        const { time1, time2 } = this.state;
        return (
            <div>
                {
                    time1 == time2 ? (<img src={spinner} alt="loading.." style={{ width: '200px', margin: 'auto', display: 'block' }} />) : (<h1>No results found / timed out</h1>)
                }
            </div>
        )
    }
}
