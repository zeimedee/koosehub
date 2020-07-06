import React from 'react'
import Pic from './card'
import pic1 from '../images/1.jpg'
import pic2 from '../images/2.jpeg'
import pic3 from '../images/3.jpeg'
import pic4 from '../images/4.jpeg'

function Image() {
    return (
        <div>
             <Pic pic={pic1} />
             <Pic pic={pic2} />
             <Pic pic={pic3} />
             <Pic pic={pic4} />
        </div>
    )
}

export default Image
