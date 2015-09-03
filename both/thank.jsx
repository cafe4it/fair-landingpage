ThankYou = React.createClass({
    displayName : 'ThankYou',
    componentWillMount(){
        var pixelScript = '/scripts/pixel.js';
        DocHead.loadScript(pixelScript, function(){
            console.log('load complete...')
        })
    },
    render(){
        return <h1>Cảm ơn</h1>
    }
})