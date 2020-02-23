import { LOADING, SUCCESS, ERROR } from "../Action";

const initialState = {
  loading: false,
  video: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        video: [],
        error: "",
      };
    case SUCCESS:
      return {
        ...state,
        video: action.payload,
        error: "",
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        success: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
