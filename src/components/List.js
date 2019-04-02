import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
        const { data } = this.props;
        const id = data["Course Id"];
        return (
            <div className="card card-dis" >
                <div className="card-body" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <h5 className="card-title">
                        {
                            data["Course Name"].length >= 40 ? data["Course Name"].slice(0, 40) + '...' : data["Course Name"]
                        }
                    </h5>

                    <div>
                        <hr />
                        <h6 className="card-subtitle mb-2 text-muted">{data.Provider === '' ? 'Not specified' : data.Provider}</h6>
                        <p className="card-text"><b>Subject : </b>{data["Parent Subject"]}</p>
                        <p className="card-text"><b>Next Session : </b>{data["Next Session Date"]}</p>
                        <hr />
                        <Link to={`/info/${id}`} className="card-link-a">More info</Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default List;



// import React, { Component } from 'react';
// import '../App.css';
// import { Link } from 'react-router-dom';

// class List extends Component {
//     state = {
//         hover: false
//     }
//     render() {
//         const { data } = this.props;
//         const id = data["Course Id"];
//         return (
//             <div className="card card-dis" >
//                 <div className="card-body">
//                     <h5 className="card-title">
//                         {
//                             data["Course Name"].length >= 40 ? data["Course Name"].slice(0, 40) + '...' : data["Course Name"]
//                         }
//                     </h5>
//                     {this.state.hover === true ? (
//                         <div>
//                             <hr />
//                             <h6 className="card-subtitle mb-2 text-muted">{data.Provider === '' ? 'Not specified' : data.Provider}</h6>
//                             <p className="card-text"><b>Subject : </b>{data["Parent Subject"]}</p>
//                             <p className="card-text"><b>Next Session : </b>{data["Next Session Date"]}</p>
//                             <hr />
//                             <Link to={`/info/${id}`} className="card-link-a">More info</Link>
//                         </div>
//                     ) : null
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
// export default List;