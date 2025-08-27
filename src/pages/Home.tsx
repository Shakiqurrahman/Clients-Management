import AnalyticsCard from "../components/AnalyticsCard";
import ClientCard from "../components/ClientCard";
import SearchBar from "../components/SearchBar";
import {
    analyticsCardData,
    clientFields,
} from "../constants/AnalyticsCardData";

const Home = () => {
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
                {clientFields.map((client, index) => (
                    <ClientCard key={index} client={client} />
                ))}
            </div>
        </section>
    );
};

export default Home;
