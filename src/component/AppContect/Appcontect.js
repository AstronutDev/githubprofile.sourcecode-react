import './Appcontect.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect} from 'react';

function Appcontect() {

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
            <div data-aos="fade-left" class="Appcontect-container">
                <h1 className='h1-topic-contactme'>&nbsp;Contact me</h1>
                <p className="p-text-contact">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📱  Tel. : 095-2849559</p>
                <p className="p-text-contact">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 📧 Email : supanut.wizard@gmail.com </p>
                <p className="p-text-contact">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🌎 Facebook : Supanut Laddayam</p>
                <p className="p-text-contact">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🌐 Linkin : Supanut Laddayam</p>
                
            </div>
        </>
    )
}

export default Appcontect