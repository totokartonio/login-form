const LoginForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@yourmail.com"
          autoComplete="username"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export { LoginForm };
