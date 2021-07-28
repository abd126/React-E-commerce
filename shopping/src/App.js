import React from 'react';
import { connect } from 'react-redux';
import AppRouter from './Config/Router/AppRouter';



function App() {
  return (
    <AppRouter />


  )
}





// const mapStateToProps = (state) => ({
//   Product: state.Product,

// })

// const mapDispatchToProps = (dispatch) => ({

// })


export default connect(null, null)(App);