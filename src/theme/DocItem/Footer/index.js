import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Feedback from './Feedback';

export default function FooterWrapper(props) {
  return (
    <>
      <Feedback {...props}></Feedback>
      <Footer {...props} />
    </>
  );
}
