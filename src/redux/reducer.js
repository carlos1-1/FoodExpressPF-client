import { INITIAL_GLOBAL_STATE } from "../utils/initialObjects.js";

import {
  GET_PLATES,
  CLEAR_PLATES,
  GET_PLATES_BY_FILTERS,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_USER,
  GET_ORDERS,
  GET_ALL_USER,
  GET_COMMENT,
  GET_ALL_TABLES,
  GET_TABLES
} from "./actions.js";

function rootReducer(state = INITIAL_GLOBAL_STATE, action) {
  switch (action.type) {
    case GET_PLATES:
      return {
        ...state,
        plates: action.payload,
        allPlates: action.payload,
      };
    case CLEAR_PLATES:
      return {
        ...state,
        plates: [],
      };
    case GET_PLATES_BY_FILTERS:
      return {
        ...state,
        plates: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };
    case "POST_COMMENT":
      return {
        ...state,
      };
    case GET_COMMENT:
      return {
        ...state,
        allComents: action.payload,
      };

    case GET_ALL_TABLES:
      return {
        ...state,
        allTables: action.payload,
      };
    case GET_TABLES:
      return {
        ...state,
        tables: action.payload
      }

    default:
      return { ...state };
  }
}

export default rootReducer;
