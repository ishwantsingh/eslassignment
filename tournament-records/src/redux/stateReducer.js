const initialState = {
    matches: null,
    tournamentDetails: null,
    contestants: null,
    isLoading: false,
    hasSearched: false,

  };
  
export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MATCHES":
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case "GET_MATCHES_COMPLETE":
            return {
                ...state,
                matches: action.payload.matches,
                isLoading: false
            };
        case "GET_TOURNAMENT_DETAILS":
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case "GET_TOURNAMENT_DETAILS_COMPLETE":
            return {
                ...state,
                tournamentDetails: action.payload.tournamentDetails,
                isLoading: false,
            };
        case "GET_CONTESTANTS":
            return {
                ...state,
                isLoading: true,
                hasSearched: true
            };
        case "GET_CONTESTANTS_COMPLETE":
            return {
                ...state,
                contestants: action.payload.contestants,
                isLoading: false,
            };
        default:
        return state;
    }
}
  