import React, { FC } from "react";

import Groups2Icon from "@mui/icons-material/Groups2";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import GradingIcon from "@mui/icons-material/Grading";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FeedbackIcon from "@mui/icons-material/Feedback";
import FastFoodIcon from "@mui/icons-material/Fastfood";
import DashboardIcon from "@mui/icons-material/Dashboard";

interface HeaderMenuListItemType {
  title: string;
  icon: JSX.Element;
}

export const SIDEBAR_LIST: HeaderMenuListItemType[] = [
  { title: "Dashboard", icon: <DashboardIcon /> },
  { title: "Food Order", icon: <FastFoodIcon /> },
  { title: "Feedback", icon: <FeedbackIcon /> },
  { title: "Message", icon: <MessageIcon /> },
  { title: "Order History", icon: <GradingIcon /> },
  { title: "Payments details", icon: <AccountBalanceWalletIcon /> },
  { title: "Customization", icon: <SettingsIcon /> },
];
