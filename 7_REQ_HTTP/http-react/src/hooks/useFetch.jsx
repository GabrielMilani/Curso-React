import { useState, useEffect } from "react";
import Message from './../../../../3_AVANVANDO_EM_REACT/desafio-3-app/src/components/Message';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [itemId, setItemId] = useState("");

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.log(error.Message)
                setError("Houve um erro ao carregar os dados!")
            }
            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {

            let json;
            if (method === "POST") {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions);
                json = await res.json();
            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config);
                json = await res.json();
            }
            setCallFetch(json);
        };
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
}
export default useFetch;