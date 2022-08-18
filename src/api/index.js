import axios from '../utils/request'

export function getData(){
    return axios({
        method:'get',
        url:'home/page/1/10',
    })
}

