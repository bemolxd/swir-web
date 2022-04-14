import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  useEffect(() => navigate(to, { replace: true }), [to, navigate]);

  return null;
};
