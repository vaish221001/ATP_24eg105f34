
import './App.css'
import Product from "./component/product.jsx";
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import UsersList from './component/UsersList.jsx'
import TestRef from './component/TestRefTypes.jsx'
import APIDemo from './component/APIDemo.jsx';
import FormDemo from './component/FormDemo.jsx'
import UserForm from './component/UserForm.jsx';

// const products = [
//   {
//     id: 1,
//     title: "Fjallraven Backpack",
//     description: "Perfect pack for everyday use.",
//     price: 109.95,
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//   },
//   {
//     id: 2,
//     title: "Casual T-Shirt",
//     description: "Comfortable slim fit t-shirt.",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
//   },
//   {
//     id: 3,
//     title: "Cotton Jacket",
//     description: "Warm jacket for winter.",
//     price: 55.99,
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
//   },
//   {
//     id: 4,
//     title: "Slim Fit Shirt",
//     description: "Stylish slim fit shirt.",
//     price: 15.99,
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
//   },
//   {
//     id: 5,
//     title: "Gold Bracelet",
//     description: "Beautiful jewelry piece.",
//     price: 695,
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
//   },
//   {
//     id: 6,
//     title: "Micropave Ring",
//     description: "Elegant ring design.",
//     price: 168,
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
//   }
// ];

function App(props){

return(
    //   <div className="flex flex-wrap gap-6 justify-center p-5">
    //   {products.map((item) => (
    //     <div key={item.id} className="w">
    //       <Product prodobj={item} />
    //     </div>
    //   ))}
    // </div>
  <div >
    
   {/* <Navbar />

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl m-1 min-h-screen">
    <UsersList />
   </div>

   <Footer />
   */}
   {/* <APIDemo/> */}
   {/* <FormDemo/> */}
   <UserForm/>
  </div>
)
}
export default App;