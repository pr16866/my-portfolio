import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';



const options={
    // damping:0.07,
}

export default function SmoothScrollBar() {
    useEffect(() => {
        // document.body.style.width="100%";
        Scrollbar.init(document.body, options);
      
    }, [])
    
    
    return null
}
