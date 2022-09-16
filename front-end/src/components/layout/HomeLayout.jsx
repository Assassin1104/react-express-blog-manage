import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import Header from '../Header'

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/portal" replace />;
  }

  return (
    <div>
      <Header />
      {outlet}
    </div>
  );
};
