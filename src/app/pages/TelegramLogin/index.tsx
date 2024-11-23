import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function TelegramLogin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) return;

    const container = document.getElementById("telegram-login-container");
    if (container) {
      container.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "example_elyors_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute("data-auth-url", `${window.location.origin}/foods`);
    script.setAttribute("data-request-access", "write");

    container?.appendChild(script);
  }, [user, dispatch]);

  return <div id="telegram-login-container"></div>;
}
