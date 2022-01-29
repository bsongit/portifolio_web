function handlerChange(e){
    this.setState({
        form : {
            ...this.state.form, 
            [e.target.name] : e.target.value
        }});;
}
function useStorage(key){
    const  setStorageItem = (value) => {
        window.localStorage.setItem("portifolio_web",JSON.stringify({
            ...JSON.parse(window.localStorage.getItem("portifolio_web")),
            [key]: value
        }))
    }
    const  getStorageItem = () => { return JSON.parse(window.localStorage.getItem('portifolio_web'))[key]}
    return [getStorageItem , setStorageItem]
}
function responseAlreadyInUse(response){
    if(response.data.keyValue) return alert(`${JSON.stringify(response.data.keyValue)} already  in use!`)
    alert("Registry success!");
    window.location.href = "/sign-in"
}

module.exports = {handlerChange,responseAlreadyInUse,useStorage}