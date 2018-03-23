define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/security/dom_sanitization_service.template'], function(dart_sdk, angular, dom_sanitization_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__security__dom_sanitization_service$46template = dom_sanitization_service.src__security__dom_sanitization_service$46template;
  const _root = Object.create(null);
  const src__security__safe_inner_html$46template = Object.create(_root);
  const security$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__security__safe_inner_html$46template, {
    /*src__security__safe_inner_html$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__security__safe_inner_html$46template.initReflector = function() {
    if (dart.test(src__security__safe_inner_html$46template._visited)) {
      return;
    }
    src__security__safe_inner_html$46template._visited = true;
    angular$46template.initReflector();
    security$46template.initReflector();
  };
  dart.fn(src__security__safe_inner_html$46template.initReflector, VoidTovoid());
  dart.defineLazy(security$46template, {
    /*security$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  security$46template.initReflector = function() {
    if (dart.test(security$46template._visited)) {
      return;
    }
    security$46template._visited = true;
    src__security__dom_sanitization_service$46template.initReflector();
    src__security__safe_inner_html$46template.initReflector();
  };
  dart.fn(security$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/security.template.ddc", {
    "package:angular/src/security/safe_inner_html.template.dart": src__security__safe_inner_html$46template,
    "package:angular/security.template.dart": security$46template
  }, '{"version":3,"sourceRoot":"","sources":["src/security/safe_inner_html.template.dart","security.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAaI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,iCAAa;EACrB;;;MCZI,4BAAQ;YAAG;;;;;AAEb,kBAAI,4BAAQ,GAAE;AACZ;;AAEF,mCAAW;AAEX,IAAM,gEAAa;AACnB,IAAM,uDAAa;EACrB","file":"security.template.ddc.js"}');
  // Exports:
  return {
    src__security__safe_inner_html$46template: src__security__safe_inner_html$46template,
    security$46template: security$46template
  };
});

//# sourceMappingURL=security.template.ddc.js.map
