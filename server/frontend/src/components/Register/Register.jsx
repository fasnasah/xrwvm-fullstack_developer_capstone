import React from "react";

function Register() {
  return (
    <div>
      <h2>Sign-up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
