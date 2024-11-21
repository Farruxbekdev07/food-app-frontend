import { useEffect } from "react";
import { toast } from "react-toastify";

import { ITelegramUser } from "../../types/User";
import { setUserData } from "../../../store/reducer/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function TelegramLogin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    // Check if user is already logged in
    if (user) return;

    const container = document.getElementById("telegram-login-container");
    if (container) {
      container.innerHTML = "";
    }

    // Append Telegram widget script to the page
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Koronavirus_status_07_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-auth-url", `${window.location.origin}/foods`);
    script.setAttribute("data-request-access", "write");

    container?.appendChild(script);

    // Extract query parameters
    // const queryParams = new URLSearchParams(window.location.search);

    // const authData: ITelegramUser = {
    //   id: queryParams.get("id")?.toString() || "",
    //   first_name: queryParams.get("first_name") || "",
    //   last_name: queryParams.get("last_name") || "",
    //   username: queryParams.get("username") || "",
    //   photo_url: queryParams.get("photo_url") || "",
    //   auth_date: Number(queryParams.get("auth_date")) || 0,
    //   hash: queryParams.get("hash") || "",
    // };

    // if (authData.id) {
    //   dispatch(setUserData(authData));
    // } else {
    //   toast.error("User not found!");
    // }
  }, [user, dispatch]);

  return <div id="telegram-login-container"></div>;
}
