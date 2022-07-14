import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
  };

  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          value={user}
          autoComplete="off"
          required
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an account? <br />
        <span>
          {/* react router link */}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
