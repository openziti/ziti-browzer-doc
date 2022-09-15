import { ChevronRightIcon, DuplicateIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./hero-browzer.module.css";
import BrowzerIcon from "./browzer-icon";
import TypingCarousel from "@site/src/components/typing-carousel";

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
                <span className="notification_new">NEW</span>
                <span className={styles.callout__text}>Check out the OpenZiti Tech Blog!</span>
                <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
              </a>
            </div>

            {/* <p className={styles.description}>
              BrowZer from OpenZiti
            </p> */}

            <h1 className={styles.slogan}>
              <span>Modern web application security</span>
              <TypingCarousel/>
              <span className={styles.slogan__highlight}>Ship secureasily!</span>
            </h1>
            <p className={styles.description}>

            BrowZer is an open source solution 
            from the OpenZiti project that helps you 
            <strong> host private-to-the-internet web apps</strong> without sacrificing ease-of-access for your<strong> authorized users</strong>.

            </p>

            <br/>
            <br/>
            <p className={styles.description2}>
            Welcome to the OpenZiti BrowZer environment.
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
          <div className="col col--4">
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
