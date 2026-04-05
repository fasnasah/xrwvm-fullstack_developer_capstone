import React from "react";

function Register() {
  return (
    <div>
      <h2>Sign-up</h2>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}

export default Register;
