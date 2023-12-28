import { useState } from 'react';

export default useAPI = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        if (!response.ok) return setError(true);

        setError(false);
        console.log(response.data)
        setData(response.data);
    }

    return { data, error, loading, setData, request }
}