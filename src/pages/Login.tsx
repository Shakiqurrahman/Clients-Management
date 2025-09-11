import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { z } from "zod";
import GlassCard from "../components/GlassCard";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setToken, useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getErrorMessage } from "../utils/errorHandler";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
    const token = useAppSelector(useCurrentToken);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setError(null);
        try {
            const result = await login(data).unwrap();
            const token = result?.data?.accessToken;
            dispatch(setToken(token));
            toast.success("Login successfully!");
            navigate("/");
        } catch (error) {
            setError(getErrorMessage(error));
        } finally {
            reset();
        }
    };

    if (token) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <GlassCard className="w-full md:w-[450px] m-4">
                <h1 className="text-2xl md:text-4xl text-center">Login</h1>
                <div className="bg-white/40 h-0.5 w-[100px] md:w-[120px] mt-3 mx-auto"></div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-2 mt-5 md:mt-10"
                >
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 outline-0"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 outline-0"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-10 py-2 border border-white/20 bg-white/5 rounded-md hover:bg-white/10 transition w-full mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                    {error && (
                        <p className="text-red-400 text-sm mt-1 text-center">
                            {error}
                        </p>
                    )}
                </form>
            </GlassCard>
        </div>
    );
};

export default Login;
