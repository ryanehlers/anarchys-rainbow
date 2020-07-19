import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

class Subscribe extends Component {
  render() {
    return (
      <div style={{margin: "5px"}}>
        <MailchimpSubscribe url={"https://anarchysrainbow.us10.list-manage.com/subscribe/post?u=884c66d4b10e21b32f8f45eda&amp;id=ffd9a5b894"}/>
      </div>
    )
  }
}

export default Subscribe
