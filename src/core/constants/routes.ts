export const AppRouteKey = {
  home: "/",
  users: {
    user: (id: number) => `/users/${id}`,
    edit: (id: number) => `/users/${id}/edit`,
    new: "/users/new",
    created: (name: string, job: string) => `/users/new/${name}/${job}`,
  },
};
