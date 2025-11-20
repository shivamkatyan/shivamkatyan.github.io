
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4733, hash: 'f2cc94f81b55e3c751d669a9e9286a4eda2e216cb662494a01188cb872cb55d3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1568, hash: '10990d5ac56a93f7e606f1afa56568fb6d506f1776f15bb7de04815c2781fde1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30454, hash: '62f14ba58b04402c6cd9ae4d89fa45ccd5764a1e53cd7768af9e590e70f774b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Q6L2ZG7F.css': {size: 10033, hash: 'Y3F0GoS/RXU', text: () => import('./assets-chunks/styles-Q6L2ZG7F_css.mjs').then(m => m.default)}
  },
};
