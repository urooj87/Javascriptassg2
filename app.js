//Question: 01
// function outerFunction(value1){
//           return function(value2){
//            console.log(value1 + value2);
//           }
//        }
       
//        let returnFunc = outerFunction(10)
//        returnFunc(5)





//Question: 02
// function arrayFind(arr, val, index = 0){
//           if(index === arr.length)
//           return false;
       
//           if(arr[index] === val)
//           return true;
       
//           return arrayFind (arr, val, index + 1)
//        }
       
//        const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       
//        let result = arrayFind(myArray, 10)
//        console.log('The result of the search is', result);




//Question: 03
// function addPara(content){
//           const para = document.createElement('p')
//           para.innerText = content
//           document.body.appendChild(para)
//           para.style.color = 'blue'
//           para.style.fontSize = 'x-large'
//        }
       
//        addPara('This is the Paragraph element which is created by Javascript')




//Question: 04
// function addItems(text){
//           let unOrder = document.querySelector("#ul")
//           let itemList  = document.createElement("li")
      
//           itemList.append(text)
//           unOrder.append(itemList)
//       }
      
//       addItems("Eraser")




//Question: 05
// function changeColor(id, color){
//           let newColor = document.getElementById(id)
//           newColor.style.backgroundColor = color
//     }
    
//     changeColor('sheet', 'yellow')



//Question: 06
// function localStore(key, obj){
//           localStorage.setItem(key, obj)
//      }
     
//      const players = {
//          type: "batsman",
//          hand: "left hand",
//          position: "opener",
//          age: 33,
//          canBowl: true
//      }
     
//      let modifiedPlayer = JSON.stringify(players)
//      localStore('sportsman', modifiedPlayer)




//Question: 07
// function formLocalStorage(key){
//           let localForm = localStorage.getItem(key)
//           return JSON.parse(localForm)
//       }
      
//       const car = {
//           type: 'four wheel',
//           color: 'black',
//           engine: '300cc',
//           runningKm: 12000
//       }
      
//       let carDetails = JSON.stringify(car)
      
//       localStorage.setItem('vehicle', carDetails)
//       let ObjPrint = formLocalStorage('vehicle')
//       console.log(ObjPrint);





//Question: 08
// function setGetFunc(obj1) {
//           const allKeys = Object.keys(obj1);
//           const allValues = Object.values(obj1);
//           for (let i = 0; i < allKeys.length; i++) {   
//               localStorage.setItem(allKeys[i], allValues[i]);
      
//           }
//           let house2 = [];
//           let keys = Object.keys(localStorage);
//           for (let key of keys) {
              
//               house2.push(`${key}: ${localStorage.getItem(key)}`);    
//           }
         
//           const obj2 = { ...house2 };
//           return obj2;
      
//       }
      
//       const house = {
//           stories: 8,
//           color: 'offwhite',
//           area: '200 sq-yard'
//       }
      
      
//       let retObj = setGetFunc(house); 
//       console.log(retObj);