import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetListProps } from "../Models/GetListGenericModel";
import '../pages/List.css';

const GetList = <T,>({ url, renderItem }: GetListProps<T>) => {
    const [items, setItems] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<T[]>(url)
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erro ao carregar dados!");
                setLoading(false);
            });

    }, [url]);

    if (loading) return <p> Carregando...</p>;
    if (error) return <p> {error}...</p>;

    return (
        <ul className="Lista-items">
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
};
export default GetList




