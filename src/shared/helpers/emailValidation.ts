export function isEmailValid(email: string) {
  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/gm;
  return regex.test(email);
}
