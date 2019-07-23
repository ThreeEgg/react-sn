import state from "./state";
import {fromJS} from "immutable";
import {RECORD_DISTANCE_TOP,GET_GOODS_INFO,HAS_MORE} from "./const";

const reducer = (prevState = fromJS(state),action)=>{
    switch(action.type){
        case RECORD_DISTANCE_TOP:
            return prevState.set("distanceTop",action.distanceTop);
        case GET_GOODS_INFO:
            return prevState.set("goods",prevState.get("goods").concat(action.goods)).set("goodsPage",action.goodsPage);
        case HAS_MORE:
            return prevState.set("hasMore",action.hasMore);
        default:
            break;
    }
    return prevState;
}

export default reducer;