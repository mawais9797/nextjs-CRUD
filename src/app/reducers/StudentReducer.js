const initialState = {
  msg: "awais here",
  studentData: [],
  editStudent: [],
  studentLogin: {},
};

const studentReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "ADD_STUDENT_DATA":
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
      };
    case "LOGIN_STUDENTS":
      debugger;
      return {
        ...state,
        studentLogin: action.payload,
      };
    case "LOGIN_STUDENTS":
      debugger;
      return {
        ...state,
        studentLogin: action.payload,
      };
    case "USER_TO_BE_EDIT":
      return { ...state, editStudent: action.payload };

    case "USER_HAS_UPDATE":
      return { ...state, studentData: action.payload };

    case "DELETE_USER":
      return {
        ...state,
        studentData: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
