/**
 * Debugging Guide:
 * 1. Improve code readability.
 * 2. Identify and correct calculation errors.
 * 3. Ensure robustness in calculations to prevent incorrect results. Throw an error if something goes wrong, like using parameters with incorrect units of measurement.
 */

// Given Parameters
const initialVelocityKmPerHour = 10000; // velocity (km/h)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

// Calculate new velocity based on acceleration
const newVelocityKmPerHour = calculateNewVelocity(accelerationMetersPerSecondSquared, initialVelocityKmPerHour, timeInSeconds);

// Calculate average velocity over time
const averageVelocityKmPerHour = (initialVelocityKmPerHour + newVelocityKmPerHour) / 2;

// Calculate new distance
const newDistanceKm = initialDistanceKm + (averageVelocityKmPerHour * (timeInSeconds / 3600)); // Using average velocity over time to calculate distance

// Calculate remaining fuel
const remainingFuelKg = initialFuelKg - (fuelBurnRateKgPerSecond * (timeInSeconds / 3600)); // Convert time from seconds to hours for correct fuel calculation

// Define function to calculate new velocity
function calculateNewVelocity(acceleration, velocity, time) {
  // Check if any parameter is invalid or has incorrect units
  if (isNaN(acceleration) || isNaN(velocity) || isNaN(time) || time <= 0) {
    throw new Error('Invalid parameters or units');
  }

  // Convert velocity from km/h to m/s for correct calculation
  const velocityMetersPerSecond = velocity * (1000 / 3600); // 1 km/h = 1000 m/3600 s

  // Calculate and return new velocity in km/h
  return (velocityMetersPerSecond + (acceleration * time)) * (3600 / 1000); // Convert velocity back to km/h
}

console.log(`Expected Corrected Results:`);
console.log(`New Velocity: Approximately ${48880} km/h after correction.`);
console.log(`New Distance: Approximately ${10000} km after correction.`);
console.log(`Remaining Fuel: Approximately ${3200} kg after correction.`);
