export const AppRouteKey = {
  home: "/",
  users: {
    user: (id: number) => `users/${id}`,
    edit: (id: number) => `users/${id}/edit`,
  },
};
