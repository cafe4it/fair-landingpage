FlowRouter.route('/', {
    name: 'home',
    action: function (p, q) {
        ReactLayout.render(Home)
    }
});

FlowRouter.route('/thank-you', {
    name: 'thankyou',
    action: function (p, q) {
        ReactLayout.render(ThankYou);
    }
});