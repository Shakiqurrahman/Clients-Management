import AnalyticsCard from "../components/AnalyticsCard";
import { analyticsCardData } from "../constants/AnalyticsCardData";

const Home = () => {
  return (
    <section className="max-width">
      <h1 className="text-xl font-semibold">Analytics</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {analyticsCardData.map((card, index) => (
          <AnalyticsCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Home;
