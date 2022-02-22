//readdir 함수 : 디렉토리에 있는 파일 목록 불러오기

var testFolder = './data'; //파일 목록을 읽어올 폴더
var fs = require('fs'); //file system 모듈 가져오기

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
