import { calculateActions} from './../actions';

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (calculateActions.ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (calculateActions.APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (calculateActions.CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });
    case (calculateActions.CLEAR):
        return ({...initialState, total:0 , memory:0});
    
    default:
      return state;
  }
}

export default reducer;