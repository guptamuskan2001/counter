import { useMemo, useState} from 'react';
import { SearchFilterProps } from './SearchFilter.types';
import useDebounceSearch from './SearchFilterhook';


export default function SearchFilter({ items }: SearchFilterProps) {

    const [inputValue, setInputValue] = useState<string>('');

    const debounceValue = useDebounceSearch(inputValue, 500);

    const results = useMemo(()=> {
        return items.filter(item => item.toLowerCase().includes(debounceValue.toLowerCase()))
    }, [items, debounceValue])

    return(
        <div>
            <input type = 'text' value = {inputValue} onChange={e => setInputValue(e.target.value) } placeholder='Search...'></input>
            <div>
                {results.map((item,index) => {
                    return <div key={index}>{item}</div>
                })}

            </div>

        </div>
    )

}