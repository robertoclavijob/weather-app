import { DayEnum } from "../enums/day.enum";

export function dayNumberToDay(dayNumber: number): DayEnum{
    let result;
    switch (dayNumber){
        case 0:{
            result = DayEnum.MONDAY;
            break;
        }
        case 1:{
            result = DayEnum.TUESDAY;
            break;
        }
        case 2:{
            result = DayEnum.WEDNESDAY;
            break;
        }
        case 3:{
            result = DayEnum.THURSDAY;
            break;
        }
        case 4:{
            result = DayEnum.FRIDAY;
            break;
        }
        case 5:{
            result = DayEnum.SATURDAY;
            break;
        }
        case 6:{
            result = DayEnum.SUNDAY;
            break;
        }
        default:{
            result = DayEnum.SUNDAY;
        }
        
    }
    return result;
}
