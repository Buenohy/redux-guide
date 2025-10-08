import UserActionTypes from './action-types';

export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload: { name: 'Gabriel', email: 'gabriel@bueno.com' },
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
