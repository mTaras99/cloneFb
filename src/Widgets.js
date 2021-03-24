import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className='widgets'>
            {/*
            <iframe src="https://www.github.com/mTaras99" 
            style={{border: "none", overflow: "hidden"}} 
            name="myiFrame" scrolling="no" 
            frameborder="0" marginheight="0px" 
            marginwidth="0px" height="100%" 
            width="340px" 
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>*/}
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnatgeo%2F&tabs=timeline&width=280&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            style={{border: "none", overflow: "hidden"}} 
            name="myiFrame" scrolling="no" 
            frameborder="0" marginheight="0px" 
            marginwidth="0px" height="100%" 
            width="280px" 
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
            
        </div>
    )
}

export default Widgets
