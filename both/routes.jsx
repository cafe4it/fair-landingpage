FlowRouter.route('/',{
    name : 'home',
    triggersEnter: [trackRouteEntry],
    action : function(p, q){
        ReactLayout.render(Home)
    }
});

FlowRouter.route('/thank-you',{
    triggersEnter: [trackRouteEntry],
    name : 'thankyou',
    action : function(p, q){
        ReactLayout.render(ThankYou);
    }
});

function trackRouteEntry(context){
    analytics.page(context.route.name);
}

