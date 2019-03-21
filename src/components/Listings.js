import React, { Component } from 'react';
import List from './List';

class Listings extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="container-fluid" style={{ textAlign: 'center' }} >
                {data.map(d => (
                    <List
                        key={d.id}
                        data={d}
                    />
                ))}
            </div>
        );
    }
}
export default Listings;