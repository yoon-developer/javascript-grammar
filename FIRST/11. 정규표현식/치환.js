
var content = 'Github : https://github.com/yoon-developer 입니다. Naver : https://naver.com 입니다. ';

var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;

var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);