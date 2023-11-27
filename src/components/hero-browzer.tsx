import { ChevronRightIcon, DuplicateIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./hero-browzer.module.css";
import BrowzerIcon from "./browzer-icon";
<<<<<<< HEAD
import TypingCarousel1 from "@site/src/components/typing-carousel1";
import TypingCarousel2 from "@site/src/components/typing-carousel2";
=======
import TypingCarousel from "@site/src/components/typing-carousel";
>>>>>>> origin/main

export default function HeroBrowzer(): JSX.Element {

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (copied) {
      t = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [copied]);

  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col col--8 margin-vert--xl">

            <div className="right">
              <a
                href="https://openziti.io"
                target="_blank"
                rel="noreferrer"
                className={styles.callout}
              >
                {/* <span className="notification_new">NEW</span>
                <span className={styles.callout__text}>Check out the OpenZiti Tech Blog!</span>
                <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" /> */}
              </a>
            </div>

            {/* <p className={styles.description}>
              BrowZer from OpenZiti
            </p> */}


            <h2 className={styles.slogan}>
              <span>Secure convenient access to web apps</span>
            </h2>

            <h2 className={styles.slogan2}>
              <span>for</span>
              <span className={styles.carousel}><TypingCarousel1/></span>
            </h2>
            <h2 className={styles.slogan2}>
            <span>but not</span>
              <span className={styles.carousel}><TypingCarousel2/></span>
            </h2>

            <hr className={styles.rounded} />


              {/* <h1 className={styles.slogan}>
                <span className={styles.slogan__highlight}>Ship secureasily!</span>
              </h1> */}

            <p className={styles.description}>

            BrowZer is open source web app security built on the <a href="https://docs.openziti.io">OpenZiti</a> zero trust networking platform. 
            <br/><br/>Available as SaaS or self-hosted, BrowZer enables hosting<strong> private-to-the-internet</strong> web apps without sacrificing ease-of-access for <strong> authorized users</strong>.

            </p>
            <p className={styles.description}>
            Reduce risk of breach while simplifying administration with BrowZer's identity-based 
            secure remote access.  <br/><br/>Ensure your users have access to the critical web apps
            they need, without exposing your web apps to the internet.
            </p>


            <br/>
            <p className={styles.description2}>
            Hello BrowZer!
            </p>
            <br/>

            <div className="padding-vert--md row">

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

              <div className="padding-vert--md row">
                <div className="col">
                  <a href="/docs/about" className="button button--lg button--block button--primary">
                    Learn More
                  </a>
                </div>
              </div>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <div className="padding-vert--md row">
                <div className="col">
                  <a href="/docs/getting-started" className="button button--lg button--block button--primary button--red">
                    Get Started
                  </a>
                </div>
              </div>
              </div>

          </div>
          <div className="col col--3 margin-vert--xl">
            <div className={styles.illustration}>
              <div
                className={styles.illustration__container}
                style={{ backgroundImage: 'url("/images/browzer-logo.svg")' }}
              >
                <BrowzerIcon className={styles.illustration__svg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
