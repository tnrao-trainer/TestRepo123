import { useEffect, useState } from "react";

 
function useFetch<T>(url: string): T | null {

    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const result:T = await response.json();
            console.log(result);
            setData(result);
        };

        fetchData();

    }, [])

    return data ;
}

export default useFetch;
