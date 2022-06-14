
const Register = () => {
    return <div className="register_form">
        <form action="">
            <div className="form_control">
                <input type="text" required className="field"/>
                <label>Name</label>
            </div>
            <div className="form_control">
                <input type="text" required className="field"/>
                <label >Username</label>
            </div>
            <div className="form_control">
                <input type="text" required className="field"/>
                <label>Email</label>
            </div>
            <div className="form_control">
                <input type="password" required className="field"/>
                <label>Password</label>
            </div>
            <input type="submit" value="Register"/>
        </form>
    </div>
}

export default Register;