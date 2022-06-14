
const Login = () => {
  return (
    <div className="login_form">
      <form action="">
        <div className="form_control">
          <input type="text" required className="field"/>
          <label>Email</label>
        </div>
        <div className="form_control">
          <input type="password" required className="field"/>
          <label>Password</label>
        </div>
        <div className="remember_me">
            <input type="checkbox"/>
            <span>Remember me</span>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
