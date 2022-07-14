import { useDispatch } from "react-redux";
import { setUser } from "../store/slices.js/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const Login = () => {
  // const errRef = useRef();
  // const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const auth = getAuth();
    signInWithWithEmail(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <Form title="sign in" handleSubmit={handleLogin}></Form>;
};

export default Login;
