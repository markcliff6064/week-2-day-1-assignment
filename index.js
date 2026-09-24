
// TASK 1: FIVE CLASSIC FUNCTIONS

// 1. FizzBuzz

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");

        } else if (i % 5 === 0) {
            result.push("Buzz");

        } else { result.push(i); }
    } return result.join(", ");
}
// 2. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
}


// 3. Is Palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}


// 4. Find Largest Number
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}


// 5. Count Vowels
function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}



// TASK 1 TESTS


console.log("== TASK 1 ==");

console.log(
    "fizzBuzz(15):",
    fizzBuzz(15)
);

console.log(
    'fizzBuzz(6):',
    fizzBuzz(6)
);

console.log(
    'reverseString("nairobi"):',
    reverseString("nairobi")
);

console.log(
    'reverseString("Kenya"):',
    reverseString("Kenya")
);

console.log(
    'isPalindrome("Racecar"):',
    isPalindrome("Racecar")
);

console.log(
    'isPalindrome("hello"):',
    isPalindrome("hello")
);

console.log(
    "findLargest([10, 45, 2, 67, 23]):",
    findLargest([10, 45, 2, 67, 23])
);

console.log(
    "findLargest([100, 25, 78, 12]):",
    findLargest([100, 25, 78, 12])
);

console.log(
    'countVowels("JavaScript"):',
    countVowels("JavaScript")
);

console.log(
    'countVowels("Nairobi"):',
    countVowels("Nairobi")
);



// TASK 2: KENYAN COUNTY OBJECT


const county1 = {
    name: "Nairobi",
    capital: "Nairobi City",
    population: 4397073,
    area: 696,
    borders: ["Kiambu", "Machakos", "Kajiado"]
};


const county2 = {
    name: "Mombasa",
    capital: "Mombasa City",
    population: 1208333,
    area: 212,
    borders: ["Kilifi", "Kwale"]
};


// Format population with commas
function formatPopulation(num) {
    return num.toLocaleString();
}


// Display county information
function displayCounty(county) {
    return `${county.name} County | Capital: ${county.capital} | Population: ${formatPopulation(county.population)} | Area: ${county.area} km²`;
}


// Display county borders
function bordersString(county) {
    const borders = county.borders;

    if (borders.length === 1) {
        return `${county.name} borders ${borders[0]}`;
    }

    if (borders.length === 2) {
        return `${county.name} borders ${borders[0]} and ${borders[1]}`;
    }

    const firstBorders = borders.slice(0, -1).join(", ");
    const lastBorder = borders[borders.length - 1];

    return `${county.name} borders ${firstBorders}, and ${lastBorder}`;
}


// TASK 2 TESTS


console.log("\n== TASK 2 ==");

console.log(displayCounty(county1));
console.log(bordersString(county1));

console.log();

console.log(displayCounty(county2));
console.log(bordersString(county2));

console.log();

console.log("Population:", formatPopulation(county1.population));
console.log("Population:", formatPopulation(county2.population));




// TASK 3: MATATU ROUTE SYSTEM


const routes = [
    {
        name: "Route 11 - Eastleigh",
        fare: 50,
        stops: ["CBD", "Pangani", "Eastleigh", "Mathare"]
    },

    {
        name: "Route 23 - Langata",
        fare: 80,
        stops: ["CBD", "Uhuru Gardens", "Langata", "Karen"]
    },

    {
        name: "Route 33 - Rongai",
        fare: 100,
        stops: ["CBD", "Langata", "Ongata Rongai", "Rimpa"]
    },

    {
        name: "Route 34 - South B",
        fare: 40,
        stops: ["CBD", "South B", "South C", "Nairobi West"]
    },

    {
        name: "Route 44 - Buruburu",
        fare: 50,
        stops: ["CBD", "Jogoo Road", "Hamza", "Buruburu"]
    },

    {
        name: "Route 46 - Donholm",
        fare: 60,
        stops: ["CBD", "Jogoo Road", "Donholm", "Kayole"]
    },

    {
        name: "Route 58 - Kikuyu",
        fare: 120,
        stops: ["CBD", "Westlands", "Kinoo", "Kikuyu"]
    },

    {
        name: "Route 100 - Githurai",
        fare: 70,
        stops: ["CBD", "Thika Road", "Roysambu", "Githurai"]
    },

    {
        name: "Route 125 - Thika",
        fare: 200,
        stops: ["CBD", "Thika Road", "Ruiru", "Juja", "Thika"]
    },

    {
        name: "Route 14 - Westlands",
        fare: 30,
        stops: ["CBD", "University Way", "Museum Hill", "Westlands"]
    }
];


// 1. Find cheapest route
function cheapestRoute(routes) {
    const cheapest = routes.reduce((min, route) => {
        return route.fare < min.fare ? route : min;
    });

    return `Cheapest: ${cheapest.name} at KES ${cheapest.fare}`;
}


// 2. Find routes through a specific stop
function routesThroughStop(routes, stop) {
    return routes.filter(route => route.stops.includes(stop));
}


// 3. Calculate journey fare
function journeyFare(routes, routeNames) {
    let total = 0;

    for (let routeName of routeNames) {
        const route = routes.find(route => route.name === routeName);

        if (route) {
            total += route.fare;
        }
    }

    return total;
}



// TASK 3 TESTS


console.log("\n== TASK 3 ==");

console.log(cheapestRoute(routes));


const westlandsRoutes = routesThroughStop(routes, "Westlands");

console.log(
    "Routes through Westlands:",
    westlandsRoutes.map(route => route.name).join(", ")
);


const totalFare = journeyFare(
    routes,
    ["Route 14 - Westlands", "Route 58 - Kikuyu"]
);

console.log(
    "Journey fare (Westlands → Kikuyu): KES",
    totalFare
);




// BONUS: NUMBER TO WORDS


const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];


function numberToWordsBelow1000(num) {

    if (num < 10) {
        return ones[num];
    }

    if (num < 20) {
        return teens[num - 10];
    }

    if (num < 100) {
        const ten = Math.floor(num / 10);
        const remainder = num % 10;

        if (remainder === 0) {
            return tens[ten];
        }

        return `${tens[ten]}-${ones[remainder]}`;
    }

    const hundred = Math.floor(num / 100);
    const remainder = num % 100;

    if (remainder === 0) {
        return `${ones[hundred]} hundred`;
    }

    return `${ones[hundred]} hundred and ${numberToWordsBelow1000(remainder)}`;
}


function numberToWords(amount) {

    if (amount === 0) {
        return "zero shillings";
    }

    if (amount < 0 || amount > 9999999) {
        return "Amount out of range";
    }

    let result = "";

    const millions = Math.floor(amount / 1000000);
    const remainderAfterMillion = amount % 1000000;

    const thousands = Math.floor(remainderAfterMillion / 1000);
    const remainder = remainderAfterMillion % 1000;


    if (millions > 0) {
        result += `${numberToWordsBelow1000(millions)} million`;
    }


    if (thousands > 0) {

        if (result !== "") {
            result += " ";
        }

        result += `${numberToWordsBelow1000(thousands)} thousand`;
    }


    if (remainder > 0) {

        if (result !== "") {
            result += " ";
        }

        result += numberToWordsBelow1000(remainder);
    }


    return `${result} shillings`;
}


// BONUS TESTS


console.log("\n== BONUS ==");

console.log("1500:", numberToWords(1500));
console.log("250:", numberToWords(250));
console.log("42:", numberToWords(42));
console.log("1000000:", numberToWords(1000000));

