module.exports = {
  main: 'main',
  async_require: 'async_require',
  async_deps: 'async_deps',
  base_module: 'modules/module',
  startup: 'modules/startup/startup',
  //'spec':                         '../../es5_spec',
  spec: 'spec',
  stubs: 'spec/helpers/stubs',
  view_handlers: 'modules/base_views/helpers/handlers',

  'require-lib': 'requirejs/require',
  'require-createnode': '../js/require_createnode',
  tpl: 'requirejs-tpl/tpl',

  jquery: 'node_modules/jquery/dist/jquery',
  'jquery-ui': 'jquery-ui/jquery-ui',
  // CUSTOM FIX
  timeago: 'jquery-timeago/jquery.timeago',
  pagination:
    'jquery-bootstrap-pagination/vendor/assets/javascripts/jquery-bootstrap-pagination',

  backbone: 'backbone/backbone',
  'backbone-validation': 'backbone-validation/dist/backbone-validation-amd',
  'backbone-relational': 'backbone-relational/backbone-relational',

  marionette: 'backbone.marionette',
  // CUSTOM FIX
  'backbone.stickit': 'backbone.stickit/backbone.stickit',
  'backbone.collectionsubset':
    'backbone.collectionsubset/backbone.collectionsubset',

  //'lodash': 'lodash/lodash',
  underscore: 'underscore/underscore',
  'underscore.string': 'underscore.string',

  //'backbone.marionette':          'marionette/lib/core/backbone.marionette',
  'backbone.wreqr': 'backbone.wreqr/lib/backbone.wreqr',
  'backbone.babysitter': 'backbone.babysitter/lib/backbone.babysitter',

  bootstrap: 'node_modules/bootstrap/docs/assets/js/bootstrap',

  select2: 'select2/select2',

  moment: 'moment/moment',
  'moment-lang-sv': 'node_modules/moment/locale/sv',
  'moment-lang-nb': 'node_modules/moment/locale/nb',
  'moment-lang-de': 'node_modules/moment/locale/de',
  'moment-lang-fi': 'node_modules/moment/locale/fi',
  'moment-lang-es': 'node_modules/moment/locale/es',

  // The react and react-dom dependency paths are being overriden to use the production .min versions in
  // the build-package grunt task.
  //'react':                        'react/dist/react-with-addons',
  //'react-dom':                    'react-dom',
  React: 'react',
  ReactDOM: 'react-dom',
  Tether: 'tether',

  //'react-onclickoutside':         'react-onclickoutside/index',
  tether: 'tether/dist/js/tether',
  'react-tether': 'react-tether/dist/react-tether',
  // modulesDirectories has `node_modules` prefix we can skip it
  redux: 'redux/dist/redux',
  // package.json main is defined
  recompose: 'recompose/build/Recompose',
  'redux-thunk': 'redux-thunk/dist/redux-thunk',
  'redux-logger': 'redux-logger/dist/redux-logger',
  'react-router-dom': 'react-router-dom/umd/react-router-dom',

  telinput: 'intl-tel-input/build/js/intlTelInput',

  // must be built before use
  fineuploader: 'jquery.fineuploader/jquery.fineuploader-4.2.1',

  // too big to use Bower
  highcharts: 'highcharts/highcharts',
  'highcharts.more': 'src/lib/highcharts/highcharts-more',

  //'sinon':                         '/node_modules/sinon/pkg/sinon',
  lolex: 'node_modules/lolex/lolex',
  'chai-as-promised': 'node_modules/chai-as-promised/lib/chai-as-promised',
  'chai-fuzzy': 'node_modules/chai-fuzzy/index',
  'chai-things': 'node_modules/chai-things/lib/chai-things',
  'chai-jquery': 'node_modules/chai-jquery/chai-jquery',
  'babel-polyfill': 'babel-polyfill/dist/polyfill',

  'media-check': 'node_modules' + '/mediaCheck/js/mediaCheck',

  jed: 'jed/jed',

  uuid: 'node-uuid/uuid',

  cookie: 'jquery.cookie/jquery.cookie',

  'bootstrap-datepicker':
    'node_modules/bootstrap-datepicker/js/bootstrap-datepicker',
  'datepicker-lang-sv':
    'node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.sv',
  'datepicker-lang-no':
    'node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.no',
  'datepicker-lang-de':
    'node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.de',
  'datepicker-lang-fi':
    'node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.fi',
  'datepicker-lang-es':
    'node_modules/bootstrap-datepicker/js/locales/bootstrap-datepicker.es',

  // Bootstrap modal: don't upgrade, new version (2.2.5) doesn't work with out app
  'bootstrap.modal': 'node_modules/bootstrap-modal/js/bootstrap-modal',
  'bootstrap.modalmanager':
    'node_modules/bootstrap-modal/js/bootstrap-modalmanager',

  autosize: 'node_modules/jquery-autosize/jquery.autosize',

  typeahead: 'node_modules/typeahead.js/dist/typeahead.bundle',

  // Lib overrides. Shortcut notation
  _backbone: 'libs/backbone',
  '_backbone.collectionsubset': 'libs/backbone.collectionsubset',
  '_backbone-relational': 'libs/backbone.relational',
  '_backbone-validation': 'libs/backbone.validation',
  _bootstrap: 'libs/bootstrap',
  '_bootstrap-datepicker': 'libs/bootstrap.datepicker',
  _fineuploader: 'libs/fineuploader',
  _highcharts: 'libs/highcharts',
  _jquery: 'libs/jquery',
  '_backbone.marionette': 'libs/marionette',
  _moment: 'libs/moment',
  '_backbone.stickit': 'libs/stickit',
  _timeago: 'libs/timeago',
  _rollbar: 'libs/rollbar',

  ckeditorbundle: 'node_modules/ckeditor/ckeditor',
  ckeditorjquery: 'node_modules/ckeditor/adapters/jquery',

  rollbar: 'node_modules/rollbar/dist/rollbar.umd',
  pusher: 'node_modules/pusher-js/dist/web/pusher',
  mixpanel: 'node_modules/mixpanel/mixpanel-jslib-snippet.min',
  webfontloader: 'node_modules/webfontloader/webfontloader',

  bowser: 'node_modules/bowser/src/bowser',
};
