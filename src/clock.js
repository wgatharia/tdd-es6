
export const calculateDegrees = (string) =>{
    let result = {}

    if(string === '')
        return result

    let time = string.split(':');
    
    return {
        hour: 0.5 * ( 60 * Number.parseInt(time[0] % 12) + Number.parseInt(time[1])),
        min: Number.parseInt(time[1]) * 6
    }

}