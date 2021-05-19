import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // console.log("useEffect ran");
        // console.log(blogs);
        // console.log(name)
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for the specified resource');
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                console.log(err.message);
                setError(err.message);
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;