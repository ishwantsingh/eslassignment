import {IS_FETCHING,
    GET_MATCHES,
    GET_MATCHES_COMPLETE,
    GET_TOURNAMENT_DETAILS,
    GET_TOURNAMENT_DETAILS_COMPLETE,
    GET_CONTESTANTS,
    GET_CONTESTANTS_COMPLETE,
    REQUEST_COMPLETED,
    REQUEST_FAILED} from "../actions/actionTypes"

const initialState = {
    matches: [],
    tournamentDetails: null,
    contestants: null,
    isLoading: false,
    hasSearched: false
  };
  
export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state,
                isLoading: true,
            }
        case GET_MATCHES:
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case GET_MATCHES_COMPLETE:
            return {
                ...state,
                matches: action.payload.matches
            };
        case GET_TOURNAMENT_DETAILS:
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case GET_TOURNAMENT_DETAILS_COMPLETE:
            return {
                ...state,
                tournamentDetails: action.payload.tournamentDetails
            };
        case GET_CONTESTANTS:
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case GET_CONTESTANTS_COMPLETE:
            return {
                ...state,
                contestants: action.payload.contestants
            };
        case REQUEST_COMPLETED:
            return {
                ...state,
                isLoading: false
            };
        case REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                matches: [],
                tournamentDetails: null,
                contestants: null,
                hasSearched: false
            };
        default:
        return state;
    }
}
  