/**
 * Application Test 1
 * Dados dos parametros de entrada
 * parametro 1: Latitud
 * parametro 2: Longitud
 * Recuperar el pronóstico de clima de dicha locación por las siguientes seis horas mostrando el resultado por
 * hora
 * Como referencia, se pueden usar los API de https://openweathermap.org/ o algún otro que otorgue
 * dicha información.
 * En caso de presentarse alguna excepción que impida mostrar la información, deberá mostrarse un mensaje de
 * error lo más descriptivo posible (Service not found, Timeout, etc)
 */

export async function getWeather(lat: string, lon: string) {
    const url = 'api.openweathermap.org/data/2.5/onecall';
    const APIkey = 'a6e1913957562629b354df6526b26ef7';
    const response = await fetch(`${url}?lat=${lat}}&lon=${lon}&appid=${APIkey}&lang=es&units=metric&exclude=current,minutely,daily`);
    return response.json()
}
/**
 * Application Test 2
 * Dados dos parámetros de entrada
 * parametro 1: fecha inicio
 * parametro 2: fecha fin
 * El programa debe regresar la cantidad de dias en el que el dia “Domingo” es el último día del mes en ese lapso.
 * La salida debe ser el número de días
 */
export function countDaysAreSunday(dateStart: Date, dateEnd: Date) {
    let day = dateStart;
    let countSunday = 0;
    while (dateEnd.getTime() >= day.getTime()) {
        if (day.getDay() === 0) countSunday++;
        day.setDate(day.getDate() + 1);
    }
    return countSunday;
}


/**
 * Application Test 3
 * Dados dos parámetros de entrada
 * parametro 1: año inicio
 * parametro 2: ano fin
 * El programa debe regresar un arreglo con los años que fueron bisiestos
 * La salida debe ser una cadena
 * con los años separados por el caracter “@”
 */
/**
 * 
 * @param yearStart 
 * @param yearEnd 
 * @returns string
 */
export function getLeapYearsByRange(yearStart: number, yearEnd: number): string {
    let listOfLeapYears = []
    for (let year = yearStart; year <= yearEnd; year++) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) listOfLeapYears.push(year)
    }
    return listOfLeapYears.join("@");
}

/**
 * Application test 4
 * Dados los parámetros de entrada:
 * n (int) = tamaño de la matriz(nxn)
 * rotaciones[int] = un arreglo que contenga una sucesión de rotaciones representadas por números, los
 * números positivos son rotaciones a la derecha y los números negativos son rotaciones a la izquierda (0
 * representa ningún movimiento).
 * coordenada [x, y] = La coordenada del número de la salida.
 * Se genera una matriz “n”x”n” y se llena con números comenzando por el 1 en la celda 0,0 y aumentando en 1
 * consecuentemente en cada celda de la matriz, aplicar las rotaciones necesarias y posterior a la rotaciones a la
 * matriz y dada la coordenada[x,y] se tiene que regresar el número de esa celda.
 * La salida será el número contenido en la coordenada indicada.
 */

/**
 * Application test 5
 * Dado los parámetros de entrada:
 * s (String) = Un texto de n caracteres (Lorem ipmsum...)
 * Obtener el número de veces que se repite cada letra de la cadena
 * La salida será una lista indicando el carácter con el número de veces encontrada en la cadena (a = 15, b = 6, c...)
 */
/**
 * 
 * @param cad 
 * @returns Object
 */
export function countTimesLetterRepeats(cad: string): Object {
    let arrCount: any = {}
    let arr = cad.toLowerCase().replace(/\s/g, '').split('');
    arr.forEach((letter: string) => arrCount[letter] = arr.filter(lett => lett === letter).length)
    return arrCount;
}

/**
 * Application test 6 (Opcional, Bonus)
 * Si se inicia en la esquina superior izquierda de un grid de 2x2, y las únicos posibles movimientos son
 * “derecha” y “abajo”. Existen exactamente 6 rutas para llegar a la esquina inferior derecha, ejemplo:
 * Dado los parámetros de entrada:
 * n(int) = tamaño del grid (nxn)
 * El programa deberá regresar el número de rutas posibles para el grid de tamaño n.
 */
/**
 * 
 * @param num 
 * @returns number
 */
export function countWays(num: number): number {
    return factorial(num + num) / (factorial(num) * factorial(num));
}
/**
 * 
 * @param num 
 * @returns number
 */
export function factorial(num: number): number {
    num = Math.trunc(num);
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}