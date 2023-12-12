const firstName = "Kirill";
const lastName = "Kirillov";
const patronymic = "Kirillovich";
const dateOfBirth = "2005-12-26";
const major = "IT";
const result1 = firstName + ' ' + '\n' + lastName + '\n' + patronymic + '\n' + dateOfBirth + '\n' + major;
const result2 = `${firstName} 
${lastName} 
${patronymic}
${dateOfBirth} 
${major}`;

console.log('1 способ')
console.log(result1)

console.log('2 способ')
console.log(result2)
