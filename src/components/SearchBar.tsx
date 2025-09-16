import { IoSearchOutline } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

import {
    useCurrentToken,
    type TUserData,
} from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { verifyToken } from "../utils/verifyToken";
import CreateClient from "./CreateClient";

const SearchBar = () => {
    const token = useAppSelector(useCurrentToken);

    let user: TUserData | null = null;
    if (token) {
        user = verifyToken(token) as TUserData;
    }

    return (
        <div className="flex flex-col gap-2 md:items-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex items-center gap-2 border border-stone-500 rounded-md px-3 py-2 w-full sm:max-w-[550px] bg-white/5 text-sm transition">
                    <IoSearchOutline className=" text-xl" />
                    <input
                        type="text"
                        placeholder="Search Client..."
                        className="w-full bg-transparent outline-none placeholder:text-stone-400"
                    />
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0 sm:justify-between w-full">
                    <Select>
                        <SelectTrigger className="w-[180px] border border-stone-500 bg-white/5">
                            <SelectValue
                                className="text-white"
                                placeholder="Select a fruit"
                            />
                        </SelectTrigger>
                        <SelectContent className="bg-white/10 backdrop-blur-xl text-white border-0">
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                    Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                    Pineapple
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    {(user?.role === "ADMIN" || user?.role === "STAFF") && (
                        <CreateClient />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
