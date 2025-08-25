const GlassCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
    className,
    children,
}) => (
    <div
        className={`group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] ${
            className || ""
        }`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/10" />
        <div className="relative z-10 p-6 md:p-8">{children}</div>
    </div>
);

export default GlassCard;
