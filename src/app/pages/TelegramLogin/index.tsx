import { useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";

import { UserRoleEnum } from "../../types/enums";
import { CREATE_USER } from "../../graphql/Mutation/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setUserData, User } from "../../../store/reducer/authSlice";

export default function TelegramLogin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const [createUser] = useMutation(CREATE_USER);

  const handleTelegramAuth = (user: User) => {
    createUser({
      variables: {
        user,
      },
    });
    dispatch(setUserData(user));
    toast.success("Sign in successfully!");
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

    const lastName = queryParams.get("last_name");
    const firstName = queryParams.get("first_name");

    const userData: User = {
      // cart: "",
      name: `${firstName} ${lastName}`,
      // phone: "",
      // orders: [""],
      role: UserRoleEnum.admin,
      telegramId: Number(queryParams.get("id")),
    };

    if (userData.telegramId) {
      handleTelegramAuth(userData);
    } else {
      toast.error("User not found!");
    }
  }, [user, dispatch]);

  return <div id="telegram-login-container"></div>;
}
