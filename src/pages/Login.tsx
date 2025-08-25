import { Link } from "react-router";
import GlassCard from "../components/GlassCard";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <GlassCard className="w-full md:w-[450px] m-4">
                <h1 className="text-2xl md:text-4xl text-center">Login</h1>
                <div className="bg-white/40 h-0.5 w-[100px] md:w-[120px] mt-3 mx-auto"></div>
                <form className="space-y-2 mt-5 md:mt-10">
                    <div>
                        <label htmlFor="username">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 outline-0"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 outline-0"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-2 border border-white/20 bg-white/5 rounded-md hover:bg-white/10 transition w-full mt-4 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                <span className="mt-4 block text-center text-sm text-gray-300">
                    don't have Account,{" "}
                    <Link
                        to={"/sign-up"}
                        className="font-semibold text-gray-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </span>
            </GlassCard>
        </div>
    );
};

export default Login;
