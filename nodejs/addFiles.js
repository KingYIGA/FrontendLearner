const fs = require("fs");

const filesList = [
  "表达式运算符",
  "数字和日期",
  "文本格式化",
  "正则表达式",
  "索引集合",
  "带键集合",
  "适用对象",
  "使用类",
  "使用Promise",
  "JavaScript 类型化数组",
  "迭代器和生成器",
  "元编程",
  "JavaScript模块",
];

filesList.forEach((fileName, i) => {
  const index = i + 5;
  const name = `${index < 10 ? "0" + index : index}_${fileName}`;
  fs.writeFile(`./${name}.md`, "", (err) => {
    console.log(err);
  });
});
