import React from 'react'

function ContactMe() {
  return (
    <section id='Contact' className='contact--section'>
        <div>

            <h2>Contact Me</h2>
            <p className='text-lg'>Don't Hesitate To Contact Me, Also  if You’d Prefer, You Can Contact Me on Github or Linkedin </p>
        </div>
        <form className='contact--form--container'>
            <div className='container'>
                <label htmlFor="First-name" className='contact--label'>
                    <span className='text-md'>First Name</span>
                    <input type="text" 
                    className='contact--input 
                    text-md' 
                    name='first-name'
                    id='first-name'
                    />
                </label>
                <label htmlFor="Last-name" className='contact--label'>
                    <span className='text-md'>Last Name</span>
                    <input type="text" 
                    className='contact--input 
                    text-md' 
                    name='Last-name'
                    id='Last-name'
                    required
                    />
                </label>
                <label htmlFor="email" className='contact--label'>
                    <span className='text-md'>Email </span>
                    <input type="email" 
                    className='contact--input 
                    text-md' 
                    name='email'
                    id='email'
                    required
                    />
                </label>
                <label htmlFor="phone-number" className='contact--label'>
                    <span className='text-md'>Phone Number</span>
                    <input type="number" 
                    className='contact--input 
                    text-md' 
                    name='phone-number'
                    id='phone-number'
                    required
                    />
                </label>
            </div>

                <label htmlFor="message" className='contact--label'>
                    <span className='text-md'>Message</span>
                    <textarea
                    className='contact--input text-md' 
                    id='message'
                    rows="8"
                    placeholder='Type your message...'
                    required
                    />
                </label>

                <label htmlFor='checkbox'
                className='checkbox--label'
                >
                    <input type="checkbox"
                    required
                    name='checkbox'
                    id='checkbox'
                    />
                    <span className='text-sm'>I accept terms</span>
                </label>
                <div>
                    <button className='btn btn-primary 
                    contact--form--btn'>Submit</button>
                </div>
        </form>
    </section>
  )
}

export default ContactMe