import { useEffect } from "react";
import { toast } from "react-toastify";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import {
  setToken,
  setAuthRole,
  setUserData,
} from "../../../store/reducer/authSlice";
import { ITelegramUser } from "../../types/User";
import ROUTE_PATHS from "../../routes/paths/paths";
import { LOGIN } from "../../graphql/Mutation/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function TelegramLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [login, { data, loading }] = useLazyQuery(LOGIN);

  const handleTelegramAuth = (auth: ITelegramUser) => {
    login({ variables: { auth } });
  };

  useEffect(() => {
    if (user) {
      return;
    }

    // Remove previous Telegram widget if it exists
    const container = document.getElementById("telegram-login-container");
    if (container) {
      container.innerHTML = ""; // Clear previous widget if any
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Koronavirus_status_07_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-auth-url", `${window.location.origin}/foods`);
    script.setAttribute("data-request-access", "write");

    container?.appendChild(script);

    const queryParams = new URLSearchParams(window.location.search);

    const authData: ITelegramUser = {
      id: queryParams.get("id")?.toString() || "",
      first_name: queryParams.get("first_name") || "",
      last_name: queryParams.get("last_name") || "",
      username: queryParams.get("username") || "",
      photo_url: queryParams.get("photo_url") || "",
      auth_date: Number(queryParams.get("auth_date")),
      hash: queryParams.get("hash") || "",
    };

    if (authData.id) {
      handleTelegramAuth(authData);
      dispatch(setUserData(authData));
    } else {
      toast.error("User not found!");
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(setToken(data?.login?.token));
      dispatch(setAuthRole(data?.login?.user?.role));
      toast.success("Sign in successfully!");
      navigate(ROUTE_PATHS.MAIN);
    }
  }, [loading]);

  return <div id="telegram-login-container"></div>;
}
