import { GeminiResType } from '@/types/GeminiApiResponseType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ✅ API base configuration
export const Stripe = createApi({
  reducerPath: 'stripe',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/', // 👈 apni API base URL yahan daalo
  }),
  endpoints: (builder) => ({
    // ✅ Example: GET request
    StripePaymentintent: builder.mutation({
      query: (email:FormData) => ({
        url:"create-payment-intent",
        method:"POST",
        body:email
      }),
    }),

    
  }),
});

// Hooks auto-generate hotay hain 👇
export const { useStripePaymentintentMutation } = Stripe;
