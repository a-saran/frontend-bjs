import React, { Component } from 'react'

class Filtering extends Component {
    render() {
        const { searchChange_CourseName, searchChange_University, searchChange_Provider, providers, length, searchChange_Length, parentSub, searchChange_ParentSub, childSub, searchChange_ChildSub, onclick_restore } = this.props;


        return (
            <div className="container dis-top">
                <h2 className="white">Search/Filter</h2>
                <div className="row">

                    <div className="col">
                        <input type="text" className="form-control" placeholder="University" onChange={searchChange_University} />
                    </div>

                </div>
                <br />
                <div className="row">

                    <div className="col">
                        <input type="text" className="form-control" placeholder="Course name" onChange={searchChange_CourseName} />
                    </div>

                    <div className="col">
                        <select name="state" className="form-control" onChange={searchChange_Provider}>
                            <option defaultValue=''>Providers</option>
                            {/* <option defaultValue=''>--(not selected)</option> */}
                            {
                                providers.map(provider => (
                                    provider !== '' ? (<option defaultValue={provider}>{provider}</option>) : null
                                ))
                            }
                        </select>
                    </div>

                    <div className="col">
                        <label className="sr-only">Length</label>
                        <select name="state" className="form-control" onChange={searchChange_Length}>
                            <option defaultValue=''>Length</option>
                            {/* <option defaultValue=''>--(not selected)</option> */}
                            {
                                length.map(len => (
                                    len !== '' ? (<option defaultValue={len}>{len}</option>) : null
                                ))
                            }

                        </select>
                    </div>

                </div>

                <br />

                <div className="row">
                    <div className="col">
                        <select name="state" className="form-control" onChange={searchChange_ParentSub}>
                            <option value='' >Parent Subject</option>
                            {/* <option defaultValue=''>--(not selected)</option> */}

                            {
                                parentSub.map(len => (
                                    len !== '' ? (<option defaultValue={len}>{len}</option>) : null
                                ))
                            }

                        </select>
                    </div>
                    <div className="col">
                        <select name="state" className="form-control" onChange={searchChange_ChildSub}>
                            <option defaultValue=''>Child Subject</option>
                            {/* <option defaultValue=''>--(not selected)</option> */}
                            {
                                childSub.map(len => (
                                    len !== '' ? (<option defaultValue={len}>{len}</option>) : null
                                ))
                            }

                        </select>
                    </div>
                </div>
                <br />
                <div className="row  text-right justify-content-end">
                    <div className="col-md-4">
                        <button className="btn btn-secondary form-control" onClick={onclick_restore}>Clear Search History</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Filtering;