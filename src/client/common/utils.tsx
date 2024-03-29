import * as React from 'react';

import { LangContextStruct, LangContext } from '../infrastructure/root.tsx';

// Double break
export const Db: React.FunctionComponent = () => (<div><br style={{"display": "block", "margin": "10px 0"}} /></div>);

/*
 * Date utils
 */
const monthsNo : string[] = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september",
    "oktober", "november", "desember"];

const monthsEn : string[] = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];

// Copy-paste from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
function ordinal_suffix_of(i : number) : string {
    let j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export const printDateEn = function(date: Date) : string {
    return ordinal_suffix_of(date.getDate()) + " of " +  monthsEn[date.getMonth()] + " " + date.getFullYear();
}

export const printDateNo = function(date: Date) : string {
    return date.getDate() + ". " + monthsNo[date.getMonth()] + " " + date.getFullYear();
}

export const localizedDate = (date: Date)  => {
    const langStruct: LangContextStruct = React.useContext(LangContext);
    const langInd = Math.max(0, langStruct.langIndex);

    if (langInd == 0) {
        return (<>{printDateNo(date)}</>);
    } else {
        return (<>{printDateEn(date)}</>);
    }
};

export function getClampedLangIndex() {
    const langStruct: LangContextStruct = React.useContext(LangContext);
    const langInd = langStruct.langIndex < 0 ? 0 : langStruct.langIndex;
    return langInd;
}

export function localize<T>(st: T[]) {
    return st[getClampedLangIndex()];
};

export const useFetch = function<T>(url: string, defaultValue: T) : T {
    return useMutableFetch(url, defaultValue)[0];
};

export const useMutableFetch = function<T>(url: string, defaultValue: T) : [T, (t: T) => void] {
    const [data, setData] = React.useState(defaultValue);

    async function fetchData() {
        fetch(url).then((response) => {
            response.json().then(data => setData(data));
        });
    }

    React.useEffect(() => { fetchData(); }, [url]);
    
    return [data, setData];
};

export const isMobile = () => {
    return window.innerWidth < 500 || (window.innerWidth / window.innerHeight < 8.0 / 9.0);
};