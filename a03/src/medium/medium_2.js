import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
        "city": mpg_data.reduce((acc, car) => acc + car.city_mpg, 0) / mpg_data.length,
        "highway": mpg_data.reduce((acc, car) => acc + car.highway_mpg, 0) / mpg_data.length
        },
    allYearStats: getStatistics(mpg_data.map(car => car.year)),
    ratioHybrids: calcRatio(mpg_data.filter(car => car.hybrid === true), mpg_data.filter(car => car.hybrid === false))
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: calcHybrids(),
    avgMpgByYearAndHybrid: calcYears()
};

// Helper functions
export function calcRatio (arr1, arr2) {
    return arr1.length/(arr1.length + arr2.length);
}

export function calcHybrids () {
    const hybridCars = mpg_data.filter(car => car.hybrid === true);
    const hybridMakes = hybridCars.reduce(function(arr, car) {
        if (!contains(arr, "make", car.make)) {
            arr.push( {
                make: car.make,
                hybrids: [car.id]
            });
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].make == car.make) {
                    arr[i].hybrids.push(car.id);
                }
            }
        }
        return arr;
    }, []);
    function compare(a, b) {
        if (a.hybrids.length > b.hybrids.length) return -1;
        if (a.hybrids.length < b.hybrids.length) return 1;
    }
    hybridMakes.sort(compare)
    return hybridMakes;
}

export function calcYears() {
    let years = [...new Set(mpg_data.map(car => car.year))].sort();
    let yearsObj = {};
    years.forEach(year => yearsObj[year] = {
        hybrid: {
            city: [],
            highway: []
        },
        notHybrid: {
            city: [],
            highway: []
        }
    });
    let returnObj = mpg_data.reduce(function(arr, car) {
        if (car.hybrid) {
            arr[car.year].hybrid.city.push(car.city_mpg);
            arr[car.year].hybrid.highway.push(car.highway_mpg);
        } else {
            arr[car.year].notHybrid.city.push(car.city_mpg);
            arr[car.year].notHybrid.highway.push(car.highway_mpg);
        }
        return arr;
    }, yearsObj);
    years.forEach(year => {
        returnObj[year].hybrid.city = returnObj[year].hybrid.city.reduce(function (sum, mpg) {
            return sum + mpg;
        }) / returnObj[year].hybrid.city.length;
        returnObj[year].hybrid.highway = returnObj[year].hybrid.highway.reduce(function (sum, mpg) {
            return sum + mpg;
        }) / returnObj[year].hybrid.highway.length;
        returnObj[year].notHybrid.city = returnObj[year].notHybrid.city.reduce(function (sum, mpg) {
            return sum + mpg;
        }) / returnObj[year].notHybrid.city.length;
        returnObj[year].notHybrid.highway = returnObj[year].notHybrid.highway.reduce(function (sum, mpg) {
            return sum + mpg;
        }) / returnObj[year].notHybrid.highway.length;
    });
    return returnObj;
}
export function contains(arr, key, element) {
    if (arr.length == 0) return false;
    var found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] == element) {
            found = true;
            break;
        }
    }
    return found;
}
console.log(calcYears())