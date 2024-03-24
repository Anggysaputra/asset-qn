import React from "react";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorAlertWithMessage, successAlert } from "../helper/alerts";
import api from "../api/api";
import axios from "axios";
import { login } from "../reducers/userSlice";
import { roleAccess } from "../reducers/roleAccessPageSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async (username, password) => {
    // console.log("username nih", username);
    try {
      const response = await api.post("/auth", {
        username: username,
        password: password,
      });

      localStorage.setItem("token", response.data.result.token);

      console.log("res", response);

      successAlert(response.data.message);

      const { result, accessPages } = response.data;

      dispatch(login(result.user[0]));
      dispatch(roleAccess(accessPages));

      const navigation =
        accessPages.length > 0
          ? accessPages[0].m_sub_menus.length > 0
            ? accessPages[0].m_sub_menus[0].path
            : accessPages[0].path
          : [];

      if (navigation.length > 0) {
        navigate(navigation);
      } else {
        errorAlertWithMessage("Cannot Acces pages");
      }

      // navigate("/home");
    } catch (error) {
      console.log("errornih", error);
      errorAlertWithMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
