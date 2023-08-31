export const calculateActions = {
  ADD_ONE :'ADD_ONE',
  APPLY_NUMBER : "APPLY_NUMBER",
  CHANGE_OPERATION : "CHANGE_OPERATION",
  CLEAR : 'CLEAR_DİSPLAY'
}

export const addOne = () => {
  return ({ type: calculateActions.ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: calculateActions.APPLY_NUMBER, payload: parseInt(number) });
}
export const changeOperationCalculate = (operation) => {
  return ({type: calculateActions.CHANGE_OPERATION , payload : operation});
}
export const deleteCalculate = () => {
  return ({type: calculateActions.CLEAR});
}