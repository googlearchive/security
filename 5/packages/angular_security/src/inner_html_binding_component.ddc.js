define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__inner_html_binding_component = Object.create(_root);
  src__inner_html_binding_component.InnerHtmlBindingComponent = class InnerHtmlBindingComponent extends core.Object {
    get htmlSnippet() {
      return this[htmlSnippet];
    }
    set htmlSnippet(value) {
      this[htmlSnippet] = value;
    }
  };
  (src__inner_html_binding_component.InnerHtmlBindingComponent.new = function() {
    this[htmlSnippet] = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  }).prototype = src__inner_html_binding_component.InnerHtmlBindingComponent.prototype;
  dart.addTypeTests(src__inner_html_binding_component.InnerHtmlBindingComponent);
  const htmlSnippet = Symbol("InnerHtmlBindingComponent.htmlSnippet");
  dart.setFieldSignature(src__inner_html_binding_component.InnerHtmlBindingComponent, () => ({
    __proto__: dart.getFields(src__inner_html_binding_component.InnerHtmlBindingComponent.__proto__),
    htmlSnippet: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/angular_security/src/inner_html_binding_component.ddc", {
    "package:angular_security/src/inner_html_binding_component.dart": src__inner_html_binding_component
  }, '{"version":3,"sourceRoot":"","sources":["inner_html_binding_component.dart"],"names":[],"mappings":";;;;;;;;IAOM;;;;;;;;qBAAW,GAAG;EACpB","file":"inner_html_binding_component.ddc.js"}');
  // Exports:
  return {
    src__inner_html_binding_component: src__inner_html_binding_component
  };
});

//# sourceMappingURL=inner_html_binding_component.ddc.js.map
