FacebookTag = React.createClass({
    displayName : 'FacebookTag',
    render(){
        var src = _.template("https://www.facebook.com/tr?ev=<%=id%>&cd[value]=0.00&cd[currency]=VND&noscript=1"),
            src = src({id : this.props.id}),
            style = {
                display : "none"
            }
        return (
            <img height="1" width="1" alt="" style={style} src={src} />
        )
    }
})