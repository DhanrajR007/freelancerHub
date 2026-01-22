import { redirect } from "@tanstack/react-router";
import { login } from "../store/slice/auth.slice.js";
import { GetMe } from "../api/auth.api.js";

export const checkAuth = async ({ context }) => {
  try {
    const { queryClient, store } = context;
    const user = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: GetMe,
    });
    if (!user) return false;
    store.dispatch(login(user));
    const { isAuthenticated } = store.getState().auth;
    if (!isAuthenticated) return false;
    return true;
  } catch (error) {
    console.log(error);
    return redirect({ to: "/auth" });
  }
};
