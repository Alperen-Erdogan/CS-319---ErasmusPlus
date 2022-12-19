import React from 'react'
import { XCircle } from 'react-bootstrap-icons';
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner" >
          <XCircle size={32} className="close-btn x-btn" onClick={() => props.setTrigger(false)}/>
            { props.children }
        </div>
    </div>
  ):"";
}

export default Popup