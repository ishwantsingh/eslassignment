export const getMatchesComplete = (matches) => {
    return {
      type: "GET_MATCHES_COMPLETE",
      payload: {
        matches
      }
    };
};
export const getMatches = () => {
    return {
      type: "GET_MATCHES"
    };
};

export const getTournamentDetailsComplete = (tournamentDetails) => {
    return {
      type: "GET_TOURNAMENT_DETAILS_COMPLETE",
      payload: {
            tournamentDetails
      }
    };
};
export const getTournamentDetails = () => {
    return {
      type: "GET_TOURNAMENT_DETAILS"
    };
};

export const getContestantsComplete = (contestants) => {
    return {
        type: "GET_CONTESTANTS_COMPLETE",
        payload: {
            contestants
        }
    };
};
export const getContestants = () => {
    return {
      type: "GET_CONTESTANTS"
    };
};

export const requestCompleted = () => {
  return {
    type: "REQUEST_COMPLETED"
  };
};
export const requestFailed = () => {
  return {
    type: "REQUEST_FAILED"
  };
};
  
  