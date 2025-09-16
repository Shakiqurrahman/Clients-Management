import AnalyticsCard from "../components/AnalyticsCard";
import ClientCard from "../components/ClientCard";
import SearchBar from "../components/SearchBar";
import { analyticsCardData } from "../constants/AnalyticsCardData";
import ClientCardSkeleton from "../lib/ClientCardSkeleton";
import { useGetClientsQuery } from "../redux/features/client/clientApi";
import type { IClient } from "../types/clients";

const Home = () => {
    const { data: response, isLoading } = useGetClientsQuery(null);
    const { data: clients, meta } = response || {};
    console.log(meta);

    return (
        <section className="max-width">
            <h1 className="text-xl font-semibold">Analytics</h1>
            <div className="mt-4 flex flex-wrap gap-4">
                {analyticsCardData.map((card, index) => (
                    <AnalyticsCard key={index} card={card} />
                ))}
            </div>
            <div className="mt-10">
                <SearchBar />
            </div>

            <div className="mt-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
                {isLoading ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <ClientCardSkeleton key={index} />
                    ))
                ) : clients?.length === 0 ? (
                    <p>No client data found!</p>
                ) : (
                    clients?.map((client: IClient, index: number) => (
                        <ClientCard key={index} client={client} />
                    ))
                )}
            </div>
        </section>
    );
};

export default Home;
