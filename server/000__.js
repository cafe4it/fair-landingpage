if(Meteor.isServer) {
    //FlowRouter.setDeferScriptLoading(true);

    Meteor.methods({
        registerFair : function(obj){
            try{
                check(obj,{
                    Hovaten : String,
                    Sodienthoai : String,
                    Email : String,
                    Thamdutai : String,
                    Nguoidangkyla : String,
                    Thoigiandudinh : String,
                    Dudinhduhoctai : [String],
                    BietSrvnqua : [String]
                });
                var server = process.env.CLUSTER_BALANCER_URL || process.env.IP_SERVER || process.env.ROOT_URL;
                obj = _.extend(obj, {Dangkyluc : new Date(), TaiServer : server});
                Registers.insert(obj);
                return true;
            }catch(ex){
                console.log(ex);
                return false;
            }
            return false;
        }
    })
}