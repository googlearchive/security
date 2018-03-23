define(['dart_sdk', 'packages/angular/src/security/dom_sanitization_service'], function(dart_sdk, dom_sanitization_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__security__dom_sanitization_service = dom_sanitization_service.src__security__dom_sanitization_service;
  const _root = Object.create(null);
  const src__bypass_security_component = Object.create(_root);
  src__bypass_security_component.BypassSecurityComponent = class BypassSecurityComponent extends core.Object {
    get sanitizer() {
      return this[sanitizer$];
    }
    set sanitizer(value) {
      this[sanitizer$] = value;
    }
    get dangerousUrl() {
      return this[dangerousUrl];
    }
    set dangerousUrl(value) {
      this[dangerousUrl] = value;
    }
    get trustedUrl() {
      return this[trustedUrl];
    }
    set trustedUrl(value) {
      this[trustedUrl] = value;
    }
    get dangerousVideoUrl() {
      return this[dangerousVideoUrl];
    }
    set dangerousVideoUrl(value) {
      this[dangerousVideoUrl] = value;
    }
    get videoUrl() {
      return this[videoUrl];
    }
    set videoUrl(value) {
      this[videoUrl] = value;
    }
    updateVideoUrl(id) {
      this.dangerousVideoUrl = dart.str`https://www.youtube.com/embed/${id}`;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    }
  };
  (src__bypass_security_component.BypassSecurityComponent.new = function(sanitizer) {
    this[dangerousUrl] = null;
    this[trustedUrl] = null;
    this[dangerousVideoUrl] = null;
    this[videoUrl] = null;
    this[sanitizer$] = sanitizer;
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl('javascript:alert("Hi there")');
    this.updateVideoUrl('PUBnlbjZFAI');
  }).prototype = src__bypass_security_component.BypassSecurityComponent.prototype;
  dart.addTypeTests(src__bypass_security_component.BypassSecurityComponent);
  const sanitizer$ = Symbol("BypassSecurityComponent.sanitizer");
  const dangerousUrl = Symbol("BypassSecurityComponent.dangerousUrl");
  const trustedUrl = Symbol("BypassSecurityComponent.trustedUrl");
  const dangerousVideoUrl = Symbol("BypassSecurityComponent.dangerousVideoUrl");
  const videoUrl = Symbol("BypassSecurityComponent.videoUrl");
  dart.setMethodSignature(src__bypass_security_component.BypassSecurityComponent, () => ({
    __proto__: dart.getMethods(src__bypass_security_component.BypassSecurityComponent.__proto__),
    updateVideoUrl: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__bypass_security_component.BypassSecurityComponent, () => ({
    __proto__: dart.getFields(src__bypass_security_component.BypassSecurityComponent.__proto__),
    sanitizer: dart.fieldType(src__security__dom_sanitization_service.DomSanitizationService),
    dangerousUrl: dart.fieldType(core.String),
    trustedUrl: dart.fieldType(src__security__dom_sanitization_service.SafeUrl),
    dangerousVideoUrl: dart.fieldType(core.String),
    videoUrl: dart.fieldType(src__security__dom_sanitization_service.SafeResourceUrl)
  }));
  dart.trackLibraries("packages/angular_security/src/bypass_security_component.ddc", {
    "package:angular_security/src/bypass_security_component.dart": src__bypass_security_component
  }, '{"version":3,"sourceRoot":"","sources":["bypass_security_component.dart"],"names":[],"mappings":";;;;;;;;;IAQyB;;;;;;IAChB;;;;;;IACC;;;;;;IACD;;;;;;IACS;;;;;;mBAWI,EAAS;AAK3B,4BAAiB,GAAG,yCAAgC,EAAE;AACtD,mBAAQ,GAAG,cAAS,+BAA+B,CAAC,sBAAiB;IACvE;;yEAhBwB,SAAc;IAL/B,kBAAY;IACX,gBAAU;IACX,uBAAiB;IACR,cAAQ;IAEK,gBAAS,GAAT,SAAS;AAIpC,qBAAY,GAAG;AACf,mBAAU,GACN,cAAS,uBAAuB,CAAC;AACrC,uBAAc,CAAC;EACjB","file":"bypass_security_component.ddc.js"}');
  // Exports:
  return {
    src__bypass_security_component: src__bypass_security_component
  };
});

//# sourceMappingURL=bypass_security_component.ddc.js.map
