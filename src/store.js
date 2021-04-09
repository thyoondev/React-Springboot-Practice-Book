//액션

export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });

//상태

const inistate = {
  number: 32,
};

//액셕의 결과를 걸러내는 친구
const reducer = (state = inistate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 }; //return되면 그걸 호출한 쪽에서 받는게 아니라 return되는 순간 ui 변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
