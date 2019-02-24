import axios from 'axios'

export function getEvents(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    const request   = axios.get(`/ieee/events?limit=${limit}&skip=${start}&order=${order}`)
        .then( response => {
                    if(list){
                        return [...list,...response.data]
                    } else {
                        return response.data
                    }
                } 
            )


    return {
        type: 'GET_EVENTS',
        payload: request
    }
}


export function loginUser() {
    return {
        type: 'User_LOGIN',
        payload: null
    }
}