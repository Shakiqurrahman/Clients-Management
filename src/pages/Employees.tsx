import EmployeeCard from "../components/EmployeeCard";
import { employeeFields } from "../constants/AnalyticsCardData";

const Employees = () => {
    return (
        <div className="max-width">
            <div className="mt-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4">
                {employeeFields.map((employee, index) => (
                    <EmployeeCard key={index} employee={employee} />
                ))}
            </div>
        </div>
    );
};

export default Employees;
