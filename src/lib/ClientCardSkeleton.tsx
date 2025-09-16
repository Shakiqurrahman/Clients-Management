const ClientCardSkeleton = () => {
    return (
        <div className="flex justify-center items-center py-2 relative">
            <div className="w-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative animate-pulse">
                <div className="space-y-3 mt-4">
                    <div className="h-[14.5px] w-3/4 bg-gray-600/40 rounded" />
                    <div className="h-[14.5px] w-2/3 bg-gray-600/40 rounded" />
                    <div className="h-[14.5px] w-1/2 bg-gray-600/40 rounded" />
                    <div className="h-[14.5px] w-5/6 bg-gray-600/40 rounded" />
                    {/* <div className="h-[14.5px] w-1/3 bg-gray-600/40 rounded" /> */}
                </div>
                <div className="absolute top-2.5 right-2.5">
                    <div className="h-5 w-20 rounded-xl bg-gray-600/40"></div>
                </div>
            </div>
        </div>
    );
};

export default ClientCardSkeleton;
