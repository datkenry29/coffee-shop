import {configureStore} from "@reduxjs/toolkit";

export const makeAdminStore = () => {
  return configureStore({});
};

export const makeUserStore = () => {
  return configureStore({});
};

export const adminStore = makeAdminStore();
export const userStore = makeUserStore();
