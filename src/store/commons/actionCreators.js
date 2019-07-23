import {Get} from "../../modules/axios-util"

export default{
    getInfo(){
        return dispatch=>{
            Get({
                url:"/sn/goods",
                data:{
                    limit:20,
                    page:2
                }
            }).then(res=>{
                console.log(res.data)
            })
        }
    }
}