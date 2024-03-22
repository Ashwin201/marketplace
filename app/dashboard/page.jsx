import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("@/components/Dashboard"));

export const metadata = {
  title: "Dashboard",
  description: "Discover, Shop and Sell!",
};

const DashBoardPage = async () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashBoardPage;
