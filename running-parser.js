
> @gugledas/theme-builder@1.0.0 serve
> webpack serve --node-env=development

 source :  webpack/hot/log.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./modules/strip-ansi/index.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 88,
      end: 135,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/parseURL.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 2
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 136,
      end: 190,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./socket.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 3
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 191,
      end: 234,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./overlay.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './socket.js',
      userRequest: './socket.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 4
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 4
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 235,
      end: 268,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/log.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './socket.js',
      userRequest: './socket.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 4
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './overlay.js',
      userRequest: './overlay.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 5
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 5
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 269,
      end: 326,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/sendMessage.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './socket.js',
      userRequest: './socket.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 4
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './overlay.js',
      userRequest: './overlay.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 5
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/log.js',
      userRequest: './utils/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 6
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 6
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 327,
      end: 377,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/reloadApp.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './socket.js',
      userRequest: './socket.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 4
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './overlay.js',
      userRequest: './overlay.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 5
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/log.js',
      userRequest: './utils/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 6
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 9,
      _locSC: 0,
      _locEL: 9,
      _locEC: 49,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/sendMessage.js',
      userRequest: './utils/sendMessage.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 7
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 9,
      _locSC: 0,
      _locEL: 9,
      _locEC: 49,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 7
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 378,
      end: 427,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/createSocketURL.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/log.js',
      userRequest: 'webpack/hot/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './modules/strip-ansi/index.js',
      userRequest: './modules/strip-ansi/index.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/parseURL.js',
      userRequest: './utils/parseURL.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 3
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './socket.js',
      userRequest: './socket.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 4
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './overlay.js',
      userRequest: './overlay.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 5
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/log.js',
      userRequest: './utils/log.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 6
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 9,
      _locSC: 0,
      _locEL: 9,
      _locEC: 49,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/sendMessage.js',
      userRequest: './utils/sendMessage.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 7
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 10,
      _locSC: 0,
      _locEL: 10,
      _locEC: 45,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './utils/reloadApp.js',
      userRequest: './utils/reloadApp.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 8
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1000,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 47,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 4,
      _locSC: 0,
      _locEL: 4,
      _locEC: 54,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 5,
      _locSC: 0,
      _locEL: 5,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 6,
      _locSC: 0,
      _locEL: 6,
      _locEC: 33,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 7,
      _locSC: 0,
      _locEL: 7,
      _locEC: 57,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 8,
      _locSC: 0,
      _locEL: 8,
      _locEC: 50,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 9,
      _locSC: 0,
      _locEL: 9,
      _locEC: 49,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 10,
      _locSC: 0,
      _locEL: 10,
      _locEC: 45,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  rawRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __resourceQuery, __webpack_hash__ */\n' +
        '/// <reference types="webpack/module" />\n' +
        'import webpackHotLog from "webpack/hot/log.js";\n' +
        'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
        'import parseURL from "./utils/parseURL.js";\n' +
        'import socket from "./socket.js";\n' +
        'import { formatProblem, show, hide } from "./overlay.js";\n' +
        'import { log, setLogLevel } from "./utils/log.js";\n' +
        'import sendMessage from "./utils/sendMessage.js";\n' +
        'import reloadApp from "./utils/reloadApp.js";\n' +
        'import createSocketURL from "./utils/createSocketURL.js";\n' +
        '/**\n' +
        ' * @typedef {Object} Options\n' +
        ' * @property {boolean} hot\n' +
        ' * @property {boolean} liveReload\n' +
        ' * @property {boolean} progress\n' +
        ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
        ' * @property {string} [logging]\n' +
        ' * @property {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @typedef {Object} Status\n' +
        ' * @property {boolean} isUnloading\n' +
        ' * @property {string} currentHash\n' +
        ' * @property {string} [previousHash]\n' +
        ' */\n' +
        '\n' +
        '/**\n' +
        ' * @type {Status}\n' +
        ' */\n' +
        '\n' +
        'var status = {\n' +
        '  isUnloading: false,\n' +
        '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
        '  // eslint-disable-next-line camelcase\n' +
        '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
        '};\n' +
        '/** @type {Options} */\n' +
        '\n' +
        'var options = {\n' +
        '  hot: false,\n' +
        '  liveReload: false,\n' +
        '  progress: false,\n' +
        '  overlay: false\n' +
        '};\n' +
        'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
        '\n' +
        'if (parsedResourceQuery.hot === "true") {\n' +
        '  options.hot = true;\n' +
        '  log.info("Hot Module Replacement enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery["live-reload"] === "true") {\n' +
        '  options.liveReload = true;\n' +
        '  log.info("Live Reloading enabled.");\n' +
        '}\n' +
        '\n' +
        'if (parsedResourceQuery.logging) {\n' +
        '  options.logging = parsedResourceQuery.logging;\n' +
        '}\n' +
        '\n' +
        'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
        '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} level\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function setAllLogLevel(level) {\n' +
        '  // This is needed because the HMR logger operate separately from dev server logger\n' +
        '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
        '  setLogLevel(level);\n' +
        '}\n' +
        '\n' +
        'if (options.logging) {\n' +
        '  setAllLogLevel(options.logging);\n' +
        '}\n' +
        '\n' +
        'self.addEventListener("beforeunload", function () {\n' +
        '  status.isUnloading = true;\n' +
        '});\n' +
        'var onSocketMessage = {\n' +
        '  hot: function hot() {\n' +
        '    if (parsedResourceQuery.hot === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.hot = true;\n' +
        '    log.info("Hot Module Replacement enabled.");\n' +
        '  },\n' +
        '  liveReload: function liveReload() {\n' +
        '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.liveReload = true;\n' +
        '    log.info("Live Reloading enabled.");\n' +
        '  },\n' +
        '  invalid: function invalid() {\n' +
        `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Invalid");\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} hash\n' +
        '   */\n' +
        '  hash: function hash(_hash) {\n' +
        '    status.previousHash = status.currentHash;\n' +
        '    status.currentHash = _hash;\n' +
        '  },\n' +
        '  logging: setAllLogLevel,\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  overlay: function overlay(value) {\n' +
        '    if (typeof document === "undefined") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.overlay = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {number} value\n' +
        '   */\n' +
        '  reconnect: function reconnect(value) {\n' +
        '    if (parsedResourceQuery.reconnect === "false") {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    options.reconnect = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {boolean} value\n' +
        '   */\n' +
        '  progress: function progress(value) {\n' +
        '    options.progress = value;\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
        '   */\n' +
        '  "progress-update": function progressUpdate(data) {\n' +
        '    if (options.progress) {\n' +
        '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Progress", data);\n' +
        '  },\n' +
        '  "still-ok": function stillOk() {\n' +
        '    log.info("Nothing changed.");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("StillOk");\n' +
        '  },\n' +
        '  ok: function ok() {\n' +
        '    sendMessage("Ok");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        "  // TODO: remove in v5 in favor of 'static-changed'\n" +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "content-changed": function contentChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {string} file\n' +
        '   */\n' +
        '  "static-changed": function staticChanged(file) {\n' +
        '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
        '    self.location.reload();\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} warnings\n' +
        '   * @param {any} params\n' +
        '   */\n' +
        '  warnings: function warnings(_warnings, params) {\n' +
        '    log.warn("Warnings while compiling.");\n' +
        '\n' +
        '    var printableWarnings = _warnings.map(function (error) {\n' +
        '      var _formatProblem = formatProblem("warning", error),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Warnings", printableWarnings);\n' +
        '\n' +
        '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
        '      log.warn(printableWarnings[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
        '\n' +
        '    if (needShowOverlayForWarnings) {\n' +
        '      show("warning", _warnings);\n' +
        '    }\n' +
        '\n' +
        '    if (params && params.preventReloading) {\n' +
        '      return;\n' +
        '    }\n' +
        '\n' +
        '    reloadApp(options, status);\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error[]} errors\n' +
        '   */\n' +
        '  errors: function errors(_errors) {\n' +
        '    log.error("Errors while compiling. Reload prevented.");\n' +
        '\n' +
        '    var printableErrors = _errors.map(function (error) {\n' +
        '      var _formatProblem2 = formatProblem("error", error),\n' +
        '          header = _formatProblem2.header,\n' +
        '          body = _formatProblem2.body;\n' +
        '\n' +
        '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
        '    });\n' +
        '\n' +
        '    sendMessage("Errors", printableErrors);\n' +
        '\n' +
        '    for (var i = 0; i < printableErrors.length; i++) {\n' +
        '      log.error(printableErrors[i]);\n' +
        '    }\n' +
        '\n' +
        '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
        '\n' +
        '    if (needShowOverlayForErrors) {\n' +
        '      show("error", _errors);\n' +
        '    }\n' +
        '  },\n' +
        '\n' +
        '  /**\n' +
        '   * @param {Error} error\n' +
        '   */\n' +
        '  error: function error(_error) {\n' +
        '    log.error(_error);\n' +
        '  },\n' +
        '  close: function close() {\n' +
        '    log.info("Disconnected!");\n' +
        '\n' +
        '    if (options.overlay) {\n' +
        '      hide();\n' +
        '    }\n' +
        '\n' +
        '    sendMessage("Close");\n' +
        '  }\n' +
        '};\n' +
        'var socketURL = createSocketURL(parsedResourceQuery);\n' +
        'socket(socketURL, onSocketMessage, options.reconnect);',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 8
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 428,
      end: 473,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
    request: undefined,
    query: '?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/index.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/index.js',
    __innerRequest: './client/index.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __resourceQuery, __webpack_hash__ */\n' +
      '/// <reference types="webpack/module" />\n' +
      'import webpackHotLog from "webpack/hot/log.js";\n' +
      'import stripAnsi from "./modules/strip-ansi/index.js";\n' +
      'import parseURL from "./utils/parseURL.js";\n' +
      'import socket from "./socket.js";\n' +
      'import { formatProblem, show, hide } from "./overlay.js";\n' +
      'import { log, setLogLevel } from "./utils/log.js";\n' +
      'import sendMessage from "./utils/sendMessage.js";\n' +
      'import reloadApp from "./utils/reloadApp.js";\n' +
      'import createSocketURL from "./utils/createSocketURL.js";\n' +
      '/**\n' +
      ' * @typedef {Object} Options\n' +
      ' * @property {boolean} hot\n' +
      ' * @property {boolean} liveReload\n' +
      ' * @property {boolean} progress\n' +
      ' * @property {boolean | { warnings?: boolean, errors?: boolean }} overlay\n' +
      ' * @property {string} [logging]\n' +
      ' * @property {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @typedef {Object} Status\n' +
      ' * @property {boolean} isUnloading\n' +
      ' * @property {string} currentHash\n' +
      ' * @property {string} [previousHash]\n' +
      ' */\n' +
      '\n' +
      '/**\n' +
      ' * @type {Status}\n' +
      ' */\n' +
      '\n' +
      'var status = {\n' +
      '  isUnloading: false,\n' +
      '  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n' +
      '  // eslint-disable-next-line camelcase\n' +
      '  currentHash: typeof __webpack_hash__ !== "undefined" ? __webpack_hash__ : ""\n' +
      '};\n' +
      '/** @type {Options} */\n' +
      '\n' +
      'var options = {\n' +
      '  hot: false,\n' +
      '  liveReload: false,\n' +
      '  progress: false,\n' +
      '  overlay: false\n' +
      '};\n' +
      'var parsedResourceQuery = parseURL(__resourceQuery);\n' +
      '\n' +
      'if (parsedResourceQuery.hot === "true") {\n' +
      '  options.hot = true;\n' +
      '  log.info("Hot Module Replacement enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery["live-reload"] === "true") {\n' +
      '  options.liveReload = true;\n' +
      '  log.info("Live Reloading enabled.");\n' +
      '}\n' +
      '\n' +
      'if (parsedResourceQuery.logging) {\n' +
      '  options.logging = parsedResourceQuery.logging;\n' +
      '}\n' +
      '\n' +
      'if (typeof parsedResourceQuery.reconnect !== "undefined") {\n' +
      '  options.reconnect = Number(parsedResourceQuery.reconnect);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} level\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function setAllLogLevel(level) {\n' +
      '  // This is needed because the HMR logger operate separately from dev server logger\n' +
      '  webpackHotLog.setLogLevel(level === "verbose" || level === "log" ? "info" : level);\n' +
      '  setLogLevel(level);\n' +
      '}\n' +
      '\n' +
      'if (options.logging) {\n' +
      '  setAllLogLevel(options.logging);\n' +
      '}\n' +
      '\n' +
      'self.addEventListener("beforeunload", function () {\n' +
      '  status.isUnloading = true;\n' +
      '});\n' +
      'var onSocketMessage = {\n' +
      '  hot: function hot() {\n' +
      '    if (parsedResourceQuery.hot === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.hot = true;\n' +
      '    log.info("Hot Module Replacement enabled.");\n' +
      '  },\n' +
      '  liveReload: function liveReload() {\n' +
      '    if (parsedResourceQuery["live-reload"] === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.liveReload = true;\n' +
      '    log.info("Live Reloading enabled.");\n' +
      '  },\n' +
      '  invalid: function invalid() {\n' +
      `    log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n` +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Invalid");\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} hash\n' +
      '   */\n' +
      '  hash: function hash(_hash) {\n' +
      '    status.previousHash = status.currentHash;\n' +
      '    status.currentHash = _hash;\n' +
      '  },\n' +
      '  logging: setAllLogLevel,\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  overlay: function overlay(value) {\n' +
      '    if (typeof document === "undefined") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.overlay = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {number} value\n' +
      '   */\n' +
      '  reconnect: function reconnect(value) {\n' +
      '    if (parsedResourceQuery.reconnect === "false") {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    options.reconnect = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {boolean} value\n' +
      '   */\n' +
      '  progress: function progress(value) {\n' +
      '    options.progress = value;\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {{ pluginName?: string, percent: number, msg: string }} data\n' +
      '   */\n' +
      '  "progress-update": function progressUpdate(data) {\n' +
      '    if (options.progress) {\n' +
      '      log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Progress", data);\n' +
      '  },\n' +
      '  "still-ok": function stillOk() {\n' +
      '    log.info("Nothing changed.");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("StillOk");\n' +
      '  },\n' +
      '  ok: function ok() {\n' +
      '    sendMessage("Ok");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      "  // TODO: remove in v5 in favor of 'static-changed'\n" +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "content-changed": function contentChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {string} file\n' +
      '   */\n' +
      '  "static-changed": function staticChanged(file) {\n' +
      '    log.info("".concat(file ? "\\"".concat(file, "\\"") : "Content", " from static directory was changed. Reloading..."));\n' +
      '    self.location.reload();\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} warnings\n' +
      '   * @param {any} params\n' +
      '   */\n' +
      '  warnings: function warnings(_warnings, params) {\n' +
      '    log.warn("Warnings while compiling.");\n' +
      '\n' +
      '    var printableWarnings = _warnings.map(function (error) {\n' +
      '      var _formatProblem = formatProblem("warning", error),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Warnings", printableWarnings);\n' +
      '\n' +
      '    for (var i = 0; i < printableWarnings.length; i++) {\n' +
      '      log.warn(printableWarnings[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;\n' +
      '\n' +
      '    if (needShowOverlayForWarnings) {\n' +
      '      show("warning", _warnings);\n' +
      '    }\n' +
      '\n' +
      '    if (params && params.preventReloading) {\n' +
      '      return;\n' +
      '    }\n' +
      '\n' +
      '    reloadApp(options, status);\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error[]} errors\n' +
      '   */\n' +
      '  errors: function errors(_errors) {\n' +
      '    log.error("Errors while compiling. Reload prevented.");\n' +
      '\n' +
      '    var printableErrors = _errors.map(function (error) {\n' +
      '      var _formatProblem2 = formatProblem("error", error),\n' +
      '          header = _formatProblem2.header,\n' +
      '          body = _formatProblem2.body;\n' +
      '\n' +
      '      return "".concat(header, "\\n").concat(stripAnsi(body));\n' +
      '    });\n' +
      '\n' +
      '    sendMessage("Errors", printableErrors);\n' +
      '\n' +
      '    for (var i = 0; i < printableErrors.length; i++) {\n' +
      '      log.error(printableErrors[i]);\n' +
      '    }\n' +
      '\n' +
      '    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;\n' +
      '\n' +
      '    if (needShowOverlayForErrors) {\n' +
      '      show("error", _errors);\n' +
      '    }\n' +
      '  },\n' +
      '\n' +
      '  /**\n' +
      '   * @param {Error} error\n' +
      '   */\n' +
      '  error: function error(_error) {\n' +
      '    log.error(_error);\n' +
      '  },\n' +
      '  close: function close() {\n' +
      '    log.info("Disconnected!");\n' +
      '\n' +
      '    if (options.overlay) {\n' +
      '      hide();\n' +
      '    }\n' +
      '\n' +
      '    sendMessage("Close");\n' +
      '  }\n' +
      '};\n' +
      'var socketURL = createSocketURL(parsedResourceQuery);\n' +
      'socket(socketURL, onSocketMessage, options.reconnect);',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8086&pathname=%2Fws&logging=info&reconnect=10'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./header/header.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson',
  layer: null,
  needId: true,
  debugId: 1002,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
  rawRequest: './src/appson/appson.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import "./header/header.js";',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: { issuer: '', issuerLayer: null, compiler: undefined },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/appson.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/appson.js',
    __innerRequest: './src/appson/appson.js'
  },
  matchResource: undefined,
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[0].use'
    }
  ],
  error: null,
  _source: SourceMapSource {
    _valueAsString: 'import "./header/header.js";',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/appson/appson.js',
    _hasSourceMap: true,
    _sourceMapAsObject: {
      version: 3,
      sources: [Array],
      names: [],
      mappings: 'AAAA,OAAO,oBAAP',
      sourcesContent: [Array],
      file: 'x',
      sourceRoot: undefined
    },
    _sourceMapAsString: undefined,
    _sourceMapAsBuffer: undefined,
    _hasOriginalSource: false,
    _originalSourceAsString: undefined,
    _originalSourceAsBuffer: undefined,
    _hasInnerSourceMap: false,
    _innerSourceMapAsObject: undefined,
    _innerSourceMapAsString: undefined,
    _innerSourceMapAsBuffer: undefined,
    _removeOriginalSource: undefined
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./clients/WebSocketClient.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1003,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  rawRequest: './socket.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __webpack_dev_server_client__ */\n' +
        'import WebSocketClient from "./clients/WebSocketClient.js";\n' +
        'import { log } from "./utils/log.js"; // this WebsocketClient is here as a default fallback, in case the client is not injected\n' +
        '\n' +
        '/* eslint-disable camelcase */\n' +
        '\n' +
        'var Client = // eslint-disable-next-line no-nested-ternary\n' +
        'typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : WebSocketClient;\n' +
        '/* eslint-enable camelcase */\n' +
        '\n' +
        'var retries = 0;\n' +
        'var maxRetries = 10;\n' +
        'var client = null;\n' +
        '/**\n' +
        ' * @param {string} url\n' +
        ' * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n' +
        ' * @param {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        'var socket = function initSocket(url, handlers, reconnect) {\n' +
        '  client = new Client(url);\n' +
        '  client.onOpen(function () {\n' +
        '    retries = 0;\n' +
        '\n' +
        '    if (typeof reconnect !== "undefined") {\n' +
        '      maxRetries = reconnect;\n' +
        '    }\n' +
        '  });\n' +
        '  client.onClose(function () {\n' +
        '    if (retries === 0) {\n' +
        '      handlers.close();\n' +
        '    } // Try to reconnect.\n' +
        '\n' +
        '\n' +
        '    client = null; // After 10 retries stop trying, to prevent logspam.\n' +
        '\n' +
        '    if (retries < maxRetries) {\n' +
        '      // Exponentially increase timeout to reconnect.\n' +
        '      // Respectfully copied from the package `got`.\n' +
        '      // eslint-disable-next-line no-restricted-properties\n' +
        '      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n' +
        '      retries += 1;\n' +
        '      log.info("Trying to reconnect...");\n' +
        '      setTimeout(function () {\n' +
        '        socket(url, handlers, reconnect);\n' +
        '      }, retryInMs);\n' +
        '    }\n' +
        '  });\n' +
        '  client.onMessage(\n' +
        '  /**\n' +
        '   * @param {any} data\n' +
        '   */\n' +
        '  function (data) {\n' +
        '    var message = JSON.parse(data);\n' +
        '\n' +
        '    if (handlers[message.type]) {\n' +
        '      handlers[message.type](message.data, message.params);\n' +
        '    }\n' +
        '  });\n' +
        '};\n' +
        '\n' +
        'export default socket;',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/socket.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/socket.js',
    __innerRequest: './client/socket.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __webpack_dev_server_client__ */\n' +
      'import WebSocketClient from "./clients/WebSocketClient.js";\n' +
      'import { log } from "./utils/log.js"; // this WebsocketClient is here as a default fallback, in case the client is not injected\n' +
      '\n' +
      '/* eslint-disable camelcase */\n' +
      '\n' +
      'var Client = // eslint-disable-next-line no-nested-ternary\n' +
      'typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : WebSocketClient;\n' +
      '/* eslint-enable camelcase */\n' +
      '\n' +
      'var retries = 0;\n' +
      'var maxRetries = 10;\n' +
      'var client = null;\n' +
      '/**\n' +
      ' * @param {string} url\n' +
      ' * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n' +
      ' * @param {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      'var socket = function initSocket(url, handlers, reconnect) {\n' +
      '  client = new Client(url);\n' +
      '  client.onOpen(function () {\n' +
      '    retries = 0;\n' +
      '\n' +
      '    if (typeof reconnect !== "undefined") {\n' +
      '      maxRetries = reconnect;\n' +
      '    }\n' +
      '  });\n' +
      '  client.onClose(function () {\n' +
      '    if (retries === 0) {\n' +
      '      handlers.close();\n' +
      '    } // Try to reconnect.\n' +
      '\n' +
      '\n' +
      '    client = null; // After 10 retries stop trying, to prevent logspam.\n' +
      '\n' +
      '    if (retries < maxRetries) {\n' +
      '      // Exponentially increase timeout to reconnect.\n' +
      '      // Respectfully copied from the package `got`.\n' +
      '      // eslint-disable-next-line no-restricted-properties\n' +
      '      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n' +
      '      retries += 1;\n' +
      '      log.info("Trying to reconnect...");\n' +
      '      setTimeout(function () {\n' +
      '        socket(url, handlers, reconnect);\n' +
      '      }, retryInMs);\n' +
      '    }\n' +
      '  });\n' +
      '  client.onMessage(\n' +
      '  /**\n' +
      '   * @param {any} data\n' +
      '   */\n' +
      '  function (data) {\n' +
      '    var message = JSON.parse(data);\n' +
      '\n' +
      '    if (handlers[message.type]) {\n' +
      '      handlers[message.type](message.data, message.params);\n' +
      '    }\n' +
      '  });\n' +
      '};\n' +
      '\n' +
      'export default socket;',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/socket.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./utils/log.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 59,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './clients/WebSocketClient.js',
      userRequest: './clients/WebSocketClient.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1003,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 59,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  rawRequest: './socket.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '/* global __webpack_dev_server_client__ */\n' +
        'import WebSocketClient from "./clients/WebSocketClient.js";\n' +
        'import { log } from "./utils/log.js"; // this WebsocketClient is here as a default fallback, in case the client is not injected\n' +
        '\n' +
        '/* eslint-disable camelcase */\n' +
        '\n' +
        'var Client = // eslint-disable-next-line no-nested-ternary\n' +
        'typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : WebSocketClient;\n' +
        '/* eslint-enable camelcase */\n' +
        '\n' +
        'var retries = 0;\n' +
        'var maxRetries = 10;\n' +
        'var client = null;\n' +
        '/**\n' +
        ' * @param {string} url\n' +
        ' * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n' +
        ' * @param {number} [reconnect]\n' +
        ' */\n' +
        '\n' +
        'var socket = function initSocket(url, handlers, reconnect) {\n' +
        '  client = new Client(url);\n' +
        '  client.onOpen(function () {\n' +
        '    retries = 0;\n' +
        '\n' +
        '    if (typeof reconnect !== "undefined") {\n' +
        '      maxRetries = reconnect;\n' +
        '    }\n' +
        '  });\n' +
        '  client.onClose(function () {\n' +
        '    if (retries === 0) {\n' +
        '      handlers.close();\n' +
        '    } // Try to reconnect.\n' +
        '\n' +
        '\n' +
        '    client = null; // After 10 retries stop trying, to prevent logspam.\n' +
        '\n' +
        '    if (retries < maxRetries) {\n' +
        '      // Exponentially increase timeout to reconnect.\n' +
        '      // Respectfully copied from the package `got`.\n' +
        '      // eslint-disable-next-line no-restricted-properties\n' +
        '      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n' +
        '      retries += 1;\n' +
        '      log.info("Trying to reconnect...");\n' +
        '      setTimeout(function () {\n' +
        '        socket(url, handlers, reconnect);\n' +
        '      }, retryInMs);\n' +
        '    }\n' +
        '  });\n' +
        '  client.onMessage(\n' +
        '  /**\n' +
        '   * @param {any} data\n' +
        '   */\n' +
        '  function (data) {\n' +
        '    var message = JSON.parse(data);\n' +
        '\n' +
        '    if (handlers[message.type]) {\n' +
        '      handlers[message.type](message.data, message.params);\n' +
        '    }\n' +
        '  });\n' +
        '};\n' +
        '\n' +
        'export default socket;',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 43,
      end: 102,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/socket.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/socket.js',
    __innerRequest: './client/socket.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '/* global __webpack_dev_server_client__ */\n' +
      'import WebSocketClient from "./clients/WebSocketClient.js";\n' +
      'import { log } from "./utils/log.js"; // this WebsocketClient is here as a default fallback, in case the client is not injected\n' +
      '\n' +
      '/* eslint-disable camelcase */\n' +
      '\n' +
      'var Client = // eslint-disable-next-line no-nested-ternary\n' +
      'typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : WebSocketClient;\n' +
      '/* eslint-enable camelcase */\n' +
      '\n' +
      'var retries = 0;\n' +
      'var maxRetries = 10;\n' +
      'var client = null;\n' +
      '/**\n' +
      ' * @param {string} url\n' +
      ' * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n' +
      ' * @param {number} [reconnect]\n' +
      ' */\n' +
      '\n' +
      'var socket = function initSocket(url, handlers, reconnect) {\n' +
      '  client = new Client(url);\n' +
      '  client.onOpen(function () {\n' +
      '    retries = 0;\n' +
      '\n' +
      '    if (typeof reconnect !== "undefined") {\n' +
      '      maxRetries = reconnect;\n' +
      '    }\n' +
      '  });\n' +
      '  client.onClose(function () {\n' +
      '    if (retries === 0) {\n' +
      '      handlers.close();\n' +
      '    } // Try to reconnect.\n' +
      '\n' +
      '\n' +
      '    client = null; // After 10 retries stop trying, to prevent logspam.\n' +
      '\n' +
      '    if (retries < maxRetries) {\n' +
      '      // Exponentially increase timeout to reconnect.\n' +
      '      // Respectfully copied from the package `got`.\n' +
      '      // eslint-disable-next-line no-restricted-properties\n' +
      '      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n' +
      '      retries += 1;\n' +
      '      log.info("Trying to reconnect...");\n' +
      '      setTimeout(function () {\n' +
      '        socket(url, handlers, reconnect);\n' +
      '      }, retryInMs);\n' +
      '    }\n' +
      '  });\n' +
      '  client.onMessage(\n' +
      '  /**\n' +
      '   * @param {any} data\n' +
      '   */\n' +
      '  function (data) {\n' +
      '    var message = JSON.parse(data);\n' +
      '\n' +
      '    if (handlers[message.type]) {\n' +
      '      handlers[message.type](message.data, message.params);\n' +
      '    }\n' +
      '  });\n' +
      '};\n' +
      '\n' +
      'export default socket;',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/socket.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ansi-html-community
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1004,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  rawRequest: './overlay.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n' +
        '// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n' +
        'import ansiHTML from "ansi-html-community";\n' +
        'import { encode } from "html-entities";\n' +
        'var colors = {\n' +
        '  reset: ["transparent", "transparent"],\n' +
        '  black: "181818",\n' +
        '  red: "E36049",\n' +
        '  green: "B3CB74",\n' +
        '  yellow: "FFD080",\n' +
        '  blue: "7CAFC2",\n' +
        '  magenta: "7FACCA",\n' +
        '  cyan: "C3C2EF",\n' +
        '  lightgrey: "EBE7E3",\n' +
        '  darkgrey: "6D7891"\n' +
        '};\n' +
        '/** @type {HTMLIFrameElement | null | undefined} */\n' +
        '\n' +
        'var iframeContainerElement;\n' +
        '/** @type {HTMLDivElement | null | undefined} */\n' +
        '\n' +
        'var containerElement;\n' +
        '/** @type {Array<(element: HTMLDivElement) => void>} */\n' +
        '\n' +
        'var onLoadQueue = [];\n' +
        'ansiHTML.setColors(colors);\n' +
        '\n' +
        'function createContainer() {\n' +
        '  iframeContainerElement = document.createElement("iframe");\n' +
        '  iframeContainerElement.id = "webpack-dev-server-client-overlay";\n' +
        '  iframeContainerElement.src = "about:blank";\n' +
        '  iframeContainerElement.style.position = "fixed";\n' +
        '  iframeContainerElement.style.left = 0;\n' +
        '  iframeContainerElement.style.top = 0;\n' +
        '  iframeContainerElement.style.right = 0;\n' +
        '  iframeContainerElement.style.bottom = 0;\n' +
        '  iframeContainerElement.style.width = "100vw";\n' +
        '  iframeContainerElement.style.height = "100vh";\n' +
        '  iframeContainerElement.style.border = "none";\n' +
        '  iframeContainerElement.style.zIndex = 9999999999;\n' +
        '\n' +
        '  iframeContainerElement.onload = function () {\n' +
        '    containerElement =\n' +
        '    /** @type {Document} */\n' +
        '\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '    iframeContainerElement.contentDocument.createElement("div");\n' +
        '    containerElement.id = "webpack-dev-server-client-overlay-div";\n' +
        '    containerElement.style.position = "fixed";\n' +
        '    containerElement.style.boxSizing = "border-box";\n' +
        '    containerElement.style.left = 0;\n' +
        '    containerElement.style.top = 0;\n' +
        '    containerElement.style.right = 0;\n' +
        '    containerElement.style.bottom = 0;\n' +
        '    containerElement.style.width = "100vw";\n' +
        '    containerElement.style.height = "100vh";\n' +
        '    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";\n' +
        '    containerElement.style.color = "#E8E8E8";\n' +
        '    containerElement.style.fontFamily = "Menlo, Consolas, monospace";\n' +
        '    containerElement.style.fontSize = "large";\n' +
        '    containerElement.style.padding = "2rem";\n' +
        '    containerElement.style.lineHeight = "1.2";\n' +
        '    containerElement.style.whiteSpace = "pre-wrap";\n' +
        '    containerElement.style.overflow = "auto";\n' +
        '    var headerElement = document.createElement("span");\n' +
        '    headerElement.innerText = "Compiled with problems:";\n' +
        '    var closeButtonElement = document.createElement("button");\n' +
        '    closeButtonElement.innerText = "X";\n' +
        '    closeButtonElement.style.background = "transparent";\n' +
        '    closeButtonElement.style.border = "none";\n' +
        '    closeButtonElement.style.fontSize = "20px";\n' +
        '    closeButtonElement.style.fontWeight = "bold";\n' +
        '    closeButtonElement.style.color = "white";\n' +
        '    closeButtonElement.style.cursor = "pointer";\n' +
        '    closeButtonElement.style.cssFloat = "right"; // @ts-ignore\n' +
        '\n' +
        '    closeButtonElement.style.styleFloat = "right";\n' +
        '    closeButtonElement.addEventListener("click", function () {\n' +
        '      hide();\n' +
        '    });\n' +
        '    containerElement.appendChild(headerElement);\n' +
        '    containerElement.appendChild(closeButtonElement);\n' +
        '    containerElement.appendChild(document.createElement("br"));\n' +
        '    containerElement.appendChild(document.createElement("br"));\n' +
        '    /** @type {Document} */\n' +
        '\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n' +
        '    onLoadQueue.forEach(function (onLoad) {\n' +
        '      onLoad(\n' +
        '      /** @type {HTMLDivElement} */\n' +
        '      containerElement);\n' +
        '    });\n' +
        '    onLoadQueue = [];\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '\n' +
        '    iframeContainerElement.onload = null;\n' +
        '  };\n' +
        '\n' +
        '  document.body.appendChild(iframeContainerElement);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {(element: HTMLDivElement) => void} callback\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function ensureOverlayExists(callback) {\n' +
        '  if (containerElement) {\n' +
        '    // Everything is ready, call the callback right away.\n' +
        '    callback(containerElement);\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  onLoadQueue.push(callback);\n' +
        '\n' +
        '  if (iframeContainerElement) {\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  createContainer();\n' +
        '} // Successful compilation.\n' +
        '\n' +
        '\n' +
        'function hide() {\n' +
        '  if (!iframeContainerElement) {\n' +
        '    return;\n' +
        '  } // Clean up and reset internal state.\n' +
        '\n' +
        '\n' +
        '  document.body.removeChild(iframeContainerElement);\n' +
        '  iframeContainerElement = null;\n' +
        '  containerElement = null;\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} type\n' +
        ' * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\n' +
        ' * @returns {{ header: string, body: string }}\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function formatProblem(type, item) {\n' +
        '  var header = type === "warning" ? "WARNING" : "ERROR";\n' +
        '  var body = "";\n' +
        '\n' +
        '  if (typeof item === "string") {\n' +
        '    body += item;\n' +
        '  } else {\n' +
        '    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary\n' +
        '\n' +
        '    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\\s|\\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";\n' +
        '    var loc = item.loc;\n' +
        '    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");\n' +
        '    body += item.message || "";\n' +
        '  }\n' +
        '\n' +
        '  return {\n' +
        '    header: header,\n' +
        '    body: body\n' +
        '  };\n' +
        '} // Compilation with errors (e.g. syntax error or missing modules).\n' +
        '\n' +
        '/**\n' +
        ' * @param {string} type\n' +
        ' * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function show(type, messages) {\n' +
        '  ensureOverlayExists(function () {\n' +
        '    messages.forEach(function (message) {\n' +
        '      var entryElement = document.createElement("div");\n' +
        '      var typeElement = document.createElement("span");\n' +
        '\n' +
        '      var _formatProblem = formatProblem(type, message),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      typeElement.innerText = header;\n' +
        '      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.\n' +
        '\n' +
        '      var text = ansiHTML(encode(body));\n' +
        '      var messageTextNode = document.createElement("div");\n' +
        '      messageTextNode.innerHTML = text;\n' +
        '      entryElement.appendChild(typeElement);\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(messageTextNode);\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      /** @type {HTMLDivElement} */\n' +
        '\n' +
        '      containerElement.appendChild(entryElement);\n' +
        '    });\n' +
        '  });\n' +
        '}\n' +
        '\n' +
        'export { formatProblem, show, hide };',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/overlay.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/overlay.js',
    __innerRequest: './client/overlay.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n' +
      '// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n' +
      'import ansiHTML from "ansi-html-community";\n' +
      'import { encode } from "html-entities";\n' +
      'var colors = {\n' +
      '  reset: ["transparent", "transparent"],\n' +
      '  black: "181818",\n' +
      '  red: "E36049",\n' +
      '  green: "B3CB74",\n' +
      '  yellow: "FFD080",\n' +
      '  blue: "7CAFC2",\n' +
      '  magenta: "7FACCA",\n' +
      '  cyan: "C3C2EF",\n' +
      '  lightgrey: "EBE7E3",\n' +
      '  darkgrey: "6D7891"\n' +
      '};\n' +
      '/** @type {HTMLIFrameElement | null | undefined} */\n' +
      '\n' +
      'var iframeContainerElement;\n' +
      '/** @type {HTMLDivElement | null | undefined} */\n' +
      '\n' +
      'var containerElement;\n' +
      '/** @type {Array<(element: HTMLDivElement) => void>} */\n' +
      '\n' +
      'var onLoadQueue = [];\n' +
      'ansiHTML.setColors(colors);\n' +
      '\n' +
      'function createContainer() {\n' +
      '  iframeContainerElement = document.createElement("iframe");\n' +
      '  iframeContainerElement.id = "webpack-dev-server-client-overlay";\n' +
      '  iframeContainerElement.src = "about:blank";\n' +
      '  iframeContainerElement.style.position = "fixed";\n' +
      '  iframeContainerElement.style.left = 0;\n' +
      '  iframeContainerElement.style.top = 0;\n' +
      '  iframeContainerElement.style.right = 0;\n' +
      '  iframeContainerElement.style.bottom = 0;\n' +
      '  iframeContainerElement.style.width = "100vw";\n' +
      '  iframeContainerElement.style.height = "100vh";\n' +
      '  iframeContainerElement.style.border = "none";\n' +
      '  iframeContainerElement.style.zIndex = 9999999999;\n' +
      '\n' +
      '  iframeContainerElement.onload = function () {\n' +
      '    containerElement =\n' +
      '    /** @type {Document} */\n' +
      '\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '    iframeContainerElement.contentDocument.createElement("div");\n' +
      '    containerElement.id = "webpack-dev-server-client-overlay-div";\n' +
      '    containerElement.style.position = "fixed";\n' +
      '    containerElement.style.boxSizing = "border-box";\n' +
      '    containerElement.style.left = 0;\n' +
      '    containerElement.style.top = 0;\n' +
      '    containerElement.style.right = 0;\n' +
      '    containerElement.style.bottom = 0;\n' +
      '    containerElement.style.width = "100vw";\n' +
      '    containerElement.style.height = "100vh";\n' +
      '    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";\n' +
      '    containerElement.style.color = "#E8E8E8";\n' +
      '    containerElement.style.fontFamily = "Menlo, Consolas, monospace";\n' +
      '    containerElement.style.fontSize = "large";\n' +
      '    containerElement.style.padding = "2rem";\n' +
      '    containerElement.style.lineHeight = "1.2";\n' +
      '    containerElement.style.whiteSpace = "pre-wrap";\n' +
      '    containerElement.style.overflow = "auto";\n' +
      '    var headerElement = document.createElement("span");\n' +
      '    headerElement.innerText = "Compiled with problems:";\n' +
      '    var closeButtonElement = document.createElement("button");\n' +
      '    closeButtonElement.innerText = "X";\n' +
      '    closeButtonElement.style.background = "transparent";\n' +
      '    closeButtonElement.style.border = "none";\n' +
      '    closeButtonElement.style.fontSize = "20px";\n' +
      '    closeButtonElement.style.fontWeight = "bold";\n' +
      '    closeButtonElement.style.color = "white";\n' +
      '    closeButtonElement.style.cursor = "pointer";\n' +
      '    closeButtonElement.style.cssFloat = "right"; // @ts-ignore\n' +
      '\n' +
      '    closeButtonElement.style.styleFloat = "right";\n' +
      '    closeButtonElement.addEventListener("click", function () {\n' +
      '      hide();\n' +
      '    });\n' +
      '    containerElement.appendChild(headerElement);\n' +
      '    containerElement.appendChild(closeButtonElement);\n' +
      '    containerElement.appendChild(document.createElement("br"));\n' +
      '    containerElement.appendChild(document.createElement("br"));\n' +
      '    /** @type {Document} */\n' +
      '\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n' +
      '    onLoadQueue.forEach(function (onLoad) {\n' +
      '      onLoad(\n' +
      '      /** @type {HTMLDivElement} */\n' +
      '      containerElement);\n' +
      '    });\n' +
      '    onLoadQueue = [];\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '\n' +
      '    iframeContainerElement.onload = null;\n' +
      '  };\n' +
      '\n' +
      '  document.body.appendChild(iframeContainerElement);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {(element: HTMLDivElement) => void} callback\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function ensureOverlayExists(callback) {\n' +
      '  if (containerElement) {\n' +
      '    // Everything is ready, call the callback right away.\n' +
      '    callback(containerElement);\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  onLoadQueue.push(callback);\n' +
      '\n' +
      '  if (iframeContainerElement) {\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  createContainer();\n' +
      '} // Successful compilation.\n' +
      '\n' +
      '\n' +
      'function hide() {\n' +
      '  if (!iframeContainerElement) {\n' +
      '    return;\n' +
      '  } // Clean up and reset internal state.\n' +
      '\n' +
      '\n' +
      '  document.body.removeChild(iframeContainerElement);\n' +
      '  iframeContainerElement = null;\n' +
      '  containerElement = null;\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} type\n' +
      ' * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\n' +
      ' * @returns {{ header: string, body: string }}\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function formatProblem(type, item) {\n' +
      '  var header = type === "warning" ? "WARNING" : "ERROR";\n' +
      '  var body = "";\n' +
      '\n' +
      '  if (typeof item === "string") {\n' +
      '    body += item;\n' +
      '  } else {\n' +
      '    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary\n' +
      '\n' +
      '    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\\s|\\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";\n' +
      '    var loc = item.loc;\n' +
      '    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");\n' +
      '    body += item.message || "";\n' +
      '  }\n' +
      '\n' +
      '  return {\n' +
      '    header: header,\n' +
      '    body: body\n' +
      '  };\n' +
      '} // Compilation with errors (e.g. syntax error or missing modules).\n' +
      '\n' +
      '/**\n' +
      ' * @param {string} type\n' +
      ' * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function show(type, messages) {\n' +
      '  ensureOverlayExists(function () {\n' +
      '    messages.forEach(function (message) {\n' +
      '      var entryElement = document.createElement("div");\n' +
      '      var typeElement = document.createElement("span");\n' +
      '\n' +
      '      var _formatProblem = formatProblem(type, message),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      typeElement.innerText = header;\n' +
      '      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.\n' +
      '\n' +
      '      var text = ansiHTML(encode(body));\n' +
      '      var messageTextNode = document.createElement("div");\n' +
      '      messageTextNode.innerHTML = text;\n' +
      '      entryElement.appendChild(typeElement);\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(messageTextNode);\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      /** @type {HTMLDivElement} */\n' +
      '\n' +
      '      containerElement.appendChild(entryElement);\n' +
      '    });\n' +
      '  });\n' +
      '}\n' +
      '\n' +
      'export { formatProblem, show, hide };',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/overlay.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  html-entities
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'ansi-html-community',
      userRequest: 'ansi-html-community',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client',
  layer: null,
  needId: true,
  debugId: 1004,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 3,
      _locSC: 0,
      _locEL: 3,
      _locEC: 43,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  rawRequest: './overlay.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n' +
        '// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n' +
        'import ansiHTML from "ansi-html-community";\n' +
        'import { encode } from "html-entities";\n' +
        'var colors = {\n' +
        '  reset: ["transparent", "transparent"],\n' +
        '  black: "181818",\n' +
        '  red: "E36049",\n' +
        '  green: "B3CB74",\n' +
        '  yellow: "FFD080",\n' +
        '  blue: "7CAFC2",\n' +
        '  magenta: "7FACCA",\n' +
        '  cyan: "C3C2EF",\n' +
        '  lightgrey: "EBE7E3",\n' +
        '  darkgrey: "6D7891"\n' +
        '};\n' +
        '/** @type {HTMLIFrameElement | null | undefined} */\n' +
        '\n' +
        'var iframeContainerElement;\n' +
        '/** @type {HTMLDivElement | null | undefined} */\n' +
        '\n' +
        'var containerElement;\n' +
        '/** @type {Array<(element: HTMLDivElement) => void>} */\n' +
        '\n' +
        'var onLoadQueue = [];\n' +
        'ansiHTML.setColors(colors);\n' +
        '\n' +
        'function createContainer() {\n' +
        '  iframeContainerElement = document.createElement("iframe");\n' +
        '  iframeContainerElement.id = "webpack-dev-server-client-overlay";\n' +
        '  iframeContainerElement.src = "about:blank";\n' +
        '  iframeContainerElement.style.position = "fixed";\n' +
        '  iframeContainerElement.style.left = 0;\n' +
        '  iframeContainerElement.style.top = 0;\n' +
        '  iframeContainerElement.style.right = 0;\n' +
        '  iframeContainerElement.style.bottom = 0;\n' +
        '  iframeContainerElement.style.width = "100vw";\n' +
        '  iframeContainerElement.style.height = "100vh";\n' +
        '  iframeContainerElement.style.border = "none";\n' +
        '  iframeContainerElement.style.zIndex = 9999999999;\n' +
        '\n' +
        '  iframeContainerElement.onload = function () {\n' +
        '    containerElement =\n' +
        '    /** @type {Document} */\n' +
        '\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '    iframeContainerElement.contentDocument.createElement("div");\n' +
        '    containerElement.id = "webpack-dev-server-client-overlay-div";\n' +
        '    containerElement.style.position = "fixed";\n' +
        '    containerElement.style.boxSizing = "border-box";\n' +
        '    containerElement.style.left = 0;\n' +
        '    containerElement.style.top = 0;\n' +
        '    containerElement.style.right = 0;\n' +
        '    containerElement.style.bottom = 0;\n' +
        '    containerElement.style.width = "100vw";\n' +
        '    containerElement.style.height = "100vh";\n' +
        '    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";\n' +
        '    containerElement.style.color = "#E8E8E8";\n' +
        '    containerElement.style.fontFamily = "Menlo, Consolas, monospace";\n' +
        '    containerElement.style.fontSize = "large";\n' +
        '    containerElement.style.padding = "2rem";\n' +
        '    containerElement.style.lineHeight = "1.2";\n' +
        '    containerElement.style.whiteSpace = "pre-wrap";\n' +
        '    containerElement.style.overflow = "auto";\n' +
        '    var headerElement = document.createElement("span");\n' +
        '    headerElement.innerText = "Compiled with problems:";\n' +
        '    var closeButtonElement = document.createElement("button");\n' +
        '    closeButtonElement.innerText = "X";\n' +
        '    closeButtonElement.style.background = "transparent";\n' +
        '    closeButtonElement.style.border = "none";\n' +
        '    closeButtonElement.style.fontSize = "20px";\n' +
        '    closeButtonElement.style.fontWeight = "bold";\n' +
        '    closeButtonElement.style.color = "white";\n' +
        '    closeButtonElement.style.cursor = "pointer";\n' +
        '    closeButtonElement.style.cssFloat = "right"; // @ts-ignore\n' +
        '\n' +
        '    closeButtonElement.style.styleFloat = "right";\n' +
        '    closeButtonElement.addEventListener("click", function () {\n' +
        '      hide();\n' +
        '    });\n' +
        '    containerElement.appendChild(headerElement);\n' +
        '    containerElement.appendChild(closeButtonElement);\n' +
        '    containerElement.appendChild(document.createElement("br"));\n' +
        '    containerElement.appendChild(document.createElement("br"));\n' +
        '    /** @type {Document} */\n' +
        '\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n' +
        '    onLoadQueue.forEach(function (onLoad) {\n' +
        '      onLoad(\n' +
        '      /** @type {HTMLDivElement} */\n' +
        '      containerElement);\n' +
        '    });\n' +
        '    onLoadQueue = [];\n' +
        '    /** @type {HTMLIFrameElement} */\n' +
        '\n' +
        '    iframeContainerElement.onload = null;\n' +
        '  };\n' +
        '\n' +
        '  document.body.appendChild(iframeContainerElement);\n' +
        '}\n' +
        '/**\n' +
        ' * @param {(element: HTMLDivElement) => void} callback\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function ensureOverlayExists(callback) {\n' +
        '  if (containerElement) {\n' +
        '    // Everything is ready, call the callback right away.\n' +
        '    callback(containerElement);\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  onLoadQueue.push(callback);\n' +
        '\n' +
        '  if (iframeContainerElement) {\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  createContainer();\n' +
        '} // Successful compilation.\n' +
        '\n' +
        '\n' +
        'function hide() {\n' +
        '  if (!iframeContainerElement) {\n' +
        '    return;\n' +
        '  } // Clean up and reset internal state.\n' +
        '\n' +
        '\n' +
        '  document.body.removeChild(iframeContainerElement);\n' +
        '  iframeContainerElement = null;\n' +
        '  containerElement = null;\n' +
        '}\n' +
        '/**\n' +
        ' * @param {string} type\n' +
        ' * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\n' +
        ' * @returns {{ header: string, body: string }}\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function formatProblem(type, item) {\n' +
        '  var header = type === "warning" ? "WARNING" : "ERROR";\n' +
        '  var body = "";\n' +
        '\n' +
        '  if (typeof item === "string") {\n' +
        '    body += item;\n' +
        '  } else {\n' +
        '    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary\n' +
        '\n' +
        '    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\\s|\\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";\n' +
        '    var loc = item.loc;\n' +
        '    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");\n' +
        '    body += item.message || "";\n' +
        '  }\n' +
        '\n' +
        '  return {\n' +
        '    header: header,\n' +
        '    body: body\n' +
        '  };\n' +
        '} // Compilation with errors (e.g. syntax error or missing modules).\n' +
        '\n' +
        '/**\n' +
        ' * @param {string} type\n' +
        ' * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\n' +
        ' */\n' +
        '\n' +
        '\n' +
        'function show(type, messages) {\n' +
        '  ensureOverlayExists(function () {\n' +
        '    messages.forEach(function (message) {\n' +
        '      var entryElement = document.createElement("div");\n' +
        '      var typeElement = document.createElement("span");\n' +
        '\n' +
        '      var _formatProblem = formatProblem(type, message),\n' +
        '          header = _formatProblem.header,\n' +
        '          body = _formatProblem.body;\n' +
        '\n' +
        '      typeElement.innerText = header;\n' +
        '      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.\n' +
        '\n' +
        '      var text = ansiHTML(encode(body));\n' +
        '      var messageTextNode = document.createElement("div");\n' +
        '      messageTextNode.innerHTML = text;\n' +
        '      entryElement.appendChild(typeElement);\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(messageTextNode);\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      entryElement.appendChild(document.createElement("br"));\n' +
        '      /** @type {HTMLDivElement} */\n' +
        '\n' +
        '      containerElement.appendChild(entryElement);\n' +
        '    });\n' +
        '  });\n' +
        '}\n' +
        '\n' +
        'export { formatProblem, show, hide };',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 243,
      end: 286,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/overlay.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/overlay.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/overlay.js',
    __innerRequest: './client/overlay.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: '// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n' +
      '// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n' +
      'import ansiHTML from "ansi-html-community";\n' +
      'import { encode } from "html-entities";\n' +
      'var colors = {\n' +
      '  reset: ["transparent", "transparent"],\n' +
      '  black: "181818",\n' +
      '  red: "E36049",\n' +
      '  green: "B3CB74",\n' +
      '  yellow: "FFD080",\n' +
      '  blue: "7CAFC2",\n' +
      '  magenta: "7FACCA",\n' +
      '  cyan: "C3C2EF",\n' +
      '  lightgrey: "EBE7E3",\n' +
      '  darkgrey: "6D7891"\n' +
      '};\n' +
      '/** @type {HTMLIFrameElement | null | undefined} */\n' +
      '\n' +
      'var iframeContainerElement;\n' +
      '/** @type {HTMLDivElement | null | undefined} */\n' +
      '\n' +
      'var containerElement;\n' +
      '/** @type {Array<(element: HTMLDivElement) => void>} */\n' +
      '\n' +
      'var onLoadQueue = [];\n' +
      'ansiHTML.setColors(colors);\n' +
      '\n' +
      'function createContainer() {\n' +
      '  iframeContainerElement = document.createElement("iframe");\n' +
      '  iframeContainerElement.id = "webpack-dev-server-client-overlay";\n' +
      '  iframeContainerElement.src = "about:blank";\n' +
      '  iframeContainerElement.style.position = "fixed";\n' +
      '  iframeContainerElement.style.left = 0;\n' +
      '  iframeContainerElement.style.top = 0;\n' +
      '  iframeContainerElement.style.right = 0;\n' +
      '  iframeContainerElement.style.bottom = 0;\n' +
      '  iframeContainerElement.style.width = "100vw";\n' +
      '  iframeContainerElement.style.height = "100vh";\n' +
      '  iframeContainerElement.style.border = "none";\n' +
      '  iframeContainerElement.style.zIndex = 9999999999;\n' +
      '\n' +
      '  iframeContainerElement.onload = function () {\n' +
      '    containerElement =\n' +
      '    /** @type {Document} */\n' +
      '\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '    iframeContainerElement.contentDocument.createElement("div");\n' +
      '    containerElement.id = "webpack-dev-server-client-overlay-div";\n' +
      '    containerElement.style.position = "fixed";\n' +
      '    containerElement.style.boxSizing = "border-box";\n' +
      '    containerElement.style.left = 0;\n' +
      '    containerElement.style.top = 0;\n' +
      '    containerElement.style.right = 0;\n' +
      '    containerElement.style.bottom = 0;\n' +
      '    containerElement.style.width = "100vw";\n' +
      '    containerElement.style.height = "100vh";\n' +
      '    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";\n' +
      '    containerElement.style.color = "#E8E8E8";\n' +
      '    containerElement.style.fontFamily = "Menlo, Consolas, monospace";\n' +
      '    containerElement.style.fontSize = "large";\n' +
      '    containerElement.style.padding = "2rem";\n' +
      '    containerElement.style.lineHeight = "1.2";\n' +
      '    containerElement.style.whiteSpace = "pre-wrap";\n' +
      '    containerElement.style.overflow = "auto";\n' +
      '    var headerElement = document.createElement("span");\n' +
      '    headerElement.innerText = "Compiled with problems:";\n' +
      '    var closeButtonElement = document.createElement("button");\n' +
      '    closeButtonElement.innerText = "X";\n' +
      '    closeButtonElement.style.background = "transparent";\n' +
      '    closeButtonElement.style.border = "none";\n' +
      '    closeButtonElement.style.fontSize = "20px";\n' +
      '    closeButtonElement.style.fontWeight = "bold";\n' +
      '    closeButtonElement.style.color = "white";\n' +
      '    closeButtonElement.style.cursor = "pointer";\n' +
      '    closeButtonElement.style.cssFloat = "right"; // @ts-ignore\n' +
      '\n' +
      '    closeButtonElement.style.styleFloat = "right";\n' +
      '    closeButtonElement.addEventListener("click", function () {\n' +
      '      hide();\n' +
      '    });\n' +
      '    containerElement.appendChild(headerElement);\n' +
      '    containerElement.appendChild(closeButtonElement);\n' +
      '    containerElement.appendChild(document.createElement("br"));\n' +
      '    containerElement.appendChild(document.createElement("br"));\n' +
      '    /** @type {Document} */\n' +
      '\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n' +
      '    onLoadQueue.forEach(function (onLoad) {\n' +
      '      onLoad(\n' +
      '      /** @type {HTMLDivElement} */\n' +
      '      containerElement);\n' +
      '    });\n' +
      '    onLoadQueue = [];\n' +
      '    /** @type {HTMLIFrameElement} */\n' +
      '\n' +
      '    iframeContainerElement.onload = null;\n' +
      '  };\n' +
      '\n' +
      '  document.body.appendChild(iframeContainerElement);\n' +
      '}\n' +
      '/**\n' +
      ' * @param {(element: HTMLDivElement) => void} callback\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function ensureOverlayExists(callback) {\n' +
      '  if (containerElement) {\n' +
      '    // Everything is ready, call the callback right away.\n' +
      '    callback(containerElement);\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  onLoadQueue.push(callback);\n' +
      '\n' +
      '  if (iframeContainerElement) {\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  createContainer();\n' +
      '} // Successful compilation.\n' +
      '\n' +
      '\n' +
      'function hide() {\n' +
      '  if (!iframeContainerElement) {\n' +
      '    return;\n' +
      '  } // Clean up and reset internal state.\n' +
      '\n' +
      '\n' +
      '  document.body.removeChild(iframeContainerElement);\n' +
      '  iframeContainerElement = null;\n' +
      '  containerElement = null;\n' +
      '}\n' +
      '/**\n' +
      ' * @param {string} type\n' +
      ' * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\n' +
      ' * @returns {{ header: string, body: string }}\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function formatProblem(type, item) {\n' +
      '  var header = type === "warning" ? "WARNING" : "ERROR";\n' +
      '  var body = "";\n' +
      '\n' +
      '  if (typeof item === "string") {\n' +
      '    body += item;\n' +
      '  } else {\n' +
      '    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary\n' +
      '\n' +
      '    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\\s|\\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";\n' +
      '    var loc = item.loc;\n' +
      '    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");\n' +
      '    body += item.message || "";\n' +
      '  }\n' +
      '\n' +
      '  return {\n' +
      '    header: header,\n' +
      '    body: body\n' +
      '  };\n' +
      '} // Compilation with errors (e.g. syntax error or missing modules).\n' +
      '\n' +
      '/**\n' +
      ' * @param {string} type\n' +
      ' * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\n' +
      ' */\n' +
      '\n' +
      '\n' +
      'function show(type, messages) {\n' +
      '  ensureOverlayExists(function () {\n' +
      '    messages.forEach(function (message) {\n' +
      '      var entryElement = document.createElement("div");\n' +
      '      var typeElement = document.createElement("span");\n' +
      '\n' +
      '      var _formatProblem = formatProblem(type, message),\n' +
      '          header = _formatProblem.header,\n' +
      '          body = _formatProblem.body;\n' +
      '\n' +
      '      typeElement.innerText = header;\n' +
      '      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.\n' +
      '\n' +
      '      var text = ansiHTML(encode(body));\n' +
      '      var messageTextNode = document.createElement("div");\n' +
      '      messageTextNode.innerHTML = text;\n' +
      '      entryElement.appendChild(typeElement);\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(messageTextNode);\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      entryElement.appendChild(document.createElement("br"));\n' +
      '      /** @type {HTMLDivElement} */\n' +
      '\n' +
      '      containerElement.appendChild(entryElement);\n' +
      '    });\n' +
      '  });\n' +
      '}\n' +
      '\n' +
      'export { formatProblem, show, hide };',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/overlay.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./getCurrentScriptSource.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils',
  layer: null,
  needId: true,
  debugId: 1008,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/parseURL.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/parseURL.js',
  rawRequest: './utils/parseURL.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import getCurrentScriptSource from "./getCurrentScriptSource.js";\n' +
        '/**\n' +
        ' * @param {string} resourceQuery\n' +
        ' * @returns {{ [key: string]: string | boolean }}\n' +
        ' */\n' +
        '\n' +
        'function parseURL(resourceQuery) {\n' +
        '  /** @type {{ [key: string]: string }} */\n' +
        '  var options = {};\n' +
        '\n' +
        '  if (typeof resourceQuery === "string" && resourceQuery !== "") {\n' +
        '    var searchParams = resourceQuery.substr(1).split("&");\n' +
        '\n' +
        '    for (var i = 0; i < searchParams.length; i++) {\n' +
        '      var pair = searchParams[i].split("=");\n' +
        '      options[pair[0]] = decodeURIComponent(pair[1]);\n' +
        '    }\n' +
        '  } else {\n' +
        '    // Else, get the url from the <script> this file was called with.\n' +
        '    var scriptSource = getCurrentScriptSource();\n' +
        '    var scriptSourceURL;\n' +
        '\n' +
        '    try {\n' +
        '      // The placeholder `baseURL` with `window.location.href`,\n' +
        '      // is to allow parsing of path-relative or protocol-relative URLs,\n' +
        '      // and will have no effect if `scriptSource` is a fully valid URL.\n' +
        '      scriptSourceURL = new URL(scriptSource, self.location.href);\n' +
        '    } catch (error) {// URL parsing failed, do nothing.\n' +
        '      // We will still proceed to see if we can recover using `resourceQuery`\n' +
        '    }\n' +
        '\n' +
        '    if (scriptSourceURL) {\n' +
        '      options = scriptSourceURL;\n' +
        '      options.fromCurrentScript = true;\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  return options;\n' +
        '}\n' +
        '\n' +
        'export default parseURL;',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/parseURL.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/parseURL.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/utils/parseURL.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/utils/parseURL.js',
    __innerRequest: './client/utils/parseURL.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: 'import getCurrentScriptSource from "./getCurrentScriptSource.js";\n' +
      '/**\n' +
      ' * @param {string} resourceQuery\n' +
      ' * @returns {{ [key: string]: string | boolean }}\n' +
      ' */\n' +
      '\n' +
      'function parseURL(resourceQuery) {\n' +
      '  /** @type {{ [key: string]: string }} */\n' +
      '  var options = {};\n' +
      '\n' +
      '  if (typeof resourceQuery === "string" && resourceQuery !== "") {\n' +
      '    var searchParams = resourceQuery.substr(1).split("&");\n' +
      '\n' +
      '    for (var i = 0; i < searchParams.length; i++) {\n' +
      '      var pair = searchParams[i].split("=");\n' +
      '      options[pair[0]] = decodeURIComponent(pair[1]);\n' +
      '    }\n' +
      '  } else {\n' +
      '    // Else, get the url from the <script> this file was called with.\n' +
      '    var scriptSource = getCurrentScriptSource();\n' +
      '    var scriptSourceURL;\n' +
      '\n' +
      '    try {\n' +
      '      // The placeholder `baseURL` with `window.location.href`,\n' +
      '      // is to allow parsing of path-relative or protocol-relative URLs,\n' +
      '      // and will have no effect if `scriptSource` is a fully valid URL.\n' +
      '      scriptSourceURL = new URL(scriptSource, self.location.href);\n' +
      '    } catch (error) {// URL parsing failed, do nothing.\n' +
      '      // We will still proceed to see if we can recover using `resourceQuery`\n' +
      '    }\n' +
      '\n' +
      '    if (scriptSourceURL) {\n' +
      '      options = scriptSourceURL;\n' +
      '      options.fromCurrentScript = true;\n' +
      '    }\n' +
      '  }\n' +
      '\n' +
      '  return options;\n' +
      '}\n' +
      '\n' +
      'export default parseURL;',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/utils/parseURL.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ../modules/logger/index.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils',
  layer: null,
  needId: true,
  debugId: 1009,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/log.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/log.js',
  rawRequest: './utils/log.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import logger from "../modules/logger/index.js";\n' +
        'var name = "webpack-dev-server"; // default level is set on the client side, so it does not need\n' +
        '// to be set by the CLI or API\n' +
        '\n' +
        'var defaultLevel = "info"; // options new options, merge with old options\n' +
        '\n' +
        '/**\n' +
        ' * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level\n' +
        ' * @returns {void}\n' +
        ' */\n' +
        '\n' +
        'function setLogLevel(level) {\n' +
        '  logger.configureDefaultLogger({\n' +
        '    level: level\n' +
        '  });\n' +
        '}\n' +
        '\n' +
        'setLogLevel(defaultLevel);\n' +
        'var log = logger.getLogger(name);\n' +
        'export { log, setLogLevel };',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [ [Object], [Object], [Object], [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/log.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/log.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/utils/log.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/utils/log.js',
    __innerRequest: './client/utils/log.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: 'import logger from "../modules/logger/index.js";\n' +
      'var name = "webpack-dev-server"; // default level is set on the client side, so it does not need\n' +
      '// to be set by the CLI or API\n' +
      '\n' +
      'var defaultLevel = "info"; // options new options, merge with old options\n' +
      '\n' +
      '/**\n' +
      ' * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level\n' +
      ' * @returns {void}\n' +
      ' */\n' +
      '\n' +
      'function setLogLevel(level) {\n' +
      '  logger.configureDefaultLogger({\n' +
      '    level: level\n' +
      '  });\n' +
      '}\n' +
      '\n' +
      'setLogLevel(defaultLevel);\n' +
      'var log = logger.getLogger(name);\n' +
      'export { log, setLogLevel };',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/utils/log.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  webpack/hot/emitter.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils',
  layer: null,
  needId: true,
  debugId: 1012,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  rawRequest: './utils/reloadApp.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import hotEmitter from "webpack/hot/emitter.js";\n' +
        'import { log } from "./log.js";\n' +
        '/** @typedef {import("../index").Options} Options\n' +
        '/** @typedef {import("../index").Status} Status\n' +
        '\n' +
        '/**\n' +
        ' * @param {Options} options\n' +
        ' * @param {Status} status\n' +
        ' */\n' +
        '\n' +
        'function reloadApp(_ref, status) {\n' +
        '  var hot = _ref.hot,\n' +
        '      liveReload = _ref.liveReload;\n' +
        '\n' +
        '  if (status.isUnloading) {\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  var currentHash = status.currentHash,\n' +
        '      previousHash = status.previousHash;\n' +
        '  var isInitial = currentHash.indexOf(\n' +
        '  /** @type {string} */\n' +
        '  previousHash) >= 0;\n' +
        '\n' +
        '  if (isInitial) {\n' +
        '    return;\n' +
        '  }\n' +
        '  /**\n' +
        '   * @param {Window} rootWindow\n' +
        '   * @param {number} intervalId\n' +
        '   */\n' +
        '\n' +
        '\n' +
        '  function applyReload(rootWindow, intervalId) {\n' +
        '    clearInterval(intervalId);\n' +
        '    log.info("App updated. Reloading...");\n' +
        '    rootWindow.location.reload();\n' +
        '  }\n' +
        '\n' +
        '  var search = self.location.search.toLowerCase();\n' +
        '  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;\n' +
        '  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;\n' +
        '\n' +
        '  if (hot && allowToHot) {\n' +
        '    log.info("App hot update...");\n' +
        '    hotEmitter.emit("webpackHotUpdate", status.currentHash);\n' +
        '\n' +
        '    if (typeof self !== "undefined" && self.window) {\n' +
        '      // broadcast update to window\n' +
        '      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");\n' +
        '    }\n' +
        "  } // allow refreshing the page only if liveReload isn't disabled\n" +
        '  else if (liveReload && allowToLiveReload) {\n' +
        "    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n" +
        '\n' +
        '    var intervalId = self.setInterval(function () {\n' +
        '      if (rootWindow.location.protocol !== "about:") {\n' +
        '        // reload immediately if protocol is valid\n' +
        '        applyReload(rootWindow, intervalId);\n' +
        '      } else {\n' +
        '        rootWindow = rootWindow.parent;\n' +
        '\n' +
        '        if (rootWindow.parent === rootWindow) {\n' +
        "          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n" +
        '          applyReload(rootWindow, intervalId);\n' +
        '        }\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export default reloadApp;',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/utils/reloadApp.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/utils/reloadApp.js',
    __innerRequest: './client/utils/reloadApp.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: 'import hotEmitter from "webpack/hot/emitter.js";\n' +
      'import { log } from "./log.js";\n' +
      '/** @typedef {import("../index").Options} Options\n' +
      '/** @typedef {import("../index").Status} Status\n' +
      '\n' +
      '/**\n' +
      ' * @param {Options} options\n' +
      ' * @param {Status} status\n' +
      ' */\n' +
      '\n' +
      'function reloadApp(_ref, status) {\n' +
      '  var hot = _ref.hot,\n' +
      '      liveReload = _ref.liveReload;\n' +
      '\n' +
      '  if (status.isUnloading) {\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  var currentHash = status.currentHash,\n' +
      '      previousHash = status.previousHash;\n' +
      '  var isInitial = currentHash.indexOf(\n' +
      '  /** @type {string} */\n' +
      '  previousHash) >= 0;\n' +
      '\n' +
      '  if (isInitial) {\n' +
      '    return;\n' +
      '  }\n' +
      '  /**\n' +
      '   * @param {Window} rootWindow\n' +
      '   * @param {number} intervalId\n' +
      '   */\n' +
      '\n' +
      '\n' +
      '  function applyReload(rootWindow, intervalId) {\n' +
      '    clearInterval(intervalId);\n' +
      '    log.info("App updated. Reloading...");\n' +
      '    rootWindow.location.reload();\n' +
      '  }\n' +
      '\n' +
      '  var search = self.location.search.toLowerCase();\n' +
      '  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;\n' +
      '  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;\n' +
      '\n' +
      '  if (hot && allowToHot) {\n' +
      '    log.info("App hot update...");\n' +
      '    hotEmitter.emit("webpackHotUpdate", status.currentHash);\n' +
      '\n' +
      '    if (typeof self !== "undefined" && self.window) {\n' +
      '      // broadcast update to window\n' +
      '      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");\n' +
      '    }\n' +
      "  } // allow refreshing the page only if liveReload isn't disabled\n" +
      '  else if (liveReload && allowToLiveReload) {\n' +
      "    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n" +
      '\n' +
      '    var intervalId = self.setInterval(function () {\n' +
      '      if (rootWindow.location.protocol !== "about:") {\n' +
      '        // reload immediately if protocol is valid\n' +
      '        applyReload(rootWindow, intervalId);\n' +
      '      } else {\n' +
      '        rootWindow = rootWindow.parent;\n' +
      '\n' +
      '        if (rootWindow.parent === rootWindow) {\n' +
      "          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n" +
      '          applyReload(rootWindow, intervalId);\n' +
      '        }\n' +
      '      }\n' +
      '    });\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'export default reloadApp;',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/utils/reloadApp.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./log.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 48,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: 'webpack/hot/emitter.js',
      userRequest: 'webpack/hot/emitter.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils',
  layer: null,
  needId: true,
  debugId: 1012,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 48,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  rawRequest: './utils/reloadApp.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import hotEmitter from "webpack/hot/emitter.js";\n' +
        'import { log } from "./log.js";\n' +
        '/** @typedef {import("../index").Options} Options\n' +
        '/** @typedef {import("../index").Status} Status\n' +
        '\n' +
        '/**\n' +
        ' * @param {Options} options\n' +
        ' * @param {Status} status\n' +
        ' */\n' +
        '\n' +
        'function reloadApp(_ref, status) {\n' +
        '  var hot = _ref.hot,\n' +
        '      liveReload = _ref.liveReload;\n' +
        '\n' +
        '  if (status.isUnloading) {\n' +
        '    return;\n' +
        '  }\n' +
        '\n' +
        '  var currentHash = status.currentHash,\n' +
        '      previousHash = status.previousHash;\n' +
        '  var isInitial = currentHash.indexOf(\n' +
        '  /** @type {string} */\n' +
        '  previousHash) >= 0;\n' +
        '\n' +
        '  if (isInitial) {\n' +
        '    return;\n' +
        '  }\n' +
        '  /**\n' +
        '   * @param {Window} rootWindow\n' +
        '   * @param {number} intervalId\n' +
        '   */\n' +
        '\n' +
        '\n' +
        '  function applyReload(rootWindow, intervalId) {\n' +
        '    clearInterval(intervalId);\n' +
        '    log.info("App updated. Reloading...");\n' +
        '    rootWindow.location.reload();\n' +
        '  }\n' +
        '\n' +
        '  var search = self.location.search.toLowerCase();\n' +
        '  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;\n' +
        '  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;\n' +
        '\n' +
        '  if (hot && allowToHot) {\n' +
        '    log.info("App hot update...");\n' +
        '    hotEmitter.emit("webpackHotUpdate", status.currentHash);\n' +
        '\n' +
        '    if (typeof self !== "undefined" && self.window) {\n' +
        '      // broadcast update to window\n' +
        '      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");\n' +
        '    }\n' +
        "  } // allow refreshing the page only if liveReload isn't disabled\n" +
        '  else if (liveReload && allowToLiveReload) {\n' +
        "    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n" +
        '\n' +
        '    var intervalId = self.setInterval(function () {\n' +
        '      if (rootWindow.location.protocol !== "about:") {\n' +
        '        // reload immediately if protocol is valid\n' +
        '        applyReload(rootWindow, intervalId);\n' +
        '      } else {\n' +
        '        rootWindow = rootWindow.parent;\n' +
        '\n' +
        '        if (rootWindow.parent === rootWindow) {\n' +
        "          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n" +
        '          applyReload(rootWindow, intervalId);\n' +
        '        }\n' +
        '      }\n' +
        '    });\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export default reloadApp;',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 48,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/index.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/utils/reloadApp.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/utils/reloadApp.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/utils/reloadApp.js',
    __innerRequest: './client/utils/reloadApp.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: 'import hotEmitter from "webpack/hot/emitter.js";\n' +
      'import { log } from "./log.js";\n' +
      '/** @typedef {import("../index").Options} Options\n' +
      '/** @typedef {import("../index").Status} Status\n' +
      '\n' +
      '/**\n' +
      ' * @param {Options} options\n' +
      ' * @param {Status} status\n' +
      ' */\n' +
      '\n' +
      'function reloadApp(_ref, status) {\n' +
      '  var hot = _ref.hot,\n' +
      '      liveReload = _ref.liveReload;\n' +
      '\n' +
      '  if (status.isUnloading) {\n' +
      '    return;\n' +
      '  }\n' +
      '\n' +
      '  var currentHash = status.currentHash,\n' +
      '      previousHash = status.previousHash;\n' +
      '  var isInitial = currentHash.indexOf(\n' +
      '  /** @type {string} */\n' +
      '  previousHash) >= 0;\n' +
      '\n' +
      '  if (isInitial) {\n' +
      '    return;\n' +
      '  }\n' +
      '  /**\n' +
      '   * @param {Window} rootWindow\n' +
      '   * @param {number} intervalId\n' +
      '   */\n' +
      '\n' +
      '\n' +
      '  function applyReload(rootWindow, intervalId) {\n' +
      '    clearInterval(intervalId);\n' +
      '    log.info("App updated. Reloading...");\n' +
      '    rootWindow.location.reload();\n' +
      '  }\n' +
      '\n' +
      '  var search = self.location.search.toLowerCase();\n' +
      '  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;\n' +
      '  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;\n' +
      '\n' +
      '  if (hot && allowToHot) {\n' +
      '    log.info("App hot update...");\n' +
      '    hotEmitter.emit("webpackHotUpdate", status.currentHash);\n' +
      '\n' +
      '    if (typeof self !== "undefined" && self.window) {\n' +
      '      // broadcast update to window\n' +
      '      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");\n' +
      '    }\n' +
      "  } // allow refreshing the page only if liveReload isn't disabled\n" +
      '  else if (liveReload && allowToLiveReload) {\n' +
      "    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n" +
      '\n' +
      '    var intervalId = self.setInterval(function () {\n' +
      '      if (rootWindow.location.protocol !== "about:") {\n' +
      '        // reload immediately if protocol is valid\n' +
      '        applyReload(rootWindow, intervalId);\n' +
      '      } else {\n' +
      '        rootWindow = rootWindow.parent;\n' +
      '\n' +
      '        if (rootWindow.parent === rootWindow) {\n' +
      "          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n" +
      '          applyReload(rootWindow, intervalId);\n' +
      '        }\n' +
      '      }\n' +
      '    });\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'export default reloadApp;',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/utils/reloadApp.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ../utils/log.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/clients',
  layer: null,
  needId: true,
  debugId: 1020,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: undefined,
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/clients/WebSocketClient.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/clients/WebSocketClient.js',
  rawRequest: './clients/WebSocketClient.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n' +
        '\n' +
        'function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n' +
        '\n' +
        'function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n' +
        '\n' +
        'import { log } from "../utils/log.js";\n' +
        '\n' +
        'var WebSocketClient = /*#__PURE__*/function () {\n' +
        '  /**\n' +
        '   * @param {string} url\n' +
        '   */\n' +
        '  function WebSocketClient(url) {\n' +
        '    _classCallCheck(this, WebSocketClient);\n' +
        '\n' +
        '    this.client = new WebSocket(url);\n' +
        '\n' +
        '    this.client.onerror = function (error) {\n' +
        '      log.error(error);\n' +
        '    };\n' +
        '  }\n' +
        '  /**\n' +
        '   * @param {(...args: any[]) => void} f\n' +
        '   */\n' +
        '\n' +
        '\n' +
        '  _createClass(WebSocketClient, [{\n' +
        '    key: "onOpen",\n' +
        '    value: function onOpen(f) {\n' +
        '      this.client.onopen = f;\n' +
        '    }\n' +
        '    /**\n' +
        '     * @param {(...args: any[]) => void} f\n' +
        '     */\n' +
        '\n' +
        '  }, {\n' +
        '    key: "onClose",\n' +
        '    value: function onClose(f) {\n' +
        '      this.client.onclose = f;\n' +
        '    } // call f with the message string as the first argument\n' +
        '\n' +
        '    /**\n' +
        '     * @param {(...args: any[]) => void} f\n' +
        '     */\n' +
        '\n' +
        '  }, {\n' +
        '    key: "onMessage",\n' +
        '    value: function onMessage(f) {\n' +
        '      this.client.onmessage = function (e) {\n' +
        '        f(e.data);\n' +
        '      };\n' +
        '    }\n' +
        '  }]);\n' +
        '\n' +
        '  return WebSocketClient;\n' +
        '}();\n' +
        '\n' +
        'export { WebSocketClient as default };',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'FunctionDeclaration',
      start: 474,
      end: 759,
      loc: [SourceLocation],
      range: [Array],
      id: [Node],
      expression: false,
      generator: false,
      async: false,
      params: [Array],
      body: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/clients/WebSocketClient.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/socket.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/client/clients/WebSocketClient.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server/package.json',
    descriptionFileData: {
      name: 'webpack-dev-server',
      version: '4.7.2',
      description: 'Serves a webpack app. Updates the browser on changes.',
      bin: 'bin/webpack-dev-server.js',
      main: 'lib/Server.js',
      types: 'types/lib/Server.d.ts',
      files: [Array],
      engines: [Object],
      scripts: [Object],
      dependencies: [Object],
      devDependencies: [Object],
      peerDependencies: [Object],
      peerDependenciesMeta: [Object],
      author: 'Tobias Koppers @sokra',
      bugs: 'https://github.com/webpack/webpack-dev-server/issues',
      homepage: 'https://github.com/webpack/webpack-dev-server#readme',
      repository: 'https://github.com/webpack/webpack-dev-server.git',
      license: 'MIT'
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder/node_modules/webpack-dev-server',
    relativePath: './client/clients/WebSocketClient.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './client/clients/WebSocketClient.js',
    __innerRequest: './client/clients/WebSocketClient.js'
  },
  matchResource: undefined,
  loaders: [],
  error: null,
  _source: OriginalSource {
    _value: 'function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n' +
      '\n' +
      'function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n' +
      '\n' +
      'function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n' +
      '\n' +
      'import { log } from "../utils/log.js";\n' +
      '\n' +
      'var WebSocketClient = /*#__PURE__*/function () {\n' +
      '  /**\n' +
      '   * @param {string} url\n' +
      '   */\n' +
      '  function WebSocketClient(url) {\n' +
      '    _classCallCheck(this, WebSocketClient);\n' +
      '\n' +
      '    this.client = new WebSocket(url);\n' +
      '\n' +
      '    this.client.onerror = function (error) {\n' +
      '      log.error(error);\n' +
      '    };\n' +
      '  }\n' +
      '  /**\n' +
      '   * @param {(...args: any[]) => void} f\n' +
      '   */\n' +
      '\n' +
      '\n' +
      '  _createClass(WebSocketClient, [{\n' +
      '    key: "onOpen",\n' +
      '    value: function onOpen(f) {\n' +
      '      this.client.onopen = f;\n' +
      '    }\n' +
      '    /**\n' +
      '     * @param {(...args: any[]) => void} f\n' +
      '     */\n' +
      '\n' +
      '  }, {\n' +
      '    key: "onClose",\n' +
      '    value: function onClose(f) {\n' +
      '      this.client.onclose = f;\n' +
      '    } // call f with the message string as the first argument\n' +
      '\n' +
      '    /**\n' +
      '     * @param {(...args: any[]) => void} f\n' +
      '     */\n' +
      '\n' +
      '  }, {\n' +
      '    key: "onMessage",\n' +
      '    value: function onMessage(f) {\n' +
      '      this.client.onmessage = function (e) {\n' +
      '        f(e.data);\n' +
      '      };\n' +
      '    }\n' +
      '  }]);\n' +
      '\n' +
      '  return WebSocketClient;\n' +
      '}();\n' +
      '\n' +
      'export { WebSocketClient as default };',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/webpack-dev-server/client/clients/WebSocketClient.js'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./header.scss
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson/header',
  layer: null,
  needId: true,
  debugId: 1021,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  rawRequest: './header/header.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import "./header.scss";\n' +
        'import "./header.html"; //import "./nav.html";\n' +
        '\n' +
        'import "./topbar.html";',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [ [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/header/header.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/header/header.js',
    __innerRequest: './src/appson/header/header.js'
  },
  matchResource: undefined,
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[0].use'
    }
  ],
  error: null,
  _source: SourceMapSource {
    _valueAsString: 'import "./header.scss";\n' +
      'import "./header.html"; //import "./nav.html";\n' +
      '\n' +
      'import "./topbar.html";',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/appson/header/header.js',
    _hasSourceMap: true,
    _sourceMapAsObject: {
      version: 3,
      sources: [Array],
      names: [],
      mappings: 'AAAA,OAAO,eAAP;AACA,OAAO,eAAP,C,CACA;;AACA,OAAO,eAAP',
      sourcesContent: [Array],
      file: 'x',
      sourceRoot: undefined
    },
    _sourceMapAsString: undefined,
    _sourceMapAsBuffer: undefined,
    _hasOriginalSource: false,
    _originalSourceAsString: undefined,
    _originalSourceAsBuffer: undefined,
    _hasInnerSourceMap: false,
    _innerSourceMapAsObject: undefined,
    _innerSourceMapAsString: undefined,
    _innerSourceMapAsBuffer: undefined,
    _removeOriginalSource: undefined
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./header.html
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './header.scss',
      userRequest: './header.scss',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson/header',
  layer: null,
  needId: true,
  debugId: 1021,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  rawRequest: './header/header.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import "./header.scss";\n' +
        'import "./header.html"; //import "./nav.html";\n' +
        '\n' +
        'import "./topbar.html";',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [ [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 0,
      end: 23,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/header/header.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/header/header.js',
    __innerRequest: './src/appson/header/header.js'
  },
  matchResource: undefined,
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[0].use'
    }
  ],
  error: null,
  _source: SourceMapSource {
    _valueAsString: 'import "./header.scss";\n' +
      'import "./header.html"; //import "./nav.html";\n' +
      '\n' +
      'import "./topbar.html";',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/appson/header/header.js',
    _hasSourceMap: true,
    _sourceMapAsObject: {
      version: 3,
      sources: [Array],
      names: [],
      mappings: 'AAAA,OAAO,eAAP;AACA,OAAO,eAAP,C,CACA;;AACA,OAAO,eAAP',
      sourcesContent: [Array],
      file: 'x',
      sourceRoot: undefined
    },
    _sourceMapAsString: undefined,
    _sourceMapAsBuffer: undefined,
    _hasOriginalSource: false,
    _originalSourceAsString: undefined,
    _originalSourceAsBuffer: undefined,
    _hasInnerSourceMap: false,
    _innerSourceMapAsObject: undefined,
    _innerSourceMapAsString: undefined,
    _innerSourceMapAsBuffer: undefined,
    _removeOriginalSource: undefined
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ./topbar.html
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './header.scss',
      userRequest: './header.scss',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    },
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: './header.html',
      userRequest: './header.html',
      range: undefined,
      assertions: undefined,
      sourceOrder: 2
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson/header',
  layer: null,
  needId: true,
  debugId: 1021,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 1,
      _locSC: 0,
      _locEL: 1,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 23,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  rawRequest: './header/header.js',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: 'import "./header.scss";\n' +
        'import "./header.html"; //import "./nav.html";\n' +
        '\n' +
        'import "./topbar.html";',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 2
    },
    comments: [ [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 24,
      end: 47,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/src/appson/appson.js',
      issuerLayer: null,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.js',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/header/header.js',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/header/header.js',
    __innerRequest: './src/appson/header/header.js'
  },
  matchResource: undefined,
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/babel-loader/lib/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[0].use'
    }
  ],
  error: null,
  _source: SourceMapSource {
    _valueAsString: 'import "./header.scss";\n' +
      'import "./header.html"; //import "./nav.html";\n' +
      '\n' +
      'import "./topbar.html";',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/appson/header/header.js',
    _hasSourceMap: true,
    _sourceMapAsObject: {
      version: 3,
      sources: [Array],
      names: [],
      mappings: 'AAAA,OAAO,eAAP;AACA,OAAO,eAAP,C,CACA;;AACA,OAAO,eAAP',
      sourcesContent: [Array],
      file: 'x',
      sourceRoot: undefined
    },
    _sourceMapAsString: undefined,
    _sourceMapAsBuffer: undefined,
    _hasOriginalSource: false,
    _originalSourceAsString: undefined,
    _originalSourceAsBuffer: undefined,
    _hasInnerSourceMap: false,
    _innerSourceMapAsObject: undefined,
    _innerSourceMapAsString: undefined,
    _innerSourceMapAsBuffer: undefined,
    _removeOriginalSource: undefined
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ../../../node_modules/css-loader/dist/runtime/sourceMaps.js
 parser.state :  NormalModule {
  dependencies: [],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson/header',
  layer: null,
  needId: true,
  debugId: 1034,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss.webpack[javascript/auto]!=!/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  rawRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss.webpack[javascript/auto]!=!!!/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '// Imports\n' +
        'import ___CSS_LOADER_API_SOURCEMAP_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/sourceMaps.js";\n' +
        'import ___CSS_LOADER_API_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/api.js";\n' +
        'var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n' +
        '// Module\n' +
        '___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);\n' +
        '// Exports\n' +
        'export default ___CSS_LOADER_EXPORT___;\n',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object]
    },
    comments: [ [Object], [Object], [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: undefined,
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
      issuerLayer: undefined,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/header/header.scss',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/header/header.scss',
    __innerRequest: './src/appson/header/header.scss'
  },
  matchResource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[1]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[2]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[3]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[4]'
    }
  ],
  error: null,
  _source: OriginalSource {
    _value: '// Imports\n' +
      'import ___CSS_LOADER_API_SOURCEMAP_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/sourceMaps.js";\n' +
      'import ___CSS_LOADER_API_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/api.js";\n' +
      'var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n' +
      '// Module\n' +
      '___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);\n' +
      '// Exports\n' +
      'export default ___CSS_LOADER_EXPORT___;\n',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./src/appson/header/header.scss'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
 source :  ../../../node_modules/css-loader/dist/runtime/api.js
 parser.state :  NormalModule {
  dependencies: [
    HarmonyImportSideEffectDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 112,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      request: '../../../node_modules/css-loader/dist/runtime/sourceMaps.js',
      userRequest: '../../../node_modules/css-loader/dist/runtime/sourceMaps.js',
      range: undefined,
      assertions: undefined,
      sourceOrder: 1
    }
  ],
  blocks: [],
  parent: undefined,
  type: 'javascript/auto',
  context: '/siteweb/AppVuejs/theme-builder/src/appson/header',
  layer: null,
  needId: true,
  debugId: 1034,
  resolveOptions: {},
  factoryMeta: undefined,
  useSourceMap: true,
  useSimpleSourceMap: false,
  _warnings: undefined,
  _errors: undefined,
  buildMeta: { exportsType: 'namespace' },
  buildInfo: {
    cacheable: true,
    parsed: true,
    fileDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    contextDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    missingDependencies: LazySet {
      _set: Set {},
      _toMerge: [Set],
      _toDeepMerge: [],
      _needMerge: true,
      _deopt: false
    },
    buildDependencies: LazySet {
      _set: [Set],
      _toMerge: Set {},
      _toDeepMerge: [],
      _needMerge: false,
      _deopt: false
    },
    valueDependencies: Map { 'webpack/DefinePlugin_hash' => '9e418625' },
    hash: undefined,
    assets: undefined,
    assetsInfo: undefined,
    strict: true,
    exportsArgument: '__webpack_exports__'
  },
  presentationalDependencies: [
    HarmonyCompatibilityDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: -1,
      _locSC: 0,
      _locEL: -1,
      _locEC: 0,
      _locI: -3,
      _locN: undefined,
      _loc: [Object]
    },
    ConstDependency {
      _parentModule: undefined,
      _parentDependenciesBlock: undefined,
      _parentDependenciesBlockIndex: -1,
      weak: false,
      optional: false,
      _locSL: 2,
      _locSC: 0,
      _locEL: 2,
      _locEC: 112,
      _locI: undefined,
      _locN: undefined,
      _loc: [SourceLocation],
      expression: '',
      range: [Array],
      runtimeRequirements: null,
      _hashUpdate: undefined
    }
  ],
  request: '/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  userRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss.webpack[javascript/auto]!=!/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  rawRequest: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss.webpack[javascript/auto]!=!!!/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  binary: false,
  parser: JavascriptParser {
    hooks: {
      evaluateTypeof: [HookMap],
      evaluate: [HookMap],
      evaluateIdentifier: [HookMap],
      evaluateDefinedIdentifier: [HookMap],
      evaluateCallExpressionMember: [HookMap],
      isPure: [HookMap],
      preStatement: [SyncBailHook],
      blockPreStatement: [SyncBailHook],
      statement: [SyncBailHook],
      statementIf: [SyncBailHook],
      classExtendsExpression: [SyncBailHook],
      classBodyElement: [SyncBailHook],
      classBodyValue: [SyncBailHook],
      label: [HookMap],
      import: [SyncBailHook],
      importSpecifier: [SyncBailHook],
      export: [SyncBailHook],
      exportImport: [SyncBailHook],
      exportDeclaration: [SyncBailHook],
      exportExpression: [SyncBailHook],
      exportSpecifier: [SyncBailHook],
      exportImportSpecifier: [SyncBailHook],
      preDeclarator: [SyncBailHook],
      declarator: [SyncBailHook],
      varDeclaration: [HookMap],
      varDeclarationLet: [HookMap],
      varDeclarationConst: [HookMap],
      varDeclarationVar: [HookMap],
      pattern: [HookMap],
      canRename: [HookMap],
      rename: [HookMap],
      assign: [HookMap],
      assignMemberChain: [HookMap],
      typeof: [HookMap],
      importCall: [SyncBailHook],
      topLevelAwait: [SyncBailHook],
      call: [HookMap],
      callMemberChain: [HookMap],
      memberChainOfCallMemberChain: [HookMap],
      callMemberChainOfCallMemberChain: [HookMap],
      optionalChaining: [SyncBailHook],
      new: [HookMap],
      expression: [HookMap],
      expressionMemberChain: [HookMap],
      unhandledExpressionMemberChain: [HookMap],
      expressionConditionalOperator: [SyncBailHook],
      expressionLogicalOperator: [SyncBailHook],
      program: [SyncBailHook],
      finish: [SyncBailHook]
    },
    sourceType: 'auto',
    scope: {
      topLevelScope: true,
      inTry: false,
      inShorthand: false,
      isStrict: true,
      isAsmJs: false,
      definitions: [StackedMap]
    },
    state: {
      source: '// Imports\n' +
        'import ___CSS_LOADER_API_SOURCEMAP_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/sourceMaps.js";\n' +
        'import ___CSS_LOADER_API_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/api.js";\n' +
        'var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n' +
        '// Module\n' +
        '___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);\n' +
        '// Exports\n' +
        'export default ___CSS_LOADER_EXPORT___;\n',
      current: [Circular],
      module: [Circular],
      compilation: [Compilation],
      options: [Object],
      lastHarmonyImportOrder: 1
    },
    comments: [ [Object], [Object], [Object] ],
    semicolons: Set {},
    statementPath: [ [Node] ],
    prevStatement: Node {
      type: 'ImportDeclaration',
      start: 11,
      end: 123,
      loc: [SourceLocation],
      range: [Array],
      specifiers: [Array],
      source: [Node]
    },
    currentTagData: undefined
  },
  parserOptions: undefined,
  generator: JavascriptGenerator {},
  generatorOptions: undefined,
  resource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  resourceResolveData: {
    _ResolverCachePluginCacheMiss: true,
    context: {
      issuer: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
      issuerLayer: undefined,
      compiler: undefined
    },
    path: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
    request: undefined,
    query: '',
    fragment: '',
    module: false,
    directory: false,
    file: false,
    internal: false,
    fullySpecified: false,
    descriptionFilePath: '/siteweb/AppVuejs/theme-builder/package.json',
    descriptionFileData: {
      name: '@gugledas/theme-builder',
      version: '1.0.0',
      description: '',
      main: 'index.js',
      scripts: [Object],
      repository: [Object],
      keywords: [],
      author: 'gugledas',
      license: 'ISC',
      devDependencies: [Object],
      browserslist: [Array],
      dependencies: [Object]
    },
    descriptionFileRoot: '/siteweb/AppVuejs/theme-builder',
    relativePath: './src/appson/header/header.scss',
    __innerRequest_request: undefined,
    __innerRequest_relativePath: './src/appson/header/header.scss',
    __innerRequest: './src/appson/header/header.scss'
  },
  matchResource: '/siteweb/AppVuejs/theme-builder/src/appson/header/header.scss',
  loaders: [
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/css-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[1]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/postcss-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[2]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/resolve-url-loader/index.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[3]'
    },
    {
      loader: '/siteweb/AppVuejs/theme-builder/node_modules/sass-loader/dist/cjs.js',
      options: [Object],
      ident: 'ruleSet[1].rules[1].use[4]'
    }
  ],
  error: null,
  _source: OriginalSource {
    _value: '// Imports\n' +
      'import ___CSS_LOADER_API_SOURCEMAP_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/sourceMaps.js";\n' +
      'import ___CSS_LOADER_API_IMPORT___ from "../../../node_modules/css-loader/dist/runtime/api.js";\n' +
      'var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);\n' +
      '// Module\n' +
      '___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);\n' +
      '// Exports\n' +
      'export default ___CSS_LOADER_EXPORT___;\n',
    _valueAsBuffer: undefined,
    _name: 'webpack://./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./src/appson/header/header.scss'
  },
  _sourceSizes: undefined,
  _sourceTypes: undefined,
  _lastSuccessfulBuildMeta: {},
  _forceBuild: false,
  _isEvaluatingSideEffects: false,
  _addedSideEffectsBailout: undefined,
  _ast: null
}
