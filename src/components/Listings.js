import React, { Component } from 'react';
import List from './List';
import Pagination from './Pagination';

class Listings extends Component {
    state = {
        allDatas: this.props.data,
        currentData: [],
        currentPage: null,
        totalPages: null
    }


    onPageChanged = data => {
        const { allDatas } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        // console.log('currentdata' + currentPage + ', pageLimit' + pageLimit)
        const offset = (currentPage - 1) * pageLimit;
        const currentData = allDatas.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentData, totalPages });
    };


    render() {
        const { allDatas, currentData } = this.state;
        const totalCountries = allDatas.length;
        if (totalCountries === 0) return null;
        return (
            <div className="container-fluid" style={{ textAlign: 'center' }} >
                {currentData.map(d => (
                    <List
                        key={d.id}
                        data={d}
                    />
                ))}
                <Pagination
                    totalRecords={totalCountries}
                    pageLimit={15}
                    pageNeighbours={1}
                    onPageChanged={this.onPageChanged}
                />
            </div>
        );
    }
}
export default Listings;
