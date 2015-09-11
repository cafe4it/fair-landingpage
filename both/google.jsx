GoogleTag = React.createClass({
    displayName : 'GoogleTag',
    render(){
        var src = '';
        if(this.props.type === 'conversion'){
            src = _.template('//www.googleadservices.com/pagead/conversion/<%=id%>/?label=<%=label%>&guid=ON&script=0'),
            src = src({id : this.props.id, label : this.props.label})
        }

        if (this.props.type === 'remarketing') {
            src = _.template('//googleads.g.doubleclick.net/pagead/viewthroughconversion/<%=id%>/?value=0&guid=ON&script=0'),
            src = src({id: this.props.id})
        }
        var style = {
            display : "inline"
        },
        imgStyle = {
            borderStyle : "none"
        }
        return (
            <div style={style}>
                <img height="1" width="1" style={imgStyle} alt="" src={src}/>
            </div>
        )
    }
});