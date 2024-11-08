import { IRoutes } from "./types";
import { USER_ROUTES } from "./roles/user";
import { ADMIN_ROUTES } from "./roles/admin";
import { COURIER_ROUTES } from "./roles/courier";

export const ROUTES: IRoutes = {
  user: USER_ROUTES,
  admin: ADMIN_ROUTES,
  courier: COURIER_ROUTES,
};
