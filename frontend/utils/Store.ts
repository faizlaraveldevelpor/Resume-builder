import { DocomentApi } from "@/lib/docoment";
import { GeminiApi } from "@/lib/Gemini";
import { UserApi } from "@/lib/user";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./UserSlice";
import { Stripe } from "@/lib/stripe";

export const store = configureStore({
  reducer: {
    userSlice:userSlice,
    [GeminiApi.reducerPath]: GeminiApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [DocomentApi.reducerPath]: DocomentApi.reducer,
    [Stripe.reducerPath]: Stripe.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(GeminiApi.middleware)
      .concat(DocomentApi.middleware)
      .concat(UserApi.middleware)
      .concat(Stripe.middleware)
});


