type IProps = {
    card: {
        title: string;
        value: string;
    };
};

const AnalyticsCard = ({ card }: IProps) => {
    return (
        <div className="flex-1 bg-purple-600 odd:bg-teal-600 p-5 rounded-lg shadow-2xl border border-gray-700">
            <p className="text-gray-200">{card.title}</p>
            <h2 className="text-xl font-semibold">{card.value}</h2>
        </div>
    );
};

export default AnalyticsCard;
