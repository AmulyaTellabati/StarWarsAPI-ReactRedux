import axios from "axios";
const BASE = "https://swapi.dev/api/people/";

const getPeople = (page) => axios.get(BASE+"?page="+ page);

export function GET_PEOPLE(page) {
    debugger;
  return dispatch => {
    dispatch({ type: "SET_LOADING", value: true });
    return getPeople(page).then((res) => {
      dispatch({ type: "SET_LIST", value: res.data.results, page:res.data.next !=null ?res.data.next.split("=")[1] : 1 });
    });
  };
} 
