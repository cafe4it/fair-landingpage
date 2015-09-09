FacebookTag = React.createClass({
    displayName: 'FacebookTag',
    render(){
        var src = '';
        if (this.props.type === 'conversion') {
            src = _.template("https://www.facebook.com/tr?ev=<%=id%>&cd[value]=0.00&cd[currency]=VND&noscript=1")
        }

        if(this.props.type === 'remarketing'){
            src = _.template("https://www.facebook.com/tr?id=<%=id%>&ev=PageView&noscript=1")
        }
        src = src({id: this.props.id});
        var style = {
            display: "none"
        }
        return (
            <img height="1" width="1" alt="" style={style} src={src}/>
        )
    }
})