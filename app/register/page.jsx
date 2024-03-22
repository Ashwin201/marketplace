import dynamic from "next/dynamic";
const Register = dynamic(() => import("@/components/Register"));

export const metadata = {
  title: "Register",
  description: "Discover, Shop and Sell!",
};
const RegisterPage = async () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterPage;
