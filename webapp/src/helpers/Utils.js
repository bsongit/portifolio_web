function handlerChange(e){
    this.setState({
        form : {
            ...this.state.form, 
            [e.target.name] : e.target.value
        }});;
}

module.exports = {handlerChange}