import React from 'react'
import Button from 'react-bootstrap/Button'

const Content = () => {
    const handleItemChange = () =>{
        const items = ['apple', 'banana', 'strawberry'];
        const int = Math.floor(Math.random() * 3);
        return items[int];
    }
  return (
    <main className='test-object'>
        <p>
            Get a {handleItemChange()}!
            <Button  variant="primary" >Primary</Button>{' '}
        </p>
    </main>
  )
}

export default Content