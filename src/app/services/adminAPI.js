import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = ("https://api.pictinc.org") + "/events";
// const baseURL = "http://localhost:3001/events";

export const adminAPI = createApi({
    reducerPath: "admins",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getRegistrationsCount: builder.query({
          query: () => ({
              url: `/registrations-count`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getPendingVerifications: builder.query({
          query: (event_name) => ({
              url: `/verify/payment/${event_name}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getVerifiedRegistrations: builder.query({
          query: (event_name) => ({
              url: `/registrations/${event_name}`,
              method: 'GET',
              credentials: 'include',
              validateStatus: (res) => {
                return (res.status === 200 || res.status === 302);
              },
          })
        }),
        getCollegeID: builder.query({
          query: (email) => ({
              url: `/verify-file?email=${email}`,
              method: 'GET',
              credentials: 'include',
              validateStatus: (res) => {
                return (res.status === 200 || res.status === 302);
              },
          })
        }),
        processPaymentVerification: builder.mutation({
          query: ({data, event_name}) => ({
              url: `/verify/payment/${event_name}`,
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: data,
          })
      }),
    })
})


export const { useLazyGetRegistrationsCountQuery, useLazyGetPendingVerificationsQuery, useLazyGetVerifiedRegistrationsQuery, useLazyGetCollegeIDQuery, useProcessPaymentVerificationMutation, } = adminAPI
