//동기(순차적 처) 비동기(동시에 처리)

var fs = require('fs');

/*동기적으로 파일 읽기
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/
 //결과  : A B C

//비동기적으로 파일 읽기
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');

//결과 : A C B
