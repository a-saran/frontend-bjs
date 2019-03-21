import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const List = (props) => {
    const { data } = props;
    const id = data["Course Id"];
    return (
        <div className="card card-dis" >
            <div className="card-body">
                <h5 className="card-title">
                    {
                        data["Course Name"].length >= 40 ? data["Course Name"].slice(0, 40) + '...' : data["Course Name"]
                    }
                </h5>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">{data.Provider === '' ? 'Not specified' : data.Provider}</h6>
                <p className="card-text"><b>Subject : </b>{data["Parent Subject"]}</p>
                <p className="card-text"><b>Next Session : </b>{data["Next Session Date"]}</p>
                <hr />
                <Link to={`/info/${id}`} className="card-link">More info</Link>
            </div>
        </div>
    )
}
export default List;