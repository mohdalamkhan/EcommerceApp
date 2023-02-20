let counter = 0;
function Recursive (number){
  console.log ("This is a recursive function:  ")
if(counter > number){
  return;
}
console.log('Checking the number')
counter ++;
Recursive(number); // Recursion 
}
Recursive(20)



// import { View, Text,TouchableOpacity } from 'react-native'
// import React,{useState} from 'react'

// const test = () => {
//     const [count, setCount] = useState();

//     handleIncrement =()=>{
//         return(
//             setCount(count + 1)
//         )
//     }

//     handleDecrement =()=>{
//         return(
//             setCount(count - 1)
//         )
//     }

//   return (
//     <View style={{flex:1}}>
//                 <Text> Counter is: {count} </Text>

//         <View style={{flexDirection:'row', 
//             justifyContent:'space-between',
//             alignItems:'center', width: '90%',
//             height:'30%'}}>

//         <TouchableOpacity onPress={()=>{
//             handleIncrement()
//         }}>
//         <Text>Increment</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=>{
//         handleDecrement()
//       }}>
//         <Text>Decrement</Text>
//       </TouchableOpacity>
//       </View>


//     </View>
//   )
// }

// export default test