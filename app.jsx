export default function App(){
    return(
        <div class="login-container">
        <h1>Login to Your Account</h1>
        <form action="/login" method="POST">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="submit-btn">Login</button>
        </form>
        <div class="signup-link">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    </div>
    )
}