export function generateUser() {
  const id = Date.now();
  return {
    username: `user${id}@mail.com`,
    password: `Pwd@${id}`
  }
}