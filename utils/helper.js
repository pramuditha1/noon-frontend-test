import { toNumber, round} from "lodash";

export const formatNumberInThousands = (value) => {
    const abbreviatedNumber = toNumber(value)/1000;
    if (abbreviatedNumber >= 1 && abbreviatedNumber <= 999) {
        //format numbers between 1000 and 999,000
        return `${round(abbreviatedNumber, 1)}k`;
    } else if(abbreviatedNumber > 999) {
        //format numbers greater than 999,000
        return `${round(abbreviatedNumber/1000, 1)}M`;
    } else {
        return value?.toString();
    }
}