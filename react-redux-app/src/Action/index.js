import axios from "axios";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const FetchVideo = () =>
  //dispatch =>
  {
    return dispatch => {
      dispatch({
        type: LOADING,
      });

      axios
        .get("https://www.scorebat.com/video-api/v1/")
        .then(res => {
          const filtered = res.data.filter(
            obj =>
              obj.competition.name === "SPAIN: La Liga" ||
              obj.competition.name === "ENGLAND: Premier League" ||
              obj.competition.name === "ITALY: Serie A",
          );
          dispatch({ type: SUCCESS, payload: filtered });
        })
        .catch(err => {
          dispatch({
            type: ERROR,
            payload: "Sorry no Video available now! :(",
          });
        });
    };
  };
