function handlerChange(e){
    this.setState({
        form : {
            ...this.state.form, 
            [e.target.name] : e.target.value
        }});;
}

function responseAlreadyInUse(response){
    if(response.data.keyValue) return alert(`${JSON.stringify(response.data.keyValue)} already  in use!`)
    return;
}


module.exports = {handlerChange,responseAlreadyInUse}