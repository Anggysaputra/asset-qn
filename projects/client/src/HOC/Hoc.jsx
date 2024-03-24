import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/userSlice";
import Spinner from "../components/Spinner";
import axios from "axios";
import Login from "../pages/Login";
import api from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";
import { roleAccess } from "../reducers/roleAccessPageSlice";

export default function HOC({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const Token = localStorage.getItem("token");
        console.log("hoc test", Token);
        setIsLoading(true);
        const user = await api
          .get("/auth/v1", {
            params: {
              token: Token,
            },
          })
          .then((res) => res.data);
        // console.log("user hoc nih", user);
        dispatch(roleAccess(user.accessPages));
        dispatch(login(user.user[0]));
        setIsLoading(false);
      } catch (err) {
        // console.log("err hoc", err);
        navigate("/");
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [dispatch, currentPath]);

  if (isLoading) return <Spinner />;
  return children;
}
