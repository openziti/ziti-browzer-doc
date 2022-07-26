---
id: architecture
title: BrowZer Architecture
type: explanation
---

import { Mermaid } from 'mdx-mermaid/Mermaid';

# BrowZer Architecture

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Some BrowZer sequence diagram(s) will be written...

<!-- prettier-ignore-start -->

<Mermaid chart={`sequenceDiagram
    participant Curt
    participant Clint
    Curt->>Dave: Hello Dave, how are you?
    loop Healthcheck
        Dave->>Dave: Fight against hypochondria
    end
    Note right of Dave: Rational thoughts <br/>prevail!
    Dave-->>Curt: Great!
    Dave->>Clint: How about you?
    Clint-->>Dave: Jolly good!`} />

<!-- prettier-ignore-end -->
