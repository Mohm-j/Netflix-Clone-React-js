import "./Login.css";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, login, signUp } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const user_auth = async (e) => {
    e.preventDefault();

    if (!email || !password || (signState === "Sign Up" && !name)) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email.trim(), password);
      } else {
        await signUp(name.trim(), email.trim(), password);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSwitch = (state) => {
    setSignState(state);
    setName("");
    setEmail("");
    setPassword("");
  };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="loader" />
    </div>
  ) : (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo" className="login-logo" />
      </Link>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder=" Name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder=" Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">remember me</label>
            </div>
            <p>need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              already have account?
              <span onClick={() => handleFormSwitch("Sign Up")}>
                sign up now
              </span>
            </p>
          ) : (
            <p>
              new to netflix?
              <span onClick={() => handleFormSwitch("Sign In")}>
                sign in now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
