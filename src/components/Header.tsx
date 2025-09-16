import { CiLogout, CiUser } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import logo from "../../public/images/gtt.png";
import { useLogoutMutation } from "../redux/features/auth/authApi";
import {
    logoutUser,
    useCurrentToken,
    type TUserData,
} from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
    const [logoutApi] = useLogoutMutation();
    const dispatch = useAppDispatch();
    const token = useAppSelector(useCurrentToken);

    let user: TUserData | null = null;
    if (token) {
        user = verifyToken(token) as TUserData;
    }

    const handleLogout = async () => {
        dispatch(logoutUser());
        toast.success("Logout Successful");
        await logoutApi(null).unwrap();
    };

    return (
        <section className="max-width flex justify-between items-center">
            <Link to={"/"} className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="size-12 sm:size-16" />
                <h1 className="text-lg font-semibold">Grameen Travels</h1>
            </Link>
            <Popover>
                <PopoverTrigger>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="*:block text-right text-sm leading-4 hidden sm:block">
                            <span>{user?.fullName}</span>
                            <span>{user?.email}</span>
                        </div>
                        <div className="text-lg border p-1 rounded-full cursor-pointer">
                            <CiUser />
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="bg-stone-800/60 backdrop-blur-xl border-0 space-y-2 w-48 text-gray-300 mt-1"
                    align="end"
                >
                    <Link
                        to={"/reset-password"}
                        className="flex items-center gap-2 cursor-pointer hover:text-gray-200 duration-200 mx-2 hover:mx-4"
                    >
                        <FaGear /> <p>Edit Password</p>
                    </Link>
                    {user?.role === "ADMIN" && (
                        <Link
                            to={"/employees"}
                            className="flex items-center gap-2 cursor-pointer hover:text-gray-200 duration-200 mx-2 hover:mx-4"
                        >
                            <IoPersonSharp />
                            <p>Employees</p>
                        </Link>
                    )}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 cursor-pointer hover:text-red-400 duration-200 mx-2 hover:mx-4 w-full"
                    >
                        <CiLogout />
                        <span>Logout</span>
                    </button>
                </PopoverContent>
            </Popover>
        </section>
    );
};

export default Header;
