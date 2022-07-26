---
id: faq
title: FAQ
type: recipe
---

# Frequently asked questions

_This document is a work in progress._

## How do I ...?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

### New this

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

### Existing that

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

## How do I retry publishing if `publish` fails?

Sometimes, `publish` does not work. Your network may have had a hiccup, you may have not been logged on to npm, etc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

## The bootstrap process is really slow, what can I do?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

## Root `package.json`

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation

## CI setup

As mentioned above root `package.json` is responsible for Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
This can be achieved by putting it as npm script to use it during CI phases.

Example root `package.json`:

```json
{
  "name": "my-app",
  "private": true,
  "devDependencies": {
    "eslint": "^3.19.0",
    "jest": "^20.0.4",
  },
  "scripts": {
    "pretest": "eslint packages",
    "test": "jest"
  }
}
```

Example configuration file (`circle.yml`):

```yml
dependencies:
  post:
    - npm run bootstrap
```
