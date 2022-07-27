import { ChevronRightIcon, DuplicateIcon } from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./hero-lerna.module.css";
import LernaIcon from "./lerna-icon";

export default function HeroLerna(): JSX.Element {
  const command = "npx lerna init";

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
            {/* <a
              href="https://github.com/lerna/lerna/issues/3121"
              target="_blank"
              rel="noreferrer"
              className={styles.callout}
            >
              <span className="badge badge--primary callout__badge">NEW</span>
              <span className={styles.callout__text}>Nrwl takes stewardship!</span>
              <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
            </a> */}
            <p className={styles.description}>
              OpenZiti BrowZer
            </p>

            <h1 className={styles.slogan}>
              <span>The Modern System for</span>
              <span className={styles.slogan__highlight}>Securing Web Applications</span>
            </h1>
            <p className={styles.description}>
            What if you could host your web app in any cloud, and make
            it invisible to malicious intruders.
            <br/>
            <br/>
            And what if your authorized users could still easily access the web app --
            from anywhere on the internet -- with no additional software like VPNs on their laptop or mobile device.
            <br/>
            <br/>
            And what if you could do all this without making any modifications to your web app!
            <br/>
            <br/>
            What would that do for your team's security, productivity, flexibility?  
            <br/>
            <br/>
            <p className={styles.description2}>
            Welcome to the OpenZiti BrowZer environment.
            </p>
            <br/>
            <br/>
            The ideal experience for your web app users, that also keeps everything secure via Zero Trust.
            <br/>
            <br/>
            This changes everything.
            </p>

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
                <LernaIcon className={styles.illustration__svg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
