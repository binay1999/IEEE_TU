import axios from "axios";

export function getEvents(limit = 10, start = 0, order = "asc", list = "") {
  const request = axios
    .get(`/ieee/events?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return {
    type: "GET_EVENTS",
    payload: request
  };
}

export function addEvent(event) {
  const request = axios
    .post("/ieee/events", event)
    .then(response => response.data);

  return {
    type: "ADD_EVENT",
    payload: request
  };
}

export function clearNewEvent(params) {
  return {
    type: "CLEAR_EVENT",
    payload: {}
  };
}

export function getEvent(id) {
  const request = axios
    .get(`/ieee/getEvent?id=${id}`)
    .then(response => response.data);

  return {
    type: "GET_EVENT",
    payload: request
  };
}

export function updateEvent(data) {
  const request = axios
    .post(`/ieee/event_update`, data)
    .then(response => response.data);
  return {
    type: "UPDATE_EVENT",
    payload: request
  };
}

export function deleteEvent(id) {
  const request = axios
    .delete(`/ieee/event_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_EVENT",
    payload: request
  };
}

export function clearEvent() {
  return {
    type: "CLEAR_DELETEDBOOK",
    payload: {
      book: null,
      updateEvent: false,
      postDeleted: false
    }
  };
}

// ======== USER ========++++

export function loginUser({ email, password }) {
  const request = axios
    .post("/ieee/login", { email, password })
    .then(response => response.data);
  return {
    type: "USER_LOGIN",
    payload: request
  };
}

export function auth() {
  const request = axios.get("/ieee/auth").then(response => response.data);

  return {
    type: "USER_AUTH",
    payload: request
  };
}

export function getUsers(params) {
  const request = axios.get("/ieee/users").then(response => response.data);

  return {
    type: "GET_USER",
    payload: request
  };
}

export function userRegister(user, userList) {
  const request = axios.post("/ieee/add-admin", user);

  return dispatch => {
    request.then(({ data }) => {
      let users = data.success ? [...userList, data.user] : userList;
      let response = {
        success: data.success,
        users
      };

      dispatch({
        type: "USER_REGISTER",
        payload: response
      });
    });
  };
}
