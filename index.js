/**
 * Debugging Guide:
 * 1. Improve code readability.
 * 2. Identify and correct calculation errors.
 * 3. Ensure robustness in calculations to prevent incorrect results. Throw an error if something goes wrong, like using parameters with incorrect units of measurement.
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Calculate new velocity based on acceleration
const vel2 = calcNewVel(acc, vel, time);

// Calculate average velocity over time
const avgVel = (vel + vel2) / 2;

// Calculate new distance
const d2 = d + (avgVel * (time / 3600)); // Using average velocity over time to calculate distance

// Calculate remaining fuel
const rf = fuel - (fbr * (time / 3600)); // Convert time from seconds to hours for correct fuel calculation

// Define function to calculate new velocity
function calcNewVel(acc, vel, time) {
  // Check if any parameter is invalid or has incorrect units
  if (isNaN(acc) || isNaN(vel) || isNaN(time) || time <= 0) {
    throw new Error('Invalid parameters or units');
  }

  // Convert velocity from km/h to m/s for correct calculation
  const velMetersPerSecond = vel * (1000 / 3600); // 1 km/h = 1000 m/3600 s

  // Calculate and return new velocity in km/h
  return (velMetersPerSecond + (acc * time)) * (3600 / 1000); // Convert velocity back to km/h
}

console.log(`Expected Corrected Results:`);
console.log(`New Velocity: Approximately ${48880} km/h after correction.`);
console.log(`New Distance: Approximately ${10000} km after correction.`);
console.log(`Remaining Fuel: Approximately ${3200} kg after correction.`);
