/*
- (\w+)\s(\w+)
  > \w 는 (A~Z, a~z, 0~9) 로 시작하는 문자
  > + 는 하나 이상의 문자
  > \s 는 공백(스페이스)

- str.replace(pattren, "$2 $1")
  > $1 는 pattern 에서 앞에 그룹 (\w+)
  > $2 는 pattern 에서 뒤에 그룹 (\w+)


- 정규 표현식 빌더
  > https://regexr.com
- 정규 표현식 시각화
  > https://regexper.com/
*/

var str = "coding everybody";

var pattren = /(\w+)\s(\w+)/;

var result = str.replace(pattren, "$2 $1")

console.log(result); // everybody coding