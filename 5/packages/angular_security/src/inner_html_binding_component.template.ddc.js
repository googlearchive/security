define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_security/src/inner_html_binding_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, inner_html_binding_component, reflector, angular) {
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
  const src__inner_html_binding_component = inner_html_binding_component.src__inner_html_binding_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__inner_html_binding_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfInnerHtmlBindingComponent = () => (AppViewOfInnerHtmlBindingComponent = dart.constFn(src__core__linker__app_view.AppView$(src__inner_html_binding_component.InnerHtmlBindingComponent)))();
  let AppViewAndintToAppViewOfInnerHtmlBindingComponent = () => (AppViewAndintToAppViewOfInnerHtmlBindingComponent = dart.constFn(dart.fnType(AppViewOfInnerHtmlBindingComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfInnerHtmlBindingComponent = () => (ComponentRefOfInnerHtmlBindingComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__inner_html_binding_component.InnerHtmlBindingComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfInnerHtmlBindingComponent = () => (ComponentFactoryOfInnerHtmlBindingComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__inner_html_binding_component.InnerHtmlBindingComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__inner_html_binding_component$46template, {
    /*src__inner_html_binding_component$46template.styles$InnerHtmlBindingComponent*/get styles$InnerHtmlBindingComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _text_5 = Symbol('_text_5');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0 = class ViewInnerHtmlBindingComponent0 extends src__core__linker__app_view.AppView$(src__inner_html_binding_component.InnerHtmlBindingComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      let _text_1 = html.Text.new('Binding innerHTML');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_3 = html.Text.new('Bound value:');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_4].className = 'e2e-inner-html-interpolated';
      this[_text_5] = html.Text.new('');
      this[_el_4][$append](this[_text_5]);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_7 = html.Text.new('Result of binding to innerHTML:');
      this[_el_6][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_8].className = 'e2e-inner-html-bound';
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.htmlSnippet;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_5][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.htmlSnippet;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this.setProp(this[_el_8], 'innerHTML', src__core__linker__app_view_utils.appViewUtils.sanitizer.sanitizeHtml(currVal_1));
        this[_expr_1] = currVal_1;
      }
    }
  };
  (src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_text_5] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('inner-html-binding'));
    let t = src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0._renderType;
    t == null ? src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__inner_html_binding_component$46template.styles$InnerHtmlBindingComponent) : t;
    this.setupComponentType(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0._renderType);
  }).prototype = src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.prototype;
  dart.addTypeTests(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0);
  dart.setMethodSignature(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0, () => ({
    __proto__: dart.getMethods(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__inner_html_binding_component.InnerHtmlBindingComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0, () => ({
    __proto__: dart.getFields(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_text_5]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.Element),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0, {
    /*src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__inner_html_binding_component$46template.viewFactory_InnerHtmlBindingComponent0 = function(parentView, parentIndex) {
    return new src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__inner_html_binding_component$46template.viewFactory_InnerHtmlBindingComponent0, AppViewAndintToAppViewOfInnerHtmlBindingComponent());
  dart.defineLazy(src__inner_html_binding_component$46template, {
    /*src__inner_html_binding_component$46template.styles$InnerHtmlBindingComponentHost*/get styles$InnerHtmlBindingComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _InnerHtmlBindingComponent_0_5 = Symbol('_InnerHtmlBindingComponent_0_5');
  src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0 = class _ViewInnerHtmlBindingComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_InnerHtmlBindingComponent_0_5] = new src__inner_html_binding_component.InnerHtmlBindingComponent.new();
      this[_compView_0].create(this[_InnerHtmlBindingComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfInnerHtmlBindingComponent()).new(0, this, this.rootEl, this[_InnerHtmlBindingComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_InnerHtmlBindingComponent_0_5] = null;
    src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.prototype;
  dart.addTypeTests(src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0);
  dart.setMethodSignature(src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0, () => ({
    __proto__: dart.getMethods(src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0, () => ({
    __proto__: dart.getFields(src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__inner_html_binding_component$46template.ViewInnerHtmlBindingComponent0),
    [_InnerHtmlBindingComponent_0_5]: dart.fieldType(src__inner_html_binding_component.InnerHtmlBindingComponent)
  }));
  src__inner_html_binding_component$46template.viewFactory_InnerHtmlBindingComponentHost0 = function(parentView, parentIndex) {
    return new src__inner_html_binding_component$46template._ViewInnerHtmlBindingComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__inner_html_binding_component$46template.viewFactory_InnerHtmlBindingComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__inner_html_binding_component$46template, {
    /*src__inner_html_binding_component$46template.InnerHtmlBindingComponentNgFactory*/get InnerHtmlBindingComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfInnerHtmlBindingComponent()).new('inner-html-binding', src__inner_html_binding_component$46template.viewFactory_InnerHtmlBindingComponentHost0, src__inner_html_binding_component$46template._InnerHtmlBindingComponentMetadata));
    },
    /*src__inner_html_binding_component$46template._InnerHtmlBindingComponentMetadata*/get _InnerHtmlBindingComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__inner_html_binding_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__inner_html_binding_component$46template.initReflector = function() {
    if (dart.test(src__inner_html_binding_component$46template._visited)) {
      return;
    }
    src__inner_html_binding_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__inner_html_binding_component.InnerHtmlBindingComponent), src__inner_html_binding_component$46template.InnerHtmlBindingComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__inner_html_binding_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_security/src/inner_html_binding_component.template.ddc", {
    "package:angular_security/src/inner_html_binding_component.template.dart": src__inner_html_binding_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["inner_html_binding_component.template.dart"],"names":[],"mappings":"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","file":"inner_html_binding_component.template.ddc.js"}');
  // Exports:
  return {
    src__inner_html_binding_component$46template: src__inner_html_binding_component$46template
  };
});

//# sourceMappingURL=inner_html_binding_component.template.ddc.js.map
