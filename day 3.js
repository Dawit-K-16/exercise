// 1. Declare variables and check types
let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); 
console.log(typeof lastName); 
console.log(typeof country);
console.log(typeof city);
console.log(typeof age); 
console.log(typeof isMarried); 
console.log(typeof year); 
console.log('\n');
// 2. Check if type of '10' is equal to 10
console.log('10' == 10);
console.log('10' === 10);
console.log('\n');
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log('\n');
// 4. Boolean value is either true or false
// i. Truthy values
console.log(Boolean(1));
console.log(Boolean('non-empty string'));
console.log(Boolean([]));
console.log('\n');
// ii. Falsy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log('\n');
// 5. Comparison results (predict and confirm)
console.log(4 > 3);  
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);  
console.log(4 === 4);    
console.log(4 != 4);      
console.log(4 !== 4);     
console.log(4 != '4'); 
console.log(4 == '4'); 
console.log(4 === '4');
console.log('\n');
// xii. Length comparison
let python = 'python';
let jargon = 'jargon';
console.log(python.length == jargon.length);
console.log('\n');
// 6. Logical operations
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12); 
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4')); 
console.log(!('dragon'.includes('on') && 'python'.includes('on')));
console.log('\n');
// 7. Date object tasks
const now = new Date();

console.log(now.getFullYear());     
console.log(now.getMonth() + 1);    
console.log(now.getDate());         
console.log(now.getDay());          
console.log(now.getHours());        
console.log(now.getMinutes());      
console.log(Math.floor(Date.now() / 1000)); 
