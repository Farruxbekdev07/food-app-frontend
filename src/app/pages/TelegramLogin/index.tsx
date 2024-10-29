import { useEffect } from "react";

interface UserType {
  id: string | null;
  hash: string | null;
  username: string | null;
  auth_date: string | null;
  last_name: string | null;
  photo_url: string | null;
  first_name: string | null;
}

export default function TelegramLogin() {
  const handleTelegramAuth = (user: UserType) => {
    console.log("User Auth Data:", user);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "Koronavirus_status_07_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "8");
    script.setAttribute(
      "data-auth-url",
      `${window.location.origin}/auth/telegram`
    );
    script.setAttribute("data-request-access", "write");

    document.getElementById("telegram-login-container")?.appendChild(script);

    const queryParams = new URLSearchParams(window.location.search);

    const user = {
      id: queryParams.get("id"),
      first_name: queryParams.get("first_name"),
      last_name: queryParams.get("last_name"),
      username: queryParams.get("username"),
      photo_url: queryParams.get("photo_url"),
      auth_date: queryParams.get("auth_date"),
      hash: queryParams.get("hash"),
    };

    console.log("user:", user);

    if (user.id) {
      handleTelegramAuth(user);
    }
  }, []);
  return <div id="telegram-login-container"></div>;
}
