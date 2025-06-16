import LoginButton from "@/components/login/loginButton";
import AuthGuard from "@/guards/auth.guard";

const Login = () => (
  <AuthGuard>
    <LoginButton />
  </AuthGuard>
);

export default Login;