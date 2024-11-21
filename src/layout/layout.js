import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Header username={"Ajith"} onLogout={logout} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
