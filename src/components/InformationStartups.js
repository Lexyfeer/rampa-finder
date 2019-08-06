import React from 'react';

const Value = (props)=>(
    <div>
<label>Observaciones: *</label>
    
    <input className="form-control" type="text" name="nya" id="nya" onChange={props.handlerProp}  />
    
    <label>Evaluación: *</label>
   
    <input className="form-control" type="text" name="email" id="email"   />
    
    <label htmlFor="password">evaluación numerica:</label>
    
    <input className="form-control" type="number" name="contraseña" id="contraseña"  />
   
    <input className="btn btn-primary btn-lg" type="submit" value="Enviar" />
    </div>
    
)

export default Value;
