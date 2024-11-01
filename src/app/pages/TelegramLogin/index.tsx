import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { setUserData, User } from "../../../store/reducer/authSlice";

export default function TelegramLogin() {
  const dispatch = useDispatch();

  const handleTelegramAuth = (user: User) => {
    dispatch(setUserData(user));
    toast.success("Sign in successfully!");
  };

  useEffect(() => {
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

    const user: User = {
      id: queryParams.get("id") || "",
      first_name: queryParams.get("first_name") || "",
      last_name: queryParams.get("last_name") || "",
      username: queryParams.get("username") || "",
      photo_url: queryParams.get("photo_url") || "",
      auth_date: queryParams.get("auth_date") || "",
      hash: queryParams.get("hash") || "",
    };

    if (user.id) {
      handleTelegramAuth(user);
    } else {
      toast.error("User not found!");
    }
  }, []);

  return <div id="telegram-login-container"></div>;
}
