FlowRouter.route('/',{
    name : 'home',
    triggersEnter: [function(){
        mixpanel.track('Home page')
    }],
    action : function(p, q){
        ReactLayout.render(Home)
    }
});

FlowRouter.route('/thank-you',{
    triggersEnter: [function(){
        mixpanel.track('ThankYou page')
    }],
    name : 'thankyou',
    action : function(p, q){
        ReactLayout.render(ThankYou);
    }
});

