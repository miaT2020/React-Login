export function login({ email, userName, password }) {
  const delay = 0.7 + Math.random() * 2 * 10000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password123" && !!email) {
        resolve({ userName, password, email });
      } else {
        reject(new Error("Invalid password and email"));
      }
    }, delay);
  });
}
