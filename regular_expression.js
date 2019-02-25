var web_development = "python php hp ruby javascript jsonp perhapsphpisoutdated";
// 匹配规则，找出字符串中含有p，但是不含有ph的单词
// 创建字面量正则表达式
// .匹配除\n之外的任何一个字符
// 匹配不包含特定字符串的正则表达式非常抽象
// 负向前瞻正则表达式 https://www.cnblogs.com/chris-oil/p/6507314.html

var res=web_development.match(/\b(?!\S*ph)^\S*p[^h\s]*\b/ig)

len=res.length
console.log("获得"+len+"个匹配结果")
console.log(res)