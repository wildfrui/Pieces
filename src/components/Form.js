import { useRef, useState, useEffect } from "react";

const Form = ({ title, handleSubmit }) => {
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <section>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="email">Enter email:</label>
        <input
          type="text"
          id="email"
          ref={userRef}
          onChange={(e) => {
            setEmail(e.target.value);
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
        <button>{title}</button>
      </form>
    </section>
  );
};

export default Form;
