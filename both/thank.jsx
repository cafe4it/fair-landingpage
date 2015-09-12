ThankYou = React.createClass({
    displayName : 'ThankYou',
    componentDidMount(){
        var context = FlowRouter.current();
        if (context.route && context.route.name) {
            analytics.page(context.route.name);
        } else {
            analytics.page(context.path);
        }
    },
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <img src="/images/thanks.png" alt="Xin cảm ơn bạn đã đăng ký tham dự." className="img-responsive img-center"/>
                </div>
                <GoogleTag type="conversion" id="1017172282" label="xl1CCKegzl8QuqKD5QM"/>
                <FacebookTag type="conversion" id="6030054757321"/>


                <GoogleTag type="conversion" id="957099916" label="8TA-CIzV4F8QjN-wyAM"/>
                <FacebookTag type="conversion" id="6028882262599"/>
            </div>
        )
    }
})