// Alexander Paryani
// 16 APR 2024
// Query Selector
// Targeting Page Elements

// Variables
const student = document.querySelector('#student');
const homeSchool = document.querySelector('#homeSchool');
const city = document.querySelector('#city');

// Background
document.body.style.backgroundColor = "lightblue";

// Student Styles
student.style.color = 'var(--darkGreen)'; // CSS variable
student.style.fontSize = '1.7rem';

// Home School Styles
homeSchool.style.fontSize = '1.2rem';
homeSchool.style.marginBottom = '30px';
homeSchool.style.fontFamily = 'Helvetica, sans-serif';
homeSchool.style.fontVariant = 'small-caps';
homeSchool.style.fontStyle = 'italic';

// City Styles
city.style.display = 'inline';
city.style.color = 'salmon';
city.style.padding = '10px';
city.style.border = '4px dotted orange';
