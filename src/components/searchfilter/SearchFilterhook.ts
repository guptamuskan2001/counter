import {useState,useEffect} from "react";

export default function useDebounceSearch(value: string, delay: number){

    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() =>{
        const id = setTimeout(()=> setDebouncedValue(value), delay);
        return () => clearTimeout(id);
    }, [value, delay])

    return debouncedValue;

}
