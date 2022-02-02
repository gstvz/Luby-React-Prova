export function getUserToken() {
  const user = JSON.parse(localStorage.getItem('user')!);
  const userToken = user.token;
  return userToken;
}