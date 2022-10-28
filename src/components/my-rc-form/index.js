import React, { Component } from "react";
//antd 3 form
// export default function createForm( Cmp ) {
//   return class extends Component {
//     constructor ( props ) {
//       super( props )
//       this.state = {

//       }
//       this.options = {}
//     }
//     handleChange = ( e ) => {
//       const { name, value } = e.target
//       this.setState( {
//         [ name ]: value
//       } )
//     }
//     getFieldsValue = () => { return { ...this.state } }
//     getFieldValue = () => { }
//     setFieldsValue = ( options ) => {
//       this.setState( { ...options } )
//     }
//     submit = () => { }
//     getFieldDecorator = ( field, options ) => ( InputCmp ) => {
//       this.options[ field ] = options
//       return React.cloneElement( InputCmp, {
//         name: field,
//         value: this.state[ field ],
//         onChange: this.handleChange
//       } )
//     }
//     validateFields = ( callback ) => {
//       let err = [];

//       for ( let field in this.options ) {
//         if ( this.state[ field ] === 'undefined' || this.state[ field ] === '' ) {
//           err.push( {
//             [ field ]: 'error'
//           } )
//         }
//       }

//       if ( err.length ) {
//         callback( err, this.state )
//       } else {
//         callback( null, this.state )
//       }
//     }
//     getForm = () => {
//       return {
//         form: {
//           getFieldsValue: this.getFieldsValue,
//           getFieldValue: this.getFieldValue,
//           setFieldsValue: this.setFieldsValue,
//           validateFields: this.validateFields,
//           getFieldDecorator: this.getFieldDecorator,
//           submit: this.submit,
//         }
//       };
//     }
//     render() {
//       return <Cmp { ...this.props } { ...this.getForm() } />
//     }
//   };
// }


//antd 4 

import _Form from './Form'
import Field from './Field'
import useForm from './useForm'


const Form = React.forwardRef( _Form )
Form.Field = Field
Form.useForm = useForm
export { Field, useForm }
export default Form
