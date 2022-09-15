import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroBrowzer from "@site/src/components/hero-browzer";
import ProjectsUsingBrowzer from "@site/src/components/projects-using-browzer";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="BrowZer is a modern zero trust system providing secure access to web applications."
    >
      <main>
        <HeroBrowzer />
        {/* <ProjectsUsingBrowzer /> */}
      </main>
    </Layout>
  );
}
