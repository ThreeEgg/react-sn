import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "./actionCreators";

export default (UIComponent,options)=>{
    return connect(state=>{
        let {reducer,states} = options;
        let _state = {}
        states.forEach(item=>{
            _state[item] = state.getIn([reducer,item])
        })
        return _state;
    },dispatch=>{
        return bindActionCreators(actionCreators[options.reducer],dispatch)
    })(UIComponent)
}