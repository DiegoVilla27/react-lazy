import useLoginPage from "./hooks";

const LoginPage = () => {
  const { onSubmit } = useLoginPage();

  return (
    <form>
      <h1>Login</h1>

      <input
        placeholder="Email"
        type="email"
      />
      <input
        placeholder="Password"
        type="password"
      />
      <button
        type="submit"
        onClick={onSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
