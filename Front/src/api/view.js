export default {
    view_create(data){
        this.$vux.loading.show();
        return this.action({
            moduleName:"view_create",
            method:"post",
            url:"view/create",
            data,
            resthen:()=>{
                this.action({
                    moduleName: "view_create",
                    goods:null
                });
            }
        })
    },
    view_update(data){
        this.$vux.loading.show();
        return this.action({
            moduleName:"view_update",
            method:"post",
            url:"view/update",
            data,
            resthen:()=>{
                this.action({
                    moduleName: "view_update",
                    goods:null
                });
            }
        })
    },
    view_get_project(params){
        this.$vux.loading.show();
        return this.action({
            moduleName:"view",
            method:"get",
            url:"view/getProject",
            params,
            resthen:()=>{
                this.action({
                    moduleName: "view",
                    goods:null
                });
            }
        })
    },
}