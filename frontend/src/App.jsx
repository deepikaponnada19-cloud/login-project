const response = await fetch(
  "https://login-project-yld3.onrender.com/api/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }
);
export default App;