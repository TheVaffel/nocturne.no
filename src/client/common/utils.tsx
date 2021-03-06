import * as React from 'react';

// Double break
export const Db: React.FunctionComponent = () => (<div><br style={{"display": "block", "margin": "10px 0"}} /></div>);


/*
 *Date utils
 */
const months : string[] = ["January", "February", "March", "April", "May", "June", "July", 
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

export const printDate = function(date: Date) : string {
    return ordinal_suffix_of(date.getDay()) + " of " +  months[date.getMonth()] + " " + date.getFullYear();
}