import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Header from "../Header";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
      {outlet}
    </div>
  );
};
