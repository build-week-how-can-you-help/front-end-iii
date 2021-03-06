import React from 'react';
import useForm from "./useForm";
import {GridView,Bir,Input,Button} from "./myStyle"
import hdImage from "./bg.png";
import usePost from './usePost';
import './Form.css';

const inputStyle = {
width: '40%',
marginLeft: '10%',
minWidth: '200px', 
}
const imgStyle = {
  width: '50%',
  minWidth: '200px',
  position: 'absolute',
  top: '0%',
  left: '25%'
}
const labelStyle1 = {
  marginLeft: '10%',
}
const labelStyle2 = {
  display: 'none'
}
const buttonStyle1 = {
  position: 'relative'
}
const buttonStyle2 = {
  position: 'absolute',
  top: '0%',
  left: '95%'

}

const Form = (props) => {
    const { values, handleChange, handleSubmit } = useForm(useData);

    function useData(values) {
      props.setKind(values.kind.trim())
      props.setZip(values.zip)
      usePost(props.kind,props.setData)
    }
    
    return (
      <div >
        <img alt='' src={hdImage} style={(props.vData) ? {"display" : "none"} : imgStyle }/>
    <GridView className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
  
          <form onSubmit={handleSubmit} id='how'
 >
<Bir  style={(props.vData) ? {"top" : "0%"} : {"top" : "0%"} }>            
<div className="field">
          <label style={(props.vData) ? labelStyle2 : labelStyle1 } className="label" >What kind of Non-Profit are You Looking For?</label>
                <div className="control">
                <Input placeholder='What are you looking for?' style={{"marginLeft" : "10%"}} className="input" size='100' type="text" name="kind" onChange={handleChange} value={values.kind ? values.kind : ' '} required />

                </div>
              </div>
              <div className="field">
          <label style={(props.vData) ? labelStyle2 : labelStyle1 } className="label" >Zip Code</label>
                <div className="control">
                <Input style={inputStyle} placeholder='Enter zip code' className="input" size='5' type="number" min='20588' max='21930' name="zip" onChange={handleChange} value={values.zip ? values.zip : '2'} required />
                </div>
              </div>
           <Button style={(props.vData) ? buttonStyle2 : buttonStyle1 } type="submit" className="button is-block is-info is-fullwidth">{(props.vData) ? 'New Search' : 'Find Non-Profit'}</Button>
 
</Bir>
            </form>
          </div>
        </div>
      </div>
    </GridView>
    </div>
  );
};

export default Form;