import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // register: builder.mutation({
        //     query: (userInfo) => ({
        //         url: "/auth/register",
        //         method: "POST",
        //         body: userInfo,
        //     }),
        // }),

        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
        changePassword: builder.mutation({
            query: ({ oldPassword, newPassword }) => ({
                url: "/auth/change-password",
                method: "POST",
                body: { oldPassword, newPassword },
            }),
        }),
        getProfileInfo: builder.query({
            query: () => ({
                url: "/users/me",
                method: "GET",
            }),
            providesTags: ["user"],
            transformResponse: (response) => response?.data,
        }),
        changeProfile: builder.mutation({
            query: ({ name }) => ({
                url: "/users/update",
                method: "PATCH",
                body: { name },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    // useRegisterMutation,
    useLogoutMutation,
    useChangePasswordMutation,
    useGetProfileInfoQuery,
    useChangeProfileMutation,
} = authApi;
