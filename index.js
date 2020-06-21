// var country = ['India','USA','UK','Rassia','Australia','Jarman','Itali']
// console.log(country)
// console.log(country[0])
// console.log(country.length)
// console.log(country[country.length-1])
// console.log(`we have ${country.length}countrys are there`)



// var  states =['Telangana','Andrapradesh','Karnataka','Delhi']
// states[1] = 'AP'
// console.log(states)
// states.shift()
// console.log(states)
// states.unshift('Maharsta')
// console.log(states)
// states.pop()
// console.log(states)
// states.push('Chennai')
// console.log(states)
// states.splice(2,2,'gova')
// console.log(states)
   

// ForEach in javscript
// const days = ['mon','tue','wed','thu','fri','sat']
// days.push('sun')
// console.log(days)

// days.forEach(function(week , index){
//     console.log(`${index+1} .${week}`)
// })

 



console.log('Hai this is Call Back Function')

setTimeout(function (){
    console.log('this is 3 sec delay')
});

// let fname = window.prompt('Enter Your FirstName')
// let lname = window.prompt('Enter Your LastName')

// var myfun = function (fname = 'Unname',lname ='Unname'){
//     return ' Hi '+ fname + lname
// }
// console.log(myfun(fname,lname))
 
// console.log('*******')
// var month =['jan','feb','march','april','may','jun','july','august','sep','oct','nove','december']

// month.forEach(function(mon){
//     console.log(mon)
// })





// var mess = function(){
//     console.log('normal msg')
// }
// mess()
// var first = function (name){
//     console.log(`Hai ${name}`)
// }
// first('john')
// function myfun(x){
//     console.log(`Hi ${x}`)
// }
// myfun('Ram')

// //Default Parameters 
// var Name = function (firstname = 'unName',lastname = 'unName' ){
// return 'Hello' + firstname + lastname + ', How are you ?'

// }
// console.log(Name(' Nikitha ',' malkpuram '))


// var numbers = [5,6,8]


//     for(i=0;i<numbers.length;i++)
//     {
//     if(numbers[i]%2==0){
        
//         console.log("Even : " +numbers)
//     }
//     else
//     {
//         console.log("Odd : " +numbers)
//     }
// }


let trueadd = 1 + true;
let falseadd = 1- false;
console.log(trueadd)
console.log(falseadd)