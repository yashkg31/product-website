import React from 'react';
import classes from './Contact.module.css';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function Contact() {
const {pathname} = useLocation();
useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <div className={classes["contact"]} id="contact">
    <div className={classes["header-contact"]}>
      <h1>Contact Us</h1> 
    </div>
    <form className="row g-3" id="myform" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSed3HCPe1tibr9MK9jMaDBMvxFngOeXAZcx-M0Scj-JvrkDEA/formResponse" method="post">
  <div className="col-md-3">
    <label for="inputEmail4" className={classes["form-label"]}>Name</label>
    <input type="email" className="form-control" name="inputName" placeholder='Enter your name' />
  </div>

  <div className="col-md-3">
    <label for="inputAddress" className={classes["form-label"]}>Email-Id</label>
    <input type="text" className="form-control" name="inputEmail" placeholder="Enter your valid email id" />
  </div>
  <div className="col-md-3">
    <label for="inputAddress2" className={classes["form-label"]}>Phone Number</label>
    <input type="text" className="form-control" name="inputPhone" placeholder="Enter your contact number here" />
  </div>
 
  <div className="col-md-3">
    <label for="inputState" className={classes["form-label"]}>Organisation Name</label>
    <input type="text" className="form-control" name="inputOrganisation" placeholder="Please enter your organisation name" />
  </div>
  <div className="col-12">
    <label for="inputZip" className={classes["form-label"]}>Message or Query</label>
    <input type="text" className="form-control inputmsg" name="inputMessage" placeholder='Enter your query here' />
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-success">Submit</button>
  </div>
</form>   
    </div>
    </>
  )
}

export default Contact
