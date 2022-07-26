import clsx from "clsx";
import React from "react";
import styles from "./powered-by-nx.module.css";

export default function PoweredByNx(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            // backgroundImage: "url('/images/background/rocket.avif')",
            backgroundImage: "url('/images/background/browZer-1.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              Zero Trust Web Applications <span>Powered by OpenZiti</span>
            </h1>
            <p className="margin-bottom--md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <a className="button button--secondary" href="/docs/about/architecture">
              Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
