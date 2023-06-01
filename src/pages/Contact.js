import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
         <h1 className="main_heading">CONTACT</h1>
        <div className="sec_05 container" data-aos='fade-up' data-aos-duration='3000'>
            <div className="row contact-form">
                <form action='https://formspree.io/f/xpzegajz' method='POST' className="col">
                     <div className="mb-2">
                         <label for='name'>Name</label><br/>
                         <input type='text' id='name' name="username" autoComplete='off' required placeholder='Enter your name'/>
                     </div>
                     <div  className="mb-2">
                         <label for='email'>Email</label><br/>
                         <input type='email' id='email' name="email" autoComplete='off' required placeholder='Enter your email Id'/>
                     </div>
                     <div className="mb-2">
                         <label for='textarea'>Message</label><br/>
                         <textarea name="message" rows='5' cols='100' autoComplete='off' required  placeholder='Type something here..'></textarea>
                     </div>
                     <br/>
                     <div className='submit_btn'>
                        <input type='submit' value='SEND'/>
                     </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact