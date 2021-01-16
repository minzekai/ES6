// let a=10;
// window.onload=function () {
//     console.log("a"+a);
// }
// var a1=10;
// {
//     var a2=110;
//     let a3=120;
// }
// console.log(a1);
// console.log(a2);
// console.log(a3);

// ({test}={test:'helloworld'});
// console.log(test);

// const a='test';
// a='test1'
// var a='admin';
// a='admin1'
// console.log(a);

// for(let i=0;i<10;i++){
//     console.log("let类型"+i);
// }
// console.log("let类型"+i);

// for(var j=0;j<10;j++){
//     console.log("var类型"+j);
// }
// console.log("var类型"+j);

// let [a,b,c,d]=[1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// let a;
// ({a}={a:"sadas"});
// let [a,b="ss"]=["ab",null];
// console.log(a+b);

// let arr1=["a","b","c"];
// let arr2=arr1;
// console.log("赋值前"+arr2);
// arr1.push("zxc");
// console.log("赋值后"+arr2);
// console.log(arr1);

// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(1,5,8);
// function taiji(first,...arg){
//     //console.log(arg.length);
//     for(let s of arg){
//     console.log(s);
//     }
// }
// taiji(1,5,8);

// function taiji(first,two,...arg){
//     //console.log(arg.length);
//     for(let s of arg){
//     console.log(s);
//     }
// }
// taiji(1,5,8,5,10);

// let a=['this','is','a','web'];
// let b=a;
// let b=[...a];
// console.log("对b进行修改前a-->"+a);
// console.log("对b进行修改前b-->"+b);
// b.push('hello world');
// console.log("对b进行修改后a-->"+a);
// console.log("对b进行修改后b-->"+b);

// let a="hello world";
// let b="hello"+a+"world";
// document.write(b);
// let a="hello world";
// let b=`<b>hello</b>${a}world`;
// document.write(b);

// let a=1;
// let b=2;
// let a='hello';
// let b='world';
// let result=`${a+b}`
// document.write(result);

// let a="hello world";
// let b="hello"+a+"world";
// document.write(b.indexOf(a));
// document.write(b.includes(a));
// document.write('</br>');
// document.write(b.indexOf('x'));
// document.write(b.includes('x'));
// let a="hello world";
// let b="hello"+a+"world";
// document.write(b);
// document.write('*'.repeat(3));

// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('aa'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));
// console.log(isNaN(a));
// console.log(isNaN(undefined));
// console.log(isNaN(NaN));
// console.log(isNaN('a'));
// console.log(isNaN(100+'2'));
// console.log("#####################");
// console.log(Number.isNaN(100+'2'));
// console.log(Number.isFinite(100+'2'));
// let a=123.3;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));
// let a=Math.pow(2,53);
// console.log(a);
// console.log(Number.isSafeInteger(a));
// console.log(Number.isSafeInteger(a-1));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// let json={
//     '0':'x',
//     '1':'z',
//     '2':'b',
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr);

// let arr=Array.of(1,5,6,9);
// console.log(arr);

// find(参数：1.值 2.索引 3.数组)
// value:表示当前查找的值
// index:表示当前查找的数组索引
// arr:表示当前数组
// console.log([1,5,9,1,6,7].find((v)=>v>3));
// let a=['a','s','s','d'];
// var arr=a.find((value,index,a)=>{
//     return index >2;
// });
// var arr=a.find((value,index,a)=>index>1);
// console.log(arr);
// console.log(a.findIndex((value)=>value==='a'));

// let a=['a','s','s','d'];
// a.fill("hello",2,3);
// console.log(a);

// let arrs=[1,2,3,4,5,7,2,5,4,3,9,1];
// console.log(arrs.filter((value,index,arr)=>arr.indexOf(value)===index));

// let arrs=[1,2,3,4,5,7,2,5,4,3,9,1];
// for(var item of arrs){
//     console.log(item);
// }
// for(let [a,b] of arrs.entries()){
//     console.log(a+"-->"+b)
// }
// for(var item of arrs.keys()){
//     console.log(item+"-->"+arrs[item]);
// }

// let arrs=[1,2,3,4,5,7,2,5,4,3,9,1];
// let arrs=['a','b'];
// let a=arrs.entries();
// console.log(a);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);

// function add(a,b=1,c=2){
    // 'use strict'
// return a+b+c;
// }
// console.log(add(5))
// console.log(add.length);

// var add=(a,b=1,c=2) => a+b+c;
// console.log(add(5))

// var add=(a,b=1,c=2)=>{
//     console.log("箭头函数测试");
//     return a+b+c;
// }
// console.log(add(5));

// let o={
//     a:'xx',
//     b:'cc',
//     c:undefined
// }
// console.log('c' in o);
// function test({a,b,c='abc'}) {
//     console.log(a+b+c);
// }
// function test({a,x,c='abc'}) {
//     console.log(a+x+c);
// }
// test(o);

// let arr=['test','admin','hello'];
// function test(a,b,c,d) {
//     console.log(a+b+c+d);
// }
// test(...arr);

// let arr=[,,,];
// console.log(arr.length);
// console.log(arr[0]);
// let arr=['a','b','c'];
// console.log(0 in arr);

// let arr=['a','b','c'];
// arr.forEach((val,index)=>console.log(index+":"+val))
// arr.some((x)=>console.log(x));
// let arr=[1,5,6];
// arr.some((k)=>console.log(k>2));
// let arr=['a','b','c'];
// arr.forEach(function(val,index){
//     return console.log(index+":"+val);  
// });
// let arr=['a','b','c'];
// arr.filter(x=>console.log(x));

// let name="admin";
// let skill="study";
// var obj={name,skill};
// console.log(obj);
// let skill="study";
// var obj={
//     [skill]:'study2'
// }
// console.log(obj);

// let obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(5,6));

// let obj1={name:"admin"};
// let obj2={name:"admin"};
// console.log(obj1===obj2);
// console.log(obj1.name===obj2.name);
// console.log(obj1==obj2);
// console.log(Object.is(obj1,obj2))
// console.log(Object.is(obj1.name,obj2.name))

// let a=+0;
// let b=-0;
// console.log(Object.is(a,b));
// console.log(Object.is(NaN,NaN));

// let a={a:'a'};
// let b={b:'B'};
// let c={c:'c'};
// let d=Object.assign(a,b,c);
// console.log(d);

// let s=Symbol();
// console.log(typeof(s));
// let s1=Symbol('admin');
// console.log(s1);
// console.log(s1.toString());

// let s=Symbol();
// let obj={
//     [s]:'admin2'
// }
// console.log(obj[s]);
// obj[s]='admin3';
// console.log(obj[s]);

// let student={name:'admin',age:'12',gender:'man'};
// for(let a in student){
//     console.log(a+"->"+student[a]);
// }
// let heig=Symbol();
// student[heig]=150;
// console.log(student);
// for(let a in student){
//     console.log(student[a]);
// }
// console.log('###########')
// console.log(student[heig]);
// console.log('###########')

// let arr=new Set(['admin','12','man','150']);
// let arr2=new Set(['admin','12','man','150','admin']);
// console.log(arr);
// arr.add('hello world');
// console.log(arr);
// arr.delete('admin');
// console.log(arr);
// arr.clear;
// console.log("全部删除"+arr);
// console.log(arr2);
// console.log(arr2.has('man'));
// console.log(arr2.has('hello world'));
// for(let item of arr2){
//     console.log(item)
// }
// arr2.forEach((value)=>console.log(value));

// let weakSet=new WeakSet();
// let arr={name:'admin',age:'12',gender:'man',heig:'150'};
// weakSet.add(arr);
// console.log(weakSet);

// const a=new Set();
// [1,2,3,4,5,9,8,3,4,2].forEach(value=>a.add(value));
// console.log("a",a);
// console.log("####################")
// for(let item of a){
// console.log(item);
// }

// let json={
//     name:'admin',
//     skill:'java'
// }
// console.log(json.skill);

// let map=new Map();
// map.set('amdin',json);
// map.set(json,'amdin');
// console.log(map);
// console.log('###############')
// console.log(map.get('admin'))
// console.log('###############')
// console.log(map.get(json))

// let weakSet=new WeakSet();
// let obj={
//     name:'admin',
//     skill:'study'
// }
// let obj1=obj;
// let obj1={
//     name:'admin',
//     skill:'study'
// }
// weakSet.add(obj);
// weakSet.add(obj1);
// console.log(weakSet);

// let obj={
//     name:'admin',
//     add:function(vel){
//         return vel+120; 
//     }
// }
// console.log(obj.name);
// console.log(obj.add(100));

// const employee={
//     firstName:'admin',
//     lastName:'test'
// };
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.fullName);

// let handler={
//     get:function(target,fieldName){
//         if(fieldName ==='fullName'){
//             return `${target.firstName} ${target.lastName}`;
//         }
//         return fieldName in target? target[fieldName]:
//         `No such property as, '${fieldName}'|`
//     }
// };
// let p=new Proxy(employee,handler);
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.org);
// console.log(p.fullName);

// const validator={
//     set:function(obj,prop,value){
//         // if(prop==='age'){
//         //     if(!Number.isInteger(value)){
//         //         throw new TypeError('this is a error');
//         //     }
//         //     if(value<0){
//         //         throw new TypeError('value < 0'); 
//         //     }
//         // }
//         if(prop==='firstName'){
//             console.log('asasdf');
//             console.log(obj.firstName);
//         }
//     }
// };
// let pr=new Proxy(employee,validator);
// pr.firstName='first';

// var pro = new Proxy({
//     add:function(val){
//         return val+100
//     },
//     name:'this is add meth',
// }, {
//     // get
//     get: function (target, key, property) {
//         console.log('come in Get');
//         return target[key];
//     },
// // });
// // console.log(pro.name);
// //    set
//     set: function (target, key, value, recriver) {
//         console.log(` setting ${key} = ${value}`);
//         console.log(target);
//         return target[key] = value + '222';
//     }
// //
// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name = '梁娟'
// console.log(pro.name);

// apply的使用
// let target = function (val) {
//     console.log('apply test');
//     return val += 100
// }
// let handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target, handler);
// console.log(pro(12));

// let state = 1;
// function step1(resolve,reject){
//   console.log('1.开始-洗菜做饭');
//   if(state==1){
//     resolve('洗菜做饭')
//   }else{
//     reject('洗菜做饭-错误')
//   }
// }
// function step2(resolve,reject){
//   console.log('2.开始-坐下来吃饭');
//   state=2;
//   if(state==2){
//     resolve('坐下来吃饭')
//   }else{
//     reject('坐下来吃饭-错误')
//   }
// }
// function step3(resolve,reject){
//   console.log('3.开始-收拾桌子');
//   state=3;
//   if(state==3){
//     resolve('收拾桌子')
//   }else{
//     reject('收拾桌子-错误')
//   }
// }

// new Promise(step1).then(function(val){
//   console.log(val);
//   return new Promise(step2);
// }).then(function(val){
//   console.log(val);
//   return new Promise(step3);
// }).then(function(val){
//   console.log(val);
// });