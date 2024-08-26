import { useSelector } from "react-redux";
import JobPosition from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/position-selectors";
import { useDispatch } from "react-redux";
import { addFilter } from "../store/filters/filters-actions";
import { selectFilters } from "../store/filters/filters-selectors";

const JobList = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) =>
        selectVisiblePositions(state, currentFilters)
    );

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };
    return (
        <div className="job-list">
            {positions.map((item) => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    );
};

export default JobList;
