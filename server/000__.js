if(Meteor.isServer) {
    //FlowRouter.setDeferScriptLoading(true);
    Meteor.publish('getRegisters',function(key){
        var privateKey = '123456978';
        if(key === privateKey){
            return Registers.find();
        }else{
            return this.ready();
        }
    });

    Meteor.publish('getRegistersBy', function(key, params){
        var privateKey = '123456978';
        if(key === privateKey){
            return Registers.find(params);
        }else{
            return this.ready();
        }
    });


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
                var id = Registers.insert(obj);
                return id;
            }catch(ex){
                console.log(ex);
                return false;
            }
            return false;
        }
    })
}