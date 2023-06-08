// Random Second less than 86400
var totalSeconds = Math.floor(Math.random() * 86400);

// Converting to hours, minutes, seconds
var hours = Math.floor(totalSeconds / 3600);
var remainingSeconds = totalSeconds % 3600;
var minutes = Math.floor(remainingSeconds / 60);
var seconds = remainingSeconds % 60;

// format them to HH:MM:SS
var formattedHours = hours;
var formattedMinutes = minutes;
var formattedSeconds = seconds;

if (hours < 10) {
    formattedHours = "0" + hours;
}

if (minutes < 10) {
    formattedMinutes = "0" + minutes;
}

if (seconds < 10) {
    formattedSeconds = "0" + seconds;
}

// Print Time Stamp
var timestamp = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
console.log(timestamp);

// Greetings

if (hours >= 5 && hours < 12) {
    console.log("Good Morning!");
} else if (hours >= 12 && hours <= 17) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}
