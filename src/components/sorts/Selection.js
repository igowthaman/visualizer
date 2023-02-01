import React, {Component, createRef} from "react";
import Navbar from "../Navbar";

function sort(a){
    var res_str =  `<div>`;
    for(var i = 0; i< a.length; i++){
        res_str += `<span class="fs-5 lh-lg fw-bold">${a[i]}</span> ,`;
    }
    res_str += '</div>';
    var min, pos;
    for(i = 0; i< a.length; i++){
        min = a[i];
        pos = i;
        for(var j = i +1; j< a.length; j++){
            if(min>a[j]){
                pos = j;
                min = a[j];
            }
        }
        var temp = a[i];
        a[i] = a[pos];
        a[pos] = temp;
        res_str += `<div><span class="text-secondary fs-5 fw-bold">Step ${i} : </span>`;
        for( j  = 0 ; j < a.length; j++){
            if(i>=j){
                if(min == a[j])
                {
                    res_str += `
                        <span class="text-underline text-warning fs-5 lh-lg ">${a[j]}</span> ,
                        `;
                }
                else
                {
                    res_str += `
                    <span class="text-underline text-success fs-5 lh-lg">${a[j]}</span> ,
                    `;
                }
            }else{
                res_str += `
                <span class="fs-5 lh-lg">${a[j]}</span> ,
                `;
            }
        }
        res_str = res_str.slice(0,-1);
        res_str += "</div>";
    }
    return res_str;
}

class Selection extends Component{
    constructor(props){
        super(props);
        this.input_ref  = createRef();
        this.str = null;
    }
    view(){
        var str_arr = this.input_ref.current.value.split(",");
        var num_arr = str_arr.map(Number);
        console.log(num_arr);
        this.str = sort(num_arr);
        this.setState({});
    }
    render(){
        return(
            <div className="container-fluid ">
                <Navbar/>
                <div className="row">
                    <div className="col-12 mt-2 text-center fw-bold fs-4 text-capitalize">
                        Selection Sort
                    </div>
                    <div className="col-lg-6 col-md-8  col-11 m-auto mt-5">
                        <div for="arry-input" className="form-label fw-bold fs-5 text-secondary">Enter The Aarry</div>
                        <div className="mb-3">
                            <input type="text" className="form-control " id="input" placeholder="56 , 12 , 34 , 46 , 65 , 87 , 79 , ..." ref={this.input_ref}></input>
                        </div>
                    </div>
                    <div className="col-lg-7 text-center col-11 m-auto mt-4">
                        <button className="btn btn-warning fw-bold" onClick={()=>{this.view()}}>View</button>
                    </div>
                    <div className="col-lg-7 text-center col-11 m-auto mt-3" dangerouslySetInnerHTML={{ __html:this.str}}/>
                </div>
            </div>
        );
    }
}

export default Selection;