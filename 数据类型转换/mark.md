### 一. 强制数据类型转换
* 转换成number
* 转换成string
* 转换成boolean


#### 1. 基础数据类型转换成Number的方式(ToNumber)
```js
Number()
//将内容转换成数字
//如果内容不可以转换成数字，返回NaN
//如果内容为空 返回0
parseInt()
// 内容转换成整数（去掉小数）
parseFloat()
// 将内容转换成小数


// 隐式转化：一元运算符（++，--）、二元运算符(+,-,*,/)、比较操作（>, <, <=, >=）、相等操作（== 或者 != ）
```

#### 2. 基础数据类型转换成Number的方式转换成string的方式(ToString)
```js
String()
//将要转换的内容放在String后的小括号中

```

#### 3.转换成Boolean
```js
Boolean()
// 1.false,0,NaN，Undefined -> false
// 2."" -> false
// 3.任何非空字符串都会被转换成true
```

#### 4.对象转字符串和数字 
* 对象在转number之前，会先转换为基础类型，再转换为number类型，这个过程称为ToPrimitive。
* toString()
* valueOf()
```js
一.如果是 ToPrimitive(obj, Number)，处理步骤如下：

1.如果 obj 为 基本类型，直接返回
2.否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
3.否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
4.否则，JavaScript 抛出一个类型错误异常。

二.如果是 ToPrimitive(obj, String)，处理步骤如下：

1.如果 obj为 基本类型，直接返回
2.否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
3.否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
4.否则，JavaScript 抛出一个类型错误异常。
对象转字符串
```



### 二. 隐式转换


```js
一. +运算隐式转换会将数字转换成字符串，其余运算会将字符串转换成数字


二. 当计算 value1 + value2
1.lprim = ToPrimitive(value1)
2.rprim = ToPrimitive(value2)
3.如果 lprim 是字符串或者 rprim 是字符串，那么返回 ToString(lprim) 和 ToString(rprim)的拼接结果
4.返回 ToNumber(lprim) 和 ToNumber(rprim)的运算结果


三. ===
// 在 == 运算中
如果x,y的类型相同, 按照x === y的结果返回. // ===运算符的规格定义, 这个有兴趣的自己看下.
如果x,y类型不同

2.1 如果x,y中一方是String, 另一方是Number, 将String类型的转成Number再比较
2.2 如果x,y中有一方是Boolean类型, 将Boolean转成Number后再比较 // Number(true) -> 1; Number(false) -> 0
2.3 如果x,y中有一方是Object类型, 另一方的类型是[String, Number, or Symbol]中的一个, 需要调用ToPrimitive()将Object转为基本类型后再比较.
```



