function Product(props){
  //productObj:{}
  const {prodobj}=props;
  //state
  
    return (
       <div className="shadow-2xl rounded-4xl border-2 border-gray-600 bg-cyan-50 ">
        <h2 className="text-3xl m-3">{prodobj.title}</h2>
        <p className="text-black align-middle p-5 m-1.5">{prodobj.description}</p>
       </div>
    )
}
export default Product;