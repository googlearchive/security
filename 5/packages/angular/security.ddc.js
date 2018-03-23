define(['dart_sdk', 'packages/angular/src/security/dom_sanitization_service'], function(dart_sdk, dom_sanitization_service) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__security__dom_sanitization_service = dom_sanitization_service.src__security__dom_sanitization_service;
  const _root = Object.create(null);
  const src__security__safe_inner_html = Object.create(_root);
  const security = Object.create(_root);
  const $setInnerHtml = dartx.setInnerHtml;
  const _element = Symbol('_element');
  src__security__safe_inner_html.SafeInnerHtmlDirective = class SafeInnerHtmlDirective extends core.Object {
    set safeInnerHtml(safeInnerHtml) {
      if (src__security__dom_sanitization_service.SafeHtml.is(safeInnerHtml)) {
        this[_element][$setInnerHtml](dart.toString(safeInnerHtml), {treeSanitizer: html.NodeTreeSanitizer.trusted});
      } else if (safeInnerHtml == null) {
        this[_element][$setInnerHtml]('');
      } else {
        dart.throw(new core.UnsupportedError.new(dart.str`SafeHtml required (got ${safeInnerHtml})`));
      }
    }
  };
  (src__security__safe_inner_html.SafeInnerHtmlDirective.new = function(element) {
    this[_element] = element;
  }).prototype = src__security__safe_inner_html.SafeInnerHtmlDirective.prototype;
  dart.addTypeTests(src__security__safe_inner_html.SafeInnerHtmlDirective);
  dart.setSetterSignature(src__security__safe_inner_html.SafeInnerHtmlDirective, () => ({
    __proto__: dart.getSetters(src__security__safe_inner_html.SafeInnerHtmlDirective.__proto__),
    safeInnerHtml: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__security__safe_inner_html.SafeInnerHtmlDirective, () => ({
    __proto__: dart.getFields(src__security__safe_inner_html.SafeInnerHtmlDirective.__proto__),
    [_element]: dart.finalFieldType(html.Element)
  }));
  dart.trackLibraries("packages/angular/security.ddc", {
    "package:angular/src/security/safe_inner_html.dart": src__security__safe_inner_html,
    "package:angular/security.dart": security
  }, '{"version":3,"sourceRoot":"","sources":["src/security/safe_inner_html.dart"],"names":[],"mappings":";;;;;;;;;;;;;sBA0CoB,aAAa;AAC7B,8DAAI,aAAa,GAAc;AAC7B,sBAAQ,eAAa,eACnB,aAAa,mBACE,sBAAiB,QAAQ;YAErC,KAAI,aAAa,IAAI,MAAM;AAChC,sBAAQ,eAAa,CAAC;aACjB;AAOL,mBAAM,IAAI,yBAAgB,CACxB,kCAAyB,aAAa;;IAG5C;;wEAtB4B,OAAQ;IAAR,cAAQ,GAAR,OAAQ;EAAC","file":"security.ddc.js"}');
  // Exports:
  return {
    src__security__safe_inner_html: src__security__safe_inner_html,
    security: security
  };
});

//# sourceMappingURL=security.ddc.js.map
