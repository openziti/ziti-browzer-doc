import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd1a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '580'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '56a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '618'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f9f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '20b'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', 'c35'),
    exact: true
  },
  {
    path: '/LandingPage',
    component: ComponentCreator('/LandingPage', '81d'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5d5'),
    exact: true
  },
  {
    path: '/versions',
    component: ComponentCreator('/versions', 'bef'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next', '3aa'),
    routes: [
      {
        path: '/docs/next/api',
        component: ComponentCreator('/docs/next/api', '66a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/benchmark',
        component: ComponentCreator('/docs/next/benchmark', '465'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/dpdk',
        component: ComponentCreator('/docs/next/dpdk', 'fbd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/examples',
        component: ComponentCreator('/docs/next/examples', '2b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/features',
        component: ComponentCreator('/docs/next/features', 'd5a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install',
        component: ComponentCreator('/docs/next/install', '96d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/android',
        component: ComponentCreator('/docs/next/install/android', 'f19'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/freebsd',
        component: ComponentCreator('/docs/next/install/freebsd', '6ad'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/linux',
        component: ComponentCreator('/docs/next/install/linux', 'e32'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/macos',
        component: ComponentCreator('/docs/next/install/macos', '41e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/mingw',
        component: ComponentCreator('/docs/next/install/mingw', '59e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/install/vs',
        component: ComponentCreator('/docs/next/install/vs', '951'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/platforms',
        component: ComponentCreator('/docs/next/platforms', '6db'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/quickstart',
        component: ComponentCreator('/docs/next/quickstart', '95b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tests',
        component: ComponentCreator('/docs/next/tests', '4b5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials',
        component: ComponentCreator('/docs/next/tutorials', '084'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/capture-packets',
        component: ComponentCreator('/docs/next/tutorials/capture-packets', '768'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/dpdk',
        component: ComponentCreator('/docs/next/tutorials/dpdk', '8d7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/intro',
        component: ComponentCreator('/docs/next/tutorials/intro', '5da'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/packet-crafting',
        component: ComponentCreator('/docs/next/tutorials/packet-crafting', '410'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/packet-parsing',
        component: ComponentCreator('/docs/next/tutorials/packet-parsing', '209'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/next/tutorials/read-write-pcap',
        component: ComponentCreator('/docs/next/tutorials/read-write-pcap', '17a'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/docs/v21.11',
    component: ComponentCreator('/docs/v21.11', '78e'),
    routes: [
      {
        path: '/docs/v21.11/api',
        component: ComponentCreator('/docs/v21.11/api', '549'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/benchmark',
        component: ComponentCreator('/docs/v21.11/benchmark', '052'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/dpdk',
        component: ComponentCreator('/docs/v21.11/dpdk', '001'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/examples',
        component: ComponentCreator('/docs/v21.11/examples', '6ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/features',
        component: ComponentCreator('/docs/v21.11/features', '305'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install',
        component: ComponentCreator('/docs/v21.11/install', '95b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/android',
        component: ComponentCreator('/docs/v21.11/install/android', 'b41'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/freebsd',
        component: ComponentCreator('/docs/v21.11/install/freebsd', '96b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/linux',
        component: ComponentCreator('/docs/v21.11/install/linux', '1b6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/macos',
        component: ComponentCreator('/docs/v21.11/install/macos', 'dc0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/mingw',
        component: ComponentCreator('/docs/v21.11/install/mingw', '081'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/install/vs',
        component: ComponentCreator('/docs/v21.11/install/vs', '404'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/platforms',
        component: ComponentCreator('/docs/v21.11/platforms', 'e00'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/quickstart',
        component: ComponentCreator('/docs/v21.11/quickstart', 'cf1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tests',
        component: ComponentCreator('/docs/v21.11/tests', 'f38'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials',
        component: ComponentCreator('/docs/v21.11/tutorials', '89e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/capture-packets',
        component: ComponentCreator('/docs/v21.11/tutorials/capture-packets', '4fa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/dpdk',
        component: ComponentCreator('/docs/v21.11/tutorials/dpdk', 'e77'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/intro',
        component: ComponentCreator('/docs/v21.11/tutorials/intro', '83a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/packet-crafting',
        component: ComponentCreator('/docs/v21.11/tutorials/packet-crafting', '9f5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/packet-parsing',
        component: ComponentCreator('/docs/v21.11/tutorials/packet-parsing', '8ce'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/v21.11/tutorials/read-write-pcap',
        component: ComponentCreator('/docs/v21.11/tutorials/read-write-pcap', '8e5'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd04'),
    routes: [
      {
        path: '/docs/api',
        component: ComponentCreator('/docs/api', 'bf7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/benchmark',
        component: ComponentCreator('/docs/benchmark', '770'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/dpdk',
        component: ComponentCreator('/docs/dpdk', '58c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/examples',
        component: ComponentCreator('/docs/examples', '0ba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features',
        component: ComponentCreator('/docs/features', '3de'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install',
        component: ComponentCreator('/docs/install', 'd41'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/android',
        component: ComponentCreator('/docs/install/android', '75d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/freebsd',
        component: ComponentCreator('/docs/install/freebsd', 'ac8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/linux',
        component: ComponentCreator('/docs/install/linux', '722'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/macos',
        component: ComponentCreator('/docs/install/macos', '611'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/mingw',
        component: ComponentCreator('/docs/install/mingw', '319'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/install/vs',
        component: ComponentCreator('/docs/install/vs', 'a03'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/platforms',
        component: ComponentCreator('/docs/platforms', 'ffb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/quickstart',
        component: ComponentCreator('/docs/quickstart', '449'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tests',
        component: ComponentCreator('/docs/tests', '15d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials',
        component: ComponentCreator('/docs/tutorials', 'a2a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/capture-packets',
        component: ComponentCreator('/docs/tutorials/capture-packets', 'b30'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/dpdk',
        component: ComponentCreator('/docs/tutorials/dpdk', '271'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/intro',
        component: ComponentCreator('/docs/tutorials/intro', 'fcd'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/packet-crafting',
        component: ComponentCreator('/docs/tutorials/packet-crafting', 'f49'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/packet-parsing',
        component: ComponentCreator('/docs/tutorials/packet-parsing', 'ac7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorials/read-write-pcap',
        component: ComponentCreator('/docs/tutorials/read-write-pcap', 'b1c'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd84'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
