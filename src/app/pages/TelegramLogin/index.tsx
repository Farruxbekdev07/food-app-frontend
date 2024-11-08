import { useEffect } from "react";
import { toast } from "react-toastify";
import { useLazyQuery } from "@apollo/client";

import {
  setToken,
  setAuthRole,
  setUserData,
} from "../../../store/reducer/authSlice";
import { ITelegramUser } from "../../types/User";
import { LOGIN } from "../../graphql/Mutation/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function TelegramLogin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [login, { data, loading }] = useLazyQuery(LOGIN);

  const handleTelegramAuth = (auth: ITelegramUser) => {
    login({ variables: { auth } });

    if (data) {
      dispatch(setUserData(auth));
      dispatch(setToken(data?.login?.token));
      dispatch(setAuthRole(data?.login?.user?.role));
      toast.success("Sign in successfully!");
    }
  };

  useEffect(() => {
    if (user) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Koronavirus_status_07_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-auth-url", `${window.location.origin}/foods`);
    script.setAttribute("data-request-access", "write");

    document.getElementById("telegram-login-container")?.appendChild(script);

    const queryParams = new URLSearchParams(window.location.search);

    const authData: ITelegramUser = {
      id: Number(queryParams.get("id")),
      first_name: queryParams.get("first_name") || "",
      last_name: queryParams.get("last_name") || "",
      username: queryParams.get("username") || "",
      photo_url: queryParams.get("photo_url") || "",
      auth_date: Number(queryParams.get("auth_date")),
      hash: queryParams.get("hash") || "",
    };

    if (authData.id) {
      handleTelegramAuth(authData);
    } else {
      toast.error("User not found!");
    }
  }, [user, dispatch, loading]);

  return <div id="telegram-login-container"></div>;
}
