---
id: troubleshooting
title: Troubleshooting
type: recipe
---

# Troubleshooting

This document contains solutions for certain issues our users encountered
in the past while using BrowZer.

## Some Issue #1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


### Error when using yarn as an npm client

Prior to the release of BrowZer `v0.6.2` users of the flag `--npm-client`
who provided yarn as a client may have suffered from the bootstrap process
not being able to run properly.

```
Error running command.
error Command failed with exit code 1.
```

If you can upgrade BrowZer to said version please do so, or as an alternative
solution you can add `--concurrency=1`.

## Some Issue #2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

