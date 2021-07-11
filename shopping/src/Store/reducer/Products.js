const INIT_STATE = {
  products: [
    {
      id: 1,
      name: 'Man-Shoes',
      image:'1.jpg',
      price:20,
      Desc:'lorem ipsum'
    },
    {
      id: 2,
      name: 'Camera',
      image:'2.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
    {
      id: 3,
      name: 'Camera',
      image:'3.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
    {
      id: 4,
      name: 'Camera',
      image:'4.jpg',
      price:50,
      Desc:'lorem ipsum'
    },{
      id: 5,
      name: 'Camera',
      image:'5.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
    {
      id: 6,
      name: 'Camera',
      image:'6.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
    {
      id: 7,
      name: 'Camera',
      image:'7.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
    {
      id: 8,
      name: 'Camera',
      image:'8.jpg',
      price:50,
      Desc:'lorem ipsum'
    },
   
  ],
  product:{}
}
const ProductReducer = (state = INIT_STATE,action)=>{
  switch(action.type){
        case "PRODUCT":
        return{...state,product:state.products.find(product => product.id === parseInt(action.id))}



    default:return state;
  }
}

export default ProductReducer;