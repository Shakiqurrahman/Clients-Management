import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { z } from "zod";
import GlassCard from "../components/GlassCard";
import { useChangePasswordMutation } from "../redux/features/auth/authApi";

const ResetPassword = () => {
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const resetPasswordSchema = z
        .object({
            oldPassword: z
                .string()
                .min(6, "Old password must be at least 6 characters"),
            newPassword: z
                .string()
                .min(6, "New password must be at least 6 characters"),
            confirmPassword: z.string(),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        });

    type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordFormValues) => {
        try {
            await changePassword({
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            }).unwrap();
            toast.success("Password changed successfully");
            navigate("/");
        } catch (error) {
            console.error("Failed to change password:", error);
            toast.error("Failed to change password");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <GlassCard className="w-full md:w-[450px] m-4">
                <h1 className="text-2xl md:text-4xl text-center">
                    Reset Password
                </h1>
                <div className="bg-white/40 h-0.5 w-[100px] md:w-[120px] mt-3 mx-auto"></div>
                <form
                    className="space-y-2 mt-5 md:mt-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label htmlFor="username">
                            Enter Your Old Password:
                        </label>
                        <div className="relative">
                            <input
                                {...register("oldPassword")}
                                type={`${
                                    showOldPassword ? "text" : "password"
                                }`}
                                className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 outline-0"
                                placeholder="Enter your old password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowOldPassword(!showOldPassword)
                                }
                            >
                                {showOldPassword ? (
                                    <FaRegEyeSlash className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                ) : (
                                    <FaRegEye className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                )}
                            </button>
                        </div>
                        {errors.oldPassword && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.oldPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="username">
                            Enter your new Password:
                        </label>
                        <div className="relative">
                            <input
                                {...register("newPassword")}
                                type={`${
                                    showNewPassword ? "text" : "password"
                                }`}
                                className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 outline-0"
                                placeholder="Enter your new password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowNewPassword(!showNewPassword)
                                }
                            >
                                {showNewPassword ? (
                                    <FaRegEyeSlash className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                ) : (
                                    <FaRegEye className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                )}
                            </button>
                        </div>
                        {errors.newPassword && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.newPassword.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Your Password:</label>
                        <div className="relative">
                            <input
                                {...register("confirmPassword")}
                                type={`${
                                    showConfirmPassword ? "text" : "password"
                                }`}
                                className="mt-2 w-full px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 outline-0"
                                placeholder="Confirm Password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? (
                                    <FaRegEyeSlash className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                ) : (
                                    <FaRegEye className="absolute top-[22px] right-[20px] cursor-pointer text-gray-300" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-2 border border-white/20 bg-white/5 rounded-md hover:bg-white/10 transition w-full mt-4 cursor-pointer"
                    >
                        {isLoading ? "Changing..." : "Confirm Password"}
                    </button>
                </form>
                {/* <span className="mt-4 block text-center text-sm text-gray-300">
                    don't have Account,{" "}
                    <Link
                        to={"/sign-up"}
                        className="font-semibold text-gray-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </span> */}
            </GlassCard>
        </div>
    );
};

export default ResetPassword;
