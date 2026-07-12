var mathNum1 = +prompt("Enter   mid term Math  marks");                       
var mathNum2 = +prompt("Enter   of Half yearly math marks");
var mathNum3 =+prompt("Enter  of Final Exam math marks")
var mathadd = mathNum1 + mathNum2 + mathNum3;

var englishNum1 = +prompt("Enter value   mid term English  marks");
var englishNum2 = +prompt("Enter value  of Half yearly English marks");
var englishNum3 =+prompt("Enter value of Final Exam English marks")
var englishadd = englishNum1 + englishNum2 + englishNum3;


var scienceNum1 = +prompt("Enter value   mid term Science  marks");
var scienceNum2 = +prompt("Enter value  of Half yearly Science marks mult 2");
var scienceNum3 =+prompt("Enter value of Final Exam Science marks")
var scienceadd = scienceNum1 + scienceNum2 + scienceNum3;


var urduNum1 = +prompt("Enter value   mid term Urdu  marks");
var urduNum2 = +prompt("Enter value  of Half yearly Urdu marks");
var urduNum3 =+prompt("Enter value of Final Exam Urdu marks")
var urduadd = urduNum1 + urduNum2 + urduNum3;


var physicesNum1 = +prompt("Enter value  mid term Phyisces  marks");
var physicesNum2 = +prompt("Enter value  of Half yearly Physices marks");
var physicesNum3 =+prompt("Enter value of Final Exam Physices marks")
var physicesadd = physicesNum1 + physicesNum2 + physicesNum3;

document.write(
"<table border='1' cellpadding='10' cellspacing='0' text >" +

"<tr>" +
"<th>Subjects</th>" +
"<th>Mid term</th>" +
"<th>Half yearly</th>" +
"<th>Final Exam</th>" +
"<th>Total</th>" +
"</tr>" +

"<tr>" +
"<td>Math</td>" +
"<td>" + mathNum1 + "</td>" +
"<td>" + mathNum2 + "</td>" +
"<td>" + mathNum3 + "</td>" +
"<td>" + mathadd + "</td>" +
"</tr>" +

"<tr>" +
"<td>English</td>" +
"<td>" + englishNum1 + "</td>" +
"<td>" + englishNum2 + "</td>" +
"<td>" + englishNum3 + "</td>" +
"<td>" + englishadd + "</td>" +
"</tr>"+

"<tr>" +
"<td>Science</td>" +
"<td>" + scienceNum1 + "</td>" +
"<td>" + scienceNum2 + "</td>" +
"<td>" + scienceNum3 + "</td>" +
"<td>" + scienceadd + "</td>" +
"</tr>"+

"<tr>" +
"<td>Urdu</td>" +
"<td>" + urduNum1 + "</td>" +
"<td>" + urduNum2 + "</td>" +
"<td>" + urduNum3 + "</td>" +
"<td>" + urduadd + "</td>" +
"</tr>"+

"<tr>" +
"<td>Physices</td>" +
"<td>" + physicesNum1 + "</td>" +
"<td>" + physicesNum2 + "</td>" +
"<td>" + physicesNum3 + "</td>" +
"<td>" + physicesadd + "</td>" +
"</tr>" +

"</table>"
);