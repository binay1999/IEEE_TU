import axios from 'axios'

export function getEvents(
    limit = 10,
    start = 0,
    order = 'asc'
){
    const request   = axios.get(`/ieee/events?limit=${limit}&skip=${start}&order=${order}`)
        .then( response => response.data )


    return {
        type: 'GET_EVENTS',
        payload: request
    }
}