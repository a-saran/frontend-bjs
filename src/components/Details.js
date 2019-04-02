import React, { Component } from 'react';
import Listings from './Listings';
import Filtering from './Filtering';
import Spinner from './Spinner';
import axios from 'axios';

class Details extends Component {
    state = {
        datas: [],
        searchCourseName: '',
        searchUniversity: '',
        searchProvider: '',
        length: '',
        ParentSubject: '',
        ChildSubject: '',
    }

    async componentDidMount() {
        const res = await axios.get("https://api.myjson.com/bins/1fq8pm");

        await this.setState({ datas: res.data })
    }

    onsearchChange_CourseName = (event) => {
        this.setState({ searchCourseName: event.target.value })
    }

    onsearchChange_University = (event) => {
        this.setState({ searchUniversity: event.target.value })
    }

    onsearchChange_Provider = (event) => {
        this.setState({ searchProvider: event.target.value })
    }
    onsearchChange_Length = (event) => {
        this.setState({ length: event.target.value })
    }
    onsearchChange_ParentSub = (event) => {
        this.setState({ ParentSubject: event.target.value })
    }
    onsearchChange_ChildSub = (event) => {
        if (event.target.value === 'Child Subject') {
            this.setState({ ChildSubject: '' })
        }
        this.setState({ ChildSubject: event.target.value })
    }
    onclickTo_restore = () => {
        console.log('onclick_restore')
        this.setState({
            searchCourseName: '',
            searchUniversity: '',
            searchProvider: '',
            length: '',
            ParentSubject: '',
            ChildSubject: ''
        })
    }

    render() {

        const { datas, searchUniversity, searchCourseName, searchProvider, length, ParentSubject, ChildSubject } = this.state;
        //filtering
        let filteredData = datas.filter(data => {
            return data["Course Name"].toLowerCase().includes(searchCourseName.toLowerCase());
        });
        //filter by university
        filteredData = filteredData.filter(data => {
            return data["Universities"]["Institutions"].toLowerCase().includes(searchUniversity.toLowerCase());
        })


        //select option for providers
        const providers = filteredData.map(data => {
            return data["Provider"];
        })
        let uniqueProviders = [...new Set(providers)];
        //filter data by providers
        filteredData = filteredData.filter(data => {
            if (searchProvider === '') {
                return data
            } else {
                return data["Provider"] === searchProvider
            }
        })


        //select option for length
        const Length = filteredData.map(data => {
            return data["Length"];
        })
        const uniqueLength = [...new Set(Length)];
        //filter data by len
        filteredData = filteredData.filter(data => {
            if (length === '') {
                return data
            } else {
                return data["Length"] === parseInt(length)
            }
        })

        //parent subject
        const parentSub = filteredData.map(data => {
            return data["Parent Subject"];
        })
        const uniqueparentSub = [...new Set(parentSub)];
        //filter data by parentSub
        filteredData = filteredData.filter(data => {
            if (ParentSubject === '') {
                return data
            } else {
                return data["Parent Subject"] === ParentSubject
            }
        })


        //childSub
        const childSub = filteredData.map(data => {
            return data["Child Subject"];
        })
        const uniqueChildSub = [...new Set(childSub)];
        //filter data by parentSub
        filteredData = filteredData.filter(data => {
            if (ChildSubject === '') {
                return data
            } else {
                return data["Child Subject"] === ChildSubject
            }
        })

        return (
            <div >
                <Filtering
                    searchChange_CourseName={this.onsearchChange_CourseName}
                    searchChange_University={this.onsearchChange_University}
                    providers={uniqueProviders}
                    searchChange_Provider={this.onsearchChange_Provider}
                    length={uniqueLength}
                    searchChange_Length={this.onsearchChange_Length}
                    parentSub={uniqueparentSub}
                    searchChange_ParentSub={this.onsearchChange_ParentSub}
                    childSub={uniqueChildSub}
                    searchChange_ChildSub={this.onsearchChange_ChildSub}
                    onclick_restore={this.onclickTo_restore}
                    key={uniqueLength}
                />
                <br />
                <h1 className="container" style={{ textAlign: 'right' }}>Course Found: <span className="text-info">{filteredData.length}</span></h1><br />
                {
                    filteredData.length <= 0 ? (<Spinner />) : (<Listings data={filteredData} key={filteredData.length} />)
                }
            </div>
        )
    }
}
export default Details;