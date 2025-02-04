
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/fundamentos"
  },
  {
    "renderMode": 2,
    "route": "/ejemplo2"
  },
  {
    "renderMode": 2,
    "route": "/ejemplo3"
  },
  {
    "renderMode": 2,
    "route": "/ejemplo4"
  },
  {
    "renderMode": 2,
    "route": "/ejemplo5"
  },
  {
    "renderMode": 2,
    "route": "/ejercicio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 916, hash: 'beea09734ea47599c01ca70dc6aadc8d7dd7e259402af046694908220639c51c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1429, hash: '3693565eaa6dede45eee9d04c6451e421c966c161f401688038c763c67c2adb5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'fundamentos/index.html': {size: 2054, hash: 'a350770935034a0e968615d90c28da58eaaa22763e46d85ed35bf09fbd0a060c', text: () => import('./assets-chunks/fundamentos_index_html.mjs').then(m => m.default)},
    'ejemplo3/index.html': {size: 2675, hash: '46038bccb13e9d7eedf644fc837b788e155460da815f83dceff508c694e8b1ba', text: () => import('./assets-chunks/ejemplo3_index_html.mjs').then(m => m.default)},
    'ejemplo4/index.html': {size: 1397, hash: 'a141fb3f7b99b0d88c0ed1b267bdf2c1c809d275710c7afeeca6d0f2974abb8d', text: () => import('./assets-chunks/ejemplo4_index_html.mjs').then(m => m.default)},
    'ejemplo5/index.html': {size: 2465, hash: 'c55e86951fc771291af3d47ae31cefbffe12735276da78e1d1162cf63b5a7a9b', text: () => import('./assets-chunks/ejemplo5_index_html.mjs').then(m => m.default)},
    'ejercicio/index.html': {size: 3630, hash: '648ccc7c83ec52eda541d603c7349310b6c404ce47983122128746340c5404ac', text: () => import('./assets-chunks/ejercicio_index_html.mjs').then(m => m.default)},
    'ejemplo2/index.html': {size: 2253, hash: '7cd957d0f18616e4a34c59297c8b14dc0d8e12e170ef6e4552733b2c77669dce', text: () => import('./assets-chunks/ejemplo2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2415, hash: '27dbf7290ae48c4ea8148344fdb6ec4aafa7bddad471612bc30294a21ff3be45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
