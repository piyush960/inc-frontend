import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'http://localhost:3001/events'

export const formAPI = createApi({
    reducerPath: "forms",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        stepOne: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_1?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        stepTwo: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_2?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                credentials: 'include',
                body: data
            })
        }),
        stepThree: builder.mutation({
            query: (event_name, ticket, body) => ({
                url: `/step_3?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body
            })
        }),
        stepFour: builder.mutation({
            query: (event_name, ticket, body) => ({
                url: `/step_1?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body
            })
        }),
    })
})


export const { useStepOneMutation, useStepTwoMutation, useStepThreeMutation, useStepFourMutation } = formAPI