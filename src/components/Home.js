import React, {Component} from "react";
import logo from ".././img/logo.png";


class Home extends Component{
    render(){
        return(
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12  m-auto d-flex text-center justify-content-center">
                        <img src={logo} alt="logo" width="120px"/><span className="h1 my-auto mx-2">Visualizer</span>
                    </div>
                    <div className="col-12 my-5 text-center fw-bold fs-4 text-capitalize">
                        Visualize Algorithms For Better Understanding
                    </div>
                    <div className="col-12 row my-lg-5 mx-auto">
                        <div className="col-8  col-md-4 col-lg-3 m-auto">
                            <div className="card border border-2 border-warning text-waring  alert rounded-4">
                                <a href="/selection-sort" className="text-decoration-none text-warning">
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-4 fw-bold ">Selection Sort</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-8  col-md-4 col-lg-3 m-auto">
                            <div className="card border border-2 border-warning text-waring  alert rounded-4">
                                <a href="/insertion-sort" className="text-decoration-none text-warning">
                                    <div className="card-body">
                                        <h5 className="card-title text-center  fs-4 fw-bold ">Insertion Sort</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-8  col-md-4 col-lg-3 m-auto">
                            <div className="card border border-2 border-warning text-waring  alert rounded-4">
                                <a href="/bubble-sort" className="text-decoration-none text-warning">
                                    <div className="card-body">
                                        <h5 className="card-title text-center fs-4 fw-bold ">Bubble Sort</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-8 m-auto mt-5">
                        <div for="arry-input" className="form-label fw-bold fs-5 text-secondary">Enter The Aarry</div>
                        <div className="mb-3">
                            <input type="text" className="form-control " id="arry-input" placeholder="56 , 12 , 34 , 46 , 65 , 87 , 79 , ..."></input>
                        </div>
                        <div for="arry-input" className="form-label fw-bold fs-5 text-secondary">Select The Sorting</div>
                        <select class="form-select" >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Home;