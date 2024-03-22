import dynamic from "next/dynamic";
const Login = dynamic(() => import("@/components/Login"));

export const metadata = {
  title: "Login",
  description: "Discover, Shop and Sell!",
};
const LoginPage = async () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
