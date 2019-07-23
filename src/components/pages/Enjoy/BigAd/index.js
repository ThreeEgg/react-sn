import React,{Component} from "react";
import "./index.scss";

class BigAd extends Component{
    render(){
        return (
            <div className="big-ad">
                <img src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}

export default BigAd;