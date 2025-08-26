import { CiLogout, CiUser } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Header = () => {
    return (
        <section className="max-width flex justify-between items-center">
            <h1 className="text-lg font-semibold">Clients Management</h1>
            <Popover>
                <PopoverTrigger>
                    <div className="text-lg border p-1 rounded-full cursor-pointer">
                        <CiUser />
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
                    <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200 duration-200 mx-2 hover:mx-4">
                        <IoPersonSharp />
                        <p>Employees</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-red-400 duration-200 mx-2 hover:mx-4">
                        <CiLogout />
                        <p>Logout</p>
                    </div>
                </PopoverContent>
            </Popover>
        </section>
    );
};

export default Header;
