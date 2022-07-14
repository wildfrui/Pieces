import { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";

const Register = (props) => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn();
    console.log(props);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter a username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label htmlFor="password">Enter a password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn })(Register);
