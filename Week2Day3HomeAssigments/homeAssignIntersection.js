function intersection(arr1,arr2){

                let arr3 = arr1.filter((num)=>arr2.includes(num))
                let arr4= arr3.filter((num,index)=> arr3.indexOf(num)===index)
                return arr4
               
            }  
console.log(intersection([1,7,5,3,5],[8,7,5,6,2,7,5]))




