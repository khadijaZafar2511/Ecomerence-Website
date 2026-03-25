

// export default function Orderitem({item}) {
//   return (
//   <>
//   <li className="flex py-6 border-b border-gray-200">
//     <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
//       <img
//         src={item.imageSrc}
//         alt={item.name}
//         className="h-full w-full object-cover object-center"
//       />
//     </div>

//     <div className="ml-4 flex flex-1 flex-col">
//       <div>
//         <div className="flex justify-between text-base font-medium text-gray-900">
//           <h3>{item.name}</h3>
//           <p className="ml-4">${item.price.toFixed(2)}</p>
//         </div>
//         <p className="mt-1 text-sm text-gray-500">{item.color}</p>
//       </div>
//       <div className="flex flex-1 items-end justify-between text-sm">
//         <p className="text-gray-500">Qty {item.quantity}</p>
//         <span
//           className={`px-2 py-1 rounded-full text-xs font-semibold ${
//             item.status === "Delivered"
//               ? "bg-green-100 text-green-800"
//               : "bg-yellow-100 text-yellow-800"
//           }`}
//         >
//           {item.status}
//         </span>
//       </div>
//     </div>
//   </li>
// </>
//   )
// }
