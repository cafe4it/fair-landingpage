Registers = new Mongo.Collection('registers');

if(Meteor.isClient){
    Session.set('done_register',false);
    Tracker.autorun(function(){
        var done = Session.get('done_register');
        if(done === true){
            setTimeout(function(){
                Session.set('done_register',false);
                FlowRouter.go('thankyou');
            },500)
        }
    });
}