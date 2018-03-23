define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_security/src/bypass_security_component', 'packages/angular/src/security/dom_sanitization_service', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular/security.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, bypass_security_component, dom_sanitization_service, reflector, angular, security) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__bypass_security_component = bypass_security_component.src__bypass_security_component;
  const src__security__dom_sanitization_service = dom_sanitization_service.src__security__dom_sanitization_service;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const security$46template = security.security$46template;
  const _root = Object.create(null);
  const src__bypass_security_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfBypassSecurityComponent = () => (AppViewOfBypassSecurityComponent = dart.constFn(src__core__linker__app_view.AppView$(src__bypass_security_component.BypassSecurityComponent)))();
  let AppViewAndintToAppViewOfBypassSecurityComponent = () => (AppViewAndintToAppViewOfBypassSecurityComponent = dart.constFn(dart.fnType(AppViewOfBypassSecurityComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfBypassSecurityComponent = () => (ComponentRefOfBypassSecurityComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__bypass_security_component.BypassSecurityComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfBypassSecurityComponent = () => (ComponentFactoryOfBypassSecurityComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__bypass_security_component.BypassSecurityComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__bypass_security_component$46template, {
    /*src__bypass_security_component$46template.styles$BypassSecurityComponent*/get styles$BypassSecurityComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_14 = Symbol('_el_14');
  const _text_16 = Symbol('_text_16');
  const _el_17 = Symbol('_el_17');
  const _el_19 = Symbol('_el_19');
  const _el_20 = Symbol('_el_20');
  const _el_22 = Symbol('_el_22');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  let const$;
  src__bypass_security_component$46template.ViewBypassSecurityComponent0 = class ViewBypassSecurityComponent0 extends src__core__linker__app_view.AppView$(src__bypass_security_component.BypassSecurityComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      let _text_1 = html.Text.new('Bypass Security Component');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      let _text_3 = html.Text.new('A untrusted URL:');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_5] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_4]));
      this[_el_5].className = 'e2e-dangerous-url';
      let _text_6 = html.Text.new('Click me');
      this[_el_5][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      let _text_8 = html.Text.new('A trusted URL:');
      this[_el_7][$append](_text_8);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_10] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_9]));
      this[_el_10].className = 'e2e-trusted-url';
      let _text_11 = html.Text.new('Click me');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      let _text_13 = html.Text.new('Resource URL:');
      this[_el_12][$append](_text_13);
      this[_el_14] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_15 = html.Text.new('Showing: ');
      this[_el_14][$append](_text_15);
      this[_text_16] = html.Text.new('');
      this[_el_14][$append](this[_text_16]);
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_18 = html.Text.new('Trusted:');
      this[_el_17][$append](_text_18);
      this[_el_19] = html.IFrameElement._check(src__core__linker__app_view.createAndAppend(doc, 'iframe', parentRenderNode));
      this[_el_19].className = 'e2e-iframe-trusted-src';
      this.createAttr(this[_el_19], 'height', '390');
      this.createAttr(this[_el_19], 'width', '640');
      this[_el_20] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_21 = html.Text.new('Untrusted:');
      this[_el_20][$append](_text_21);
      this[_el_22] = html.IFrameElement._check(src__core__linker__app_view.createAndAppend(doc, 'iframe', parentRenderNode));
      this[_el_22].className = 'e2e-iframe-untrusted-src';
      this.createAttr(this[_el_22], 'height', '390');
      this.createAttr(this[_el_22], 'width', '640');
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.dangerousUrl;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this.setProp(this[_el_5], 'href', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.trustedUrl;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setProp(this[_el_10], 'href', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_1));
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.dangerousVideoUrl;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_16][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.videoUrl;
      if (!core.identical(this[_expr_3], currVal_3)) {
        this.setProp(this[_el_19], 'src', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_3));
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.dangerousVideoUrl;
      if (!core.identical(this[_expr_4], currVal_4)) {
        this.setProp(this[_el_22], 'src', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeResourceUrl(currVal_4));
        this[_expr_4] = currVal_4;
      }
    }
  };
  (src__bypass_security_component$46template.ViewBypassSecurityComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_14] = null;
    this[_text_16] = null;
    this[_el_17] = null;
    this[_el_19] = null;
    this[_el_20] = null;
    this[_el_22] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    src__bypass_security_component$46template.ViewBypassSecurityComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('bypass-security'));
    let t = src__bypass_security_component$46template.ViewBypassSecurityComponent0._renderType;
    t == null ? src__bypass_security_component$46template.ViewBypassSecurityComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__bypass_security_component$46template.styles$BypassSecurityComponent) : t;
    this.setupComponentType(src__bypass_security_component$46template.ViewBypassSecurityComponent0._renderType);
  }).prototype = src__bypass_security_component$46template.ViewBypassSecurityComponent0.prototype;
  dart.addTypeTests(src__bypass_security_component$46template.ViewBypassSecurityComponent0);
  dart.setMethodSignature(src__bypass_security_component$46template.ViewBypassSecurityComponent0, () => ({
    __proto__: dart.getMethods(src__bypass_security_component$46template.ViewBypassSecurityComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__bypass_security_component.BypassSecurityComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__bypass_security_component$46template.ViewBypassSecurityComponent0, () => ({
    __proto__: dart.getFields(src__bypass_security_component$46template.ViewBypassSecurityComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.AnchorElement),
    [_el_7]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.AnchorElement),
    [_el_12]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.Element),
    [_text_16]: dart.fieldType(html.Text),
    [_el_17]: dart.fieldType(html.Element),
    [_el_19]: dart.fieldType(html.IFrameElement),
    [_el_20]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.IFrameElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__bypass_security_component$46template.ViewBypassSecurityComponent0, {
    /*src__bypass_security_component$46template.ViewBypassSecurityComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__bypass_security_component$46template.viewFactory_BypassSecurityComponent0 = function(parentView, parentIndex) {
    return new src__bypass_security_component$46template.ViewBypassSecurityComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__bypass_security_component$46template.viewFactory_BypassSecurityComponent0, AppViewAndintToAppViewOfBypassSecurityComponent());
  dart.defineLazy(src__bypass_security_component$46template, {
    /*src__bypass_security_component$46template.styles$BypassSecurityComponentHost*/get styles$BypassSecurityComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _BypassSecurityComponent_0_5 = Symbol('_BypassSecurityComponent_0_5');
  src__bypass_security_component$46template._ViewBypassSecurityComponentHost0 = class _ViewBypassSecurityComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__bypass_security_component$46template.ViewBypassSecurityComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_BypassSecurityComponent_0_5] = new src__bypass_security_component.BypassSecurityComponent.new(src__security__dom_sanitization_service.DomSanitizationService._check(this.injectorGet(dart.wrapType(src__security__dom_sanitization_service.DomSanitizationService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_BypassSecurityComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfBypassSecurityComponent()).new(0, this, this.rootEl, this[_BypassSecurityComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_BypassSecurityComponent_0_5] = null;
    src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.prototype;
  dart.addTypeTests(src__bypass_security_component$46template._ViewBypassSecurityComponentHost0);
  dart.setMethodSignature(src__bypass_security_component$46template._ViewBypassSecurityComponentHost0, () => ({
    __proto__: dart.getMethods(src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__bypass_security_component$46template._ViewBypassSecurityComponentHost0, () => ({
    __proto__: dart.getFields(src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__bypass_security_component$46template.ViewBypassSecurityComponent0),
    [_BypassSecurityComponent_0_5]: dart.fieldType(src__bypass_security_component.BypassSecurityComponent)
  }));
  src__bypass_security_component$46template.viewFactory_BypassSecurityComponentHost0 = function(parentView, parentIndex) {
    return new src__bypass_security_component$46template._ViewBypassSecurityComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__bypass_security_component$46template.viewFactory_BypassSecurityComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__bypass_security_component$46template, {
    /*src__bypass_security_component$46template.BypassSecurityComponentNgFactory*/get BypassSecurityComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfBypassSecurityComponent()).new('bypass-security', src__bypass_security_component$46template.viewFactory_BypassSecurityComponentHost0, src__bypass_security_component$46template._BypassSecurityComponentMetadata));
    },
    /*src__bypass_security_component$46template._BypassSecurityComponentMetadata*/get _BypassSecurityComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__bypass_security_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__bypass_security_component$46template.initReflector = function() {
    if (dart.test(src__bypass_security_component$46template._visited)) {
      return;
    }
    src__bypass_security_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__bypass_security_component.BypassSecurityComponent), src__bypass_security_component$46template.BypassSecurityComponentNgFactory);
    angular$46template.initReflector();
    security$46template.initReflector();
  };
  dart.fn(src__bypass_security_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_security/src/bypass_security_component.template.ddc", {
    "package:angular_security/src/bypass_security_component.template.dart": src__bypass_security_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["bypass_security_component.template.dart"],"names":[],"mappings":"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","file":"bypass_security_component.template.ddc.js"}');
  // Exports:
  return {
    src__bypass_security_component$46template: src__bypass_security_component$46template
  };
});

//# sourceMappingURL=bypass_security_component.template.ddc.js.map
