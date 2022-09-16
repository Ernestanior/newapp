import {useLocation} from "react-router-dom";
import {useMemo} from "react";

const useCurrentUrl = () => {
    const location = useLocation();
    return useMemo(() => {
        return location.pathname;
    }, [location])
}

export default useCurrentUrl
