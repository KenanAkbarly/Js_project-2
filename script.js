
// Question 1
// let n=parseInt(prompt('Enter number:'))
//  let number;

//  number=Math.trunc(n/10%10);

//  alert(number)

// Question 2

//  let num=parseInt(prompt('Enter number:'))
//  let number=num;
//  let lenght =0;

//  while(num>0){
//     num = parseInt(num/10);
//     lenght++;
//  }
 
//  let n = Math.ceil(lenght/2);
//  let result = parseInt((number % (10**n)/(10**(n-1))));

//  console.log(n)



// Question 3

// let n=parseInt(prompt('Enter number:'))
// number =n%10;
// let num =(n-number)/10;
// alert(num)

// Question 4

//  let num=parseInt(prompt('Enter number:'))
//  let number = num;
//  let length = 0;
//  while(num >0){
//     num = parseInt(num/10);
//     length++;
//  }
//  let result = parseInt(number % (10**(length-1)))
//  console.log(result)

// Question 5

// let n=parseInt(prompt('Enter number:'))

// if(n % 3 ==0 && n % 5 ==0 ){
//     alert("YES")

// }else{
//     alert("NO")
// }

// Question 6
// let n=parseInt(prompt('Enter number:'))
//  let count = 0;
// let number =false
// while( n > 0  ){
//     if( n % 10==6){
     
//     number= true;
//     break;
//     } 
//     n=parseInt(n/10);
// }
// console.log(number)

// Question 7
// let n=parseInt(prompt('Enter number:'));

// let number =n;



// Question 8

// let n=parseInt(prompt('Ededi daxil edin:'));
// let m=parseInt(prompt('quvveti daxil edin:'));

// alert("Cavab: " +(n**m))
// Question 9
//  let n=parseInt(prompt('Eded nece reqemlidir:'));
//  let cem=0;
//  let i;
//  for(i=0;i<=n;i++)
//  {
//     cem =cem +i;
//  }
//  alert('Cavab :' +cem)





// // Question 10

// let n=parseInt(prompt('Ededi daxil edin:'));
// let cem=0;
// let i;

// if(n<0){
//     n=n*(-1);
// }
// while(n!=0){
//     i = n % 10;
//     cem = Math.trunc(cem + i);
//     n = n / 10;
// }
// alert('Cavab :'+cem)

// ???????
// Question 11 
/*
2018
201    0*10+8=8             2018/10=201
20     8*10+1=81            201/10=20
2      81*10+0=810          20/10=2
0      810*10+2=8102        2/10=0
*/
// let n=parseInt(prompt('Ededi daxil edin:'));
// let cem =0;
// let i;

// while(n!=0){
//     i = n%10;
//     cem = (cem*10 + i);
//     n = n/10;
// }
// console.log(cem)

// Way-2
// let n=parseInt(prompt('Ededi daxil edin:'));
// let cem =0;
// let i;
// for( ;n!=0;n/=10){
//     i = n % 10;
//     cem = cem*10 + i;
// }
// alert(cem)

// Question 12
// let number = parseInt(prompt("enter a number"))
// let num = number
// let length = 0;
// while (num > 0) {
//     num = Math.trunc(num / 10)
//     length++
// }

// let result = 0;
// for (let i = 1; i <= length; i++) {
//     const lastNum = number % 10;
//     result += lastNum * (10 ** (length - i));
//     number = Math.trunc(number / 10)
// }

// alert(result)

// //Question 13
// let a = prompt('Birinci teref');
// let b = prompt('Ikinci teref');
// let c = prompt('Ucuncu teref');
// let V = a * b * c;
// alert("Paralapipedin hecmi: "+ V );

// Question 14??

// let number = parseInt(prompt("enter a number"))
// let n=number;
// let i;

// for(i=1;i<=n;i++)
// {
//     if(i%2 ===0){
//         console.log(i)
//     }
  
// }
//  Question 15

// let n = parseInt(prompt("enter a number"))

// if(n<0){
//     alert("-1")
// }else if(n==0){
//     alert("0")
// }else{
//     alert("1")
// }

// Question 16
// let n = parseInt(prompt("enter a number"))
// let bir=1;
// let bes=5;
// let on=10;
// let iyirmi=20;
// let elli=50;
// let yuz=100;

// while(true){
//     if((n-yuz)>=0){
//         n=n-yuz;
//         console.log(yuz);
//         continue;
//     }
//     if((n-elli)>=0){
//         n=n-elli;
//         console.log(elli);
//         continue;
//     }
//     if((n-iyirmi)>=0){
//         n=n-iyirmi;
//         console.log(iyirmi);
//         continue;
//     }
//     if((n-on)>=0){
//         n=n-on;
//         console.log(on);
//         continue;
//     }
//     if((n-bes)>=0){
//         n=n-bes;
//         console.log(bes);
//         continue;
//     }
//     if((n-bir)>=0){
//         n=n-bir;
//         console.log(bir);
//         continue;
//     }else if(n==0){
//         break;
//     }
// }

// Question 17

// let number = parseInt(prompt("enter a number"));
// let n1 = Math.trunc(number %10);
// let n2 = Math.trunc(number /10%10);
// let n3 = Math.trunc(number /100);
// let max = Math.max(n1,n2,n3);
// let min = Math.min(n1,n2,n3);
// let orta =n1+n2+n3-(max+min);
// let cavab = max*100+orta*10+min;
// console.log(cavab);


// Question 18

// let number = parseInt(prompt("enter a number"));
// let i;
// let say=0;

// for(i=2;i<number;i++){
//     if(number%i==0){
//         console.log(number +" ededi murekkebdir")
//         break;
//     }
//     else if(number%9!=0){
//         console.log(number +" ededi sadedir")
//         break;
//     }

// }
// Question 19
// let number = parseInt(prompt("enter a number"));
// let cub = Math.trunc(Math.cbrt(number)) ** 3;
// console.log(cub);

// // Question 20
// let number = parseInt(prompt('1-12 intervalinda eded daxil edin:'))

// switch(number){
//     case 1:
//         alert('yanvar')
//         break;
//     case 2:
//         alert('fevral')
//         break;
//     case 3:
//         alert('mart')
//         break;
//     case 4:
//         alert('aprel')
//         break;
//     case 5:
//         alert('may')
//         break;
//     case 6:
//         alert('iyun')
//         break;
//     case 7:
//         alert('iyul')
//         break;
//     case 8:
//         alert('avqust')
//         break;
//     case 9:
//         alert('sentyabr')
//         break;
//     case 10:
//         alert('oktyabr')
//         break;
//     case 11:
//         alert('noyabr')
//         break;
//     case 12:
//         alert('dekabr')
//         break;
// }