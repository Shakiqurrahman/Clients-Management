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

const SearchBar = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 md:items-center sm:justify-between">
            <div className="flex items-center gap-2 border border-stone-500 rounded-md px-3 py-2 w-full sm:w-[350px] bg-white/5 text-sm transition">
                <IoSearchOutline className=" text-xl" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent outline-none placeholder:text-stone-400"
                />
            </div>

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
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SearchBar;
