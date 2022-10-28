import React, { Component } from 'react';
// import createForm from '../components/my-rc-form/'
import Form, { Field } from '../components/my-rc-form/'
// import Form, { Field } from 'rc-field-form'
import Input from '../components/Input'
//antd3

// class MyRcFormPage extends Component {
//   componentDidMount() {
//     const { setFieldsValue } = this.props.form
//     setFieldsValue( {
//       name: 'default'
//     } )
//   }
//   add = () => {
//     const { getFieldsValue, validateFields } = this.props.form
//     console.log( getFieldsValue() )
//     validateFields( ( err, filedName ) => {
//       console.log( err, filedName )
//     } )
//   }
//   render() {
//     console.log( this.props )
//     const { getFieldDecorator } = this.props.form
//     return (
//       <div>

//         { getFieldDecorator( "name", {
//           rule: [ {
//             required: true,
//             message: '错误'
//           } ]
//         } )(
//           <Input />
//         ) }
//         <button onClick={ this.add }>add</button>
//       </div>
//     );
//   }
// }

//antd4
// function MyRcFormPage() {
//   const [ form ] = Form.useForm()
//   console.log( "🚀 ~ file: MyRcFormPage.js ~ line 44 ~ MyRcFormPage ~ form", form )

//   const onFinish = ( val ) => {
//     console.log( "onFinish", val ); //sy-log
//   };

//   // 表单校验失败执行
//   const onFinishFailed = ( val ) => {
//     console.log( "onFinishFailed", val ); //sy-log
//   };
//   return (
//     <div>
//       <Form form={ form }
//         onFinish={ onFinish }
//         onFinishFailed={ onFinishFailed }
//       >
//         <Form.Field name='usename' rules={ [ { required: true, message: '错误' } ] } >
//           <Input />
//         </Form.Field>
//         <Form.Field name='password' rules={ [ { required: true, message: '错误' } ] }  >
//           <Input />
//         </Form.Field>
//         <button>Submit</button>
//       </Form>
//     </div>
//   );
// }
class MyRcFormPage extends Component {
  formRef = React.createRef()
  componentDidMount() {
    console.log( "form", this.formRef.current ); //sy-log
    this.formRef.current.setFieldsValue( { usename: 'default' } )
  }
  onFinish = ( val ) => {
    console.log( "onFinish", val ); //sy-log
  };

  // 表单校验失败执行
  onFinishFailed = ( val ) => {
    console.log( "onFinishFailed", val ); //sy-log
  };
  render() {
    return (
      <div>
        <Form
          ref={ this.formRef }
          onFinish={ this.onFinish }
          onFinishFailed={ this.onFinishFailed }
        >
          <Field name='usename' rules={ [ { required: true, message: '错误' } ] } >
            <Input />
          </Field>
          <Field name='password' rules={ [ { required: true, message: '错误' } ] }  >
            <Input />
          </Field>
          <button>Submit</button>
        </Form>
      </div >
    );
  }
}
export default MyRcFormPage 