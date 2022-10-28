
import React, { useRef } from 'react'
class FormStore {
  constructor ( props ) {
    this.store = {}
    this.fieldEntites = []
    this.callbacks = {}
  }
  setCallbacks = ( callbacks ) => {
    this.callbacks = { ...this.callbacks, ...callbacks }
  }
  registerFieldEntites = ( entites ) => {
    this.fieldEntites.push( entites )
    return () => {
      this.fieldEntites = this.fieldEntites.filter( item => item !== entites )
      delete this.store[ entites.props.name ]
    }
  }
  getFieldsValue = () => {
    return { ...this.store }
  }
  getFieldValue = ( name ) => {
    return this.store[ name ]
  }
  setFieldsValue = ( newStore ) => {
    this.store = {
      ...this.store,
      ...newStore
    }
    this.fieldEntites.forEach( entites => {
      Object.keys( newStore ).forEach( k => {
        if ( k === entites.props.name ) {
          entites.onStoreChange()
        }
      } )
    } )
  }
  validate = () => {
    let err = [];
    this.fieldEntites.forEach( ( entites ) => {
      const { name, rules } = entites.props
      let rule = rules[ 0 ]
      let value = this.getFieldValue( name )
      if ( rule && rule.required && ( typeof value === 'undefined' || value === '' ) ) {
        err.push( { [ name ]: rule.message, value } )
      }
    } )
    return err
  }
  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks
    let err = this.validate()
    if ( err.length === 0 ) {
      onFinish( this.getFieldsValue() )
    } else {
      onFinishFailed()
    }
  }
  getForm = () => {
    return {
      registerFieldEntites: this.registerFieldEntites,
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      submit: this.submit,
      setCallbacks: this.setCallbacks
    }
  }
}


export default function useForm( form ) {
  const formRef = useRef()
  if ( !formRef.current ) {
    if ( form ) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [ formRef.current ]
}