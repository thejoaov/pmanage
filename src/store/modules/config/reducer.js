import produce from 'immer';

const INITIAL_STATE = {
  theme: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      /**
       * These two actions can be safely deleted
       * after you implement your own sign in method
       * @auth/SIGN_IN_TEST
       * @auth/SIGN_OUT_TEST
       */
      case '@config/CHANGE_THEME': {
        draft.theme = !draft.theme;
        break;
      }
      default:
    }
  });
}
