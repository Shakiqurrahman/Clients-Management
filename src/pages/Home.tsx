import { useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";
import ClientCard from "../components/ClientCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { analyticsCardData } from "../constants/AnalyticsCardData";
import ClientCardSkeleton from "../lib/ClientCardSkeleton";
import { useGetClientsQuery } from "../redux/features/client/clientApi";
import type { IClient } from "../types/clients";

export interface IMetaInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

const Home = () => {
    const [page, setPage] = useState(1);
    const [showLimit, setShowLimit] = useState(20);
    const { data: response, isLoading } = useGetClientsQuery({
        page,
        limit: showLimit,
    });
    const { data: clients, meta } = response || {};
    console.log("🚀 Client Array: ", clients);

    // const dispatch = useAppDispatch();
    console.log("🚀 meta file: ", meta);

    return (
        <section className="max-width">
            {/* Analytics Card  */}
            <h1 className="text-xl font-semibold">Analytics</h1>
            <div className="mt-4 flex flex-wrap gap-4">
                {analyticsCardData.map((card, index) => (
                    <AnalyticsCard key={index} card={card} />
                ))}
            </div>
            {/* Search Bar  */}
            <div className="mt-10">
                <SearchBar />
            </div>
            {/* Client Grid  */}
            <div className="mt-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
                {isLoading ? (
                    Array.from({ length: showLimit }).map((_, index) => (
                        <ClientCardSkeleton key={index} />
                    ))
                ) : clients?.length === 0 ? (
                    <p>No client data found!</p>
                ) : (
                    clients?.map((client: IClient, index: number) => (
                        <ClientCard key={index} client={client} />
                    ))
                )}
                {/* Pagination  */}
                {!isLoading && (meta as IMetaInfo)?.totalPages > 1 && (
                    <section className="flex items-center justify-between py-4 mt-4 border-t border-gray-200 col-span-full">
                        <p className="text-sm font-medium text-gray-300">
                            Total Receivings : {(meta as IMetaInfo)?.total}
                        </p>
                        <Pagination
                            currentPage={(meta as IMetaInfo)?.page || page}
                            totalPages={(meta as IMetaInfo)?.totalPages}
                            onPageChange={setPage}
                        />
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-300">
                                Show per page :
                            </p>
                            <select
                                onChange={(e) => {
                                    setShowLimit(Number(e.target.value));
                                    setPage(1);
                                }}
                                name="pageLimit"
                                id="pageLimit"
                                value={showLimit}
                                className="px-2 py-1 outline-none border  border-gray-500 text-white bg-stone-500 rounded-md"
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
};

export default Home;
