import React from 'react'
import '../styles/contact.css'

const Main = () => {
  return (
    <>
      <main className="contact-page">
        <div className="form-head">
          <h1>Get In Touch</h1>
        </div>
        <div>
          <form>
            <div className="form-heading">
              <h3>Name</h3>
              <input placeholder="" type="text"/>
            </div>
            <div >
              <h3 className="form-heading">Email address</h3>
              <input placeholder="" type="text"/>
            </div>
            <div>
              <h3 className="form-heading">Phone Number</h3>
              <input placeholder="" type="text"/>
            </div>
            <div>
              <h3 className="form-heading">Message</h3>
              <input placeholder="" type="text"/>
            </div>
          </form>
        </div>
        <div>
          glass
        </div>
      </main>
    </>
  )
}

export default Main