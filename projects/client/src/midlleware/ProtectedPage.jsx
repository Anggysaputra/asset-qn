import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorAlertWithMessage } from "../helper/alerts";
import { logout } from "../reducers/userSlice";

export default function ProtectedPage({
  children,
  adminOnly = false,
  needLogin = false,
}) {
  const user = useSelector((state) => state.user);
  const accessPages = useSelector(
    (state) => state.roleAccessPages.roleAccessPages
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPath = window.location.pathname;

  const isPageAccessible = accessPages.some((page) => {
    // Cek apakah path halaman saat ini ada di m_sub_menus
    if (page.m_sub_menus && page.m_sub_menus.length > 0) {
      return page.m_sub_menus.some((subMenu) => subMenu.path === currentPath);
    }
    // Cek apakah path halaman saat ini ada di m_actions
    return page.path === currentPath;
  });

  useEffect(() => {
    if (!isPageAccessible) {
      errorAlertWithMessage("You are not allowed to access this page");
      dispatch(logout());
      localStorage.removeItem("token");
      navigate("/");

      return navigate("/");
    } else if (needLogin && !user?.id) {
      return navigate("/login");
    }
  }, [user.id]);

  return children;
}
