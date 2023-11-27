import React, { useEffect, useState } from "react";
import styles from "./typing-carousel.module.css";
import Textra from 'react-textra';


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = `<span style="margin-left: -5px; color:#158eed; font-size:2.5rem">`+'&nbsp;'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 3; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

export default function TypingCarousel(): JSX.Element {

  
  useEffect(() => {
    let elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  },);

  return (
    // <span
    //   className="txt-rotate"
    //   data-period="1000"
    //   data-rotate='
    //     [         
    //       "For any private web app.", 
    //       "Based on trusted identity.", 
    //       "No web app modifications required.",
    //       "No VPN required.",
    //       "Simple."
    //     ]
    //   '
    // >
    // </span>
    <span>
      <Textra 
        effect='downTop'
        stopDuration={3000}       
        data={
          [
            'everyone', 
            'employees', 
            'medical patients',
            'online shoppers', 
            'devops', 
          ]
        } 
      />
    </span>
  );
}
