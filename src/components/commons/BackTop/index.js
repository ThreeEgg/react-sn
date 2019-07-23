import React,{Component} from "react";
import "./index.scss";
import GroupState from "../../../modules/group"
class BackTop extends Component{
    backTop = ()=>{
        window.scrollTo(0,0);
    }
    renderBackTop = ()=>{
        return (
            <div className="back-top" onClick={this.backTop}>
                <i className="fa fa-arrow-up"></i>
            </div>
        )
    }
    render(){
        return (
            <div>
                {
                    this.props.distanceTop>800?this.renderBackTop():""
                }
            </div>
            
        )
    }
}

export default GroupState(BackTop,{
    reducer:"enjoy",
    states:["distanceTop"]
});