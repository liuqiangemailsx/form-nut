import React, { Component } from 'react';
import FieldContext from './FieldContext'
// export default class Field extends Component {
//   static contextType = FieldContext
//   componentDidMount() {
//     this.unregister = this.context.registerFieldEntites( this )
//     console.log( "🚀 ~ file: Field.js ~ line 7 ~ Field ~ componentDidMount ~ this.unregister", this.unregister )
//   }
//   componentWillUnmount() {
//     this.unregister()
//   }
//   onStoreChange = () => {
//     this.forceUpdate()
//   }
//   getControlled = () => {
//     const { setFieldsValue, getFieldValue } = this.context
//     const { name } = this.props
//     return {
//       value: getFieldValue( name ),//get set
//       onChange: ( e ) => {
//         const newValue = e.target.value
//         setFieldsValue( {
//           [ name ]: newValue
//         } )
//         console.log( newValue )
//       }
//     }
//   }
//   render() {
//     const { children } = this.props
//     const returnChildNode = React.cloneElement( children, this.getControlled() )
//     return returnChildNode
//   }
// }


function Field( props ) {
  const { children, name } = props
  const {
    getFieldValue,
    setFieldsValue,
    registerFieldEntites,
  } = React.useContext( FieldContext );
  const [ , forceUpdate ] = React.useReducer( ( x ) => x + 1, 0 );
  React.useLayoutEffect( () => {
    const unregister = registerFieldEntites( {
      props,
      onStoreChange: forceUpdate,
    } );
    return unregister;
  }, [] );
  const getControlled = () => {
    return {
      value: getFieldValue( name ), //"omg", // get state
      onChange: ( e ) => {
        const newValue = e.target.value;
        // set state
        setFieldsValue( { [ name ]: newValue } );
      },
    };
  };
  const returnChildNode = React.cloneElement( children, getControlled() )
  return returnChildNode
}
export default Field