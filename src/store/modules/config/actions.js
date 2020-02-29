/**
 * These two actions can be safely deleted
 * after you implement your own sign in method
 * @auth/SIGN_IN_TEST
 * @auth/SIGN_OUT_TEST
 */

export function changeTheme() {
  return {
    type: '@config/CHANGE_THEME',
  };
}
