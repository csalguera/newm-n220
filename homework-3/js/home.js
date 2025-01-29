// variables
/*
 * radius is declared as let (reassignable)
 * the radius of a circle varies from circle to circle
 */
let radius = 5;

// constants
/*
 * pi, area, and perimeter are declared as constants
 * the reason being that they never change
 * pi is always equal to 3.14...
 * the formulas of a circle will never change
*/
const pi = Math.PI;
export const area = calc_area_circle(pi, radius)
export const perimeter = calc_perim_circle(pi, radius)
const location = window.location.href

// functions
/*
 * function accepts two arguments
 * parameters x and y
 * y is squared prior to being multiplied to x
 * the area is returned
 */
function calc_area_circle(x, y) {
  return x * (y ** 2)
}

/*
 * function accepts two arguments
 * parameters x and y
 * 2 is multipled by x and y
 * the perimeter is returned
 */
function calc_perim_circle(x, y) {
  return 2 * x * y
}

// conditionals
if (!location.includes("/store.html") || !location.includes("/login.html")) {
  console.log(`The perimeter of the specified circle is: ${perimeter}`);
  console.log(`The area of the specified circle is: ${area}`);
}