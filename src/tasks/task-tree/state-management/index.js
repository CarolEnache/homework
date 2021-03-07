export const initialState = {
  data: [],
  profile: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};