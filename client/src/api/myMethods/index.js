import axios from 'axios';

// axios请求
let myAxios = (option, backFn, errorFn) => {
    let { url, key } = option;
    axios.get(encodeURI(`http://localhost:8000/api/searchData?custName=${this.state.value}`)).then(res => {
        this.setState({
            listData: res.data,
            searchMesg: this.state.value,
            count: this.state.count + 1
        })
    }).catch(res => {
        console.error(res);
    })
}

export {myAxios}