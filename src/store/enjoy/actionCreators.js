import {Get} from "../../modules/axios-util"
import {RECORD_DISTANCE_TOP,GET_GOODS_INFO,HAS_MORE} from "./const"
import { Toast } from 'antd-mobile';

export default{
    getGoodInfo(goodsPage,limit=8){
        return dispatch=>{
            Toast.loading("骚等...",0);
            if(limit * (goodsPage+1) >= 40){
                Toast.fail("我是有底线的...");
                dispatch({type:HAS_MORE,hasMore:false});
                return false;
            }
            Get({
                url:"/api/sn/goods",
                data:{
                    limit,
                    page:++goodsPage
                }
            }).then(res=>{
                if(res.data.data.current_total * goodsPage >= res.data.data.total){
                    Toast.fail("我是有底线的...");
                    dispatch({type:HAS_MORE,hasMore:false});
                    return false;
                }
                // console.log(res.data.data.object_list)
                let goods = res.data.data.object_list;
                dispatch({type:GET_GOODS_INFO,goods,goodsPage});
                Toast.hide()
            })
        }
    },
    recordDistanceTop(distanceTop){
        return {type:RECORD_DISTANCE_TOP,distanceTop}
    }
}