import { baseApi } from "../../api/baseApi";

const clientApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getClients: builder.query({
        //     query: () => ({
        //         url: "/clients",
        //         method: "GET",
        //     }),
        //     providesTags: ["client"],
        //     transformResponse: (response) => response?.data,
        // }),
        // getClients: builder.query<
        //     { data: IClient[]; meta: IMetaInfo }, // what you want in React
        //     { page: number; limit: number } // arguments
        // >({
        //     query: ({ page, limit }) => `/clients?page=${page}&limit=${limit}`,
        //     transformResponse: (
        //         response: { data: IClient[]; meta: IMetaInfo } // raw API response type
        //     ) => {
        //         return {
        //             data: response.data.data,
        //             meta: response.data.meta,
        //         };
        //     },
        // }),
        getClients: builder.query({
            query: (args = {}) => {
                const {
                    page,
                    limit = 20,
                    search = "",
                    dateRange = "all_time",
                } = args || {};

                const queryParams = new URLSearchParams();
                if (search) queryParams.append("search", search);
                if (page) queryParams.append("page", page);
                if (limit) queryParams.append("limit", limit);
                if (dateRange) queryParams.append("dateRange", dateRange);

                return {
                    url: `/clients?${queryParams.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["client"],
            transformResponse: (response) => response?.data,
        }),

        getDeletedClients: builder.query({
            query: () => ({
                url: "/clients/history",
                method: "GET",
            }),
            providesTags: ["client"],
            transformResponse: (response) => response?.data,
        }),

        createClient: builder.mutation({
            query: (body) => ({
                url: "/clients",
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["client"],
        }),

        updateClient: builder.mutation({
            query: (body) => ({
                url: `/clients/${body.id}`,
                method: "PUT",
                body: body,
            }),
            invalidatesTags: ["client"],
        }),

        deleteClient: builder.mutation({
            query: (id) => ({
                url: `/clients/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["client"],
        }),

        restoreClient: builder.mutation({
            query: (id) => ({
                url: `/clients/${id}/restore`,
                method: "PATCH",
            }),
            invalidatesTags: ["client"],
        }),
    }),
});

export const {
    useGetClientsQuery,
    useGetDeletedClientsQuery,
    useCreateClientMutation,
    useUpdateClientMutation,
    useDeleteClientMutation,
    useRestoreClientMutation,
} = clientApi;
