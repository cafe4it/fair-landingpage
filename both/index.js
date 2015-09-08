Registers = new Mongo.Collection('registers');

Meteor.startup(function(){
    if(Meteor.settings && Meteor.settings.public && Meteor.settings.public.segmentio){
        var sg = Meteor.settings.public.segmentio;
        analytics.load(sg.token);
    }

})
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
    })
}