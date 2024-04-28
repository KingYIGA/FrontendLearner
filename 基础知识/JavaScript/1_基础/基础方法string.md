## String

```js
// at 根据下标返回对应的值

// indexOf or lastIndexOf 根据值返回对应的下标

// includes 根据值返回 true or false

// concat 链接字符串

// replace() 把第一个参数替换为第二个参数

// replaceAll() 把所有第一个参数替换为第二个参数

// slice()  方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

// split() 根据参数切割字符串转化为数组

// toLowerCase or toUpperCase 转化大小写 全大写或者全小写
```

```js
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```
