// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/bypass_security_component.dart';
import 'src/inner_html_binding_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/bypass_security_component.template.dart' as _ref1;
import 'src/inner_html_binding_component.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/inner_html_binding_component.template.dart' as import3;
import 'src/inner_html_binding_component.dart' as import4;
import 'src/bypass_security_component.template.dart' as import5;
import 'src/bypass_security_component.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/security/dom_sanitization_service.dart' as import12;

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import3.ViewInnerHtmlBindingComponent0 _compView_2;
  import4.InnerHtmlBindingComponent _InnerHtmlBindingComponent_2_4;
  import2.Element _el_3;
  import5.ViewBypassSecurityComponent0 _compView_3;
  import6.BypassSecurityComponent _BypassSecurityComponent_3_4;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Security');
    _el_0.append(_text_1);
    _compView_2 = new import3.ViewInnerHtmlBindingComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _InnerHtmlBindingComponent_2_4 = new import4.InnerHtmlBindingComponent();
    _compView_2.create(_InnerHtmlBindingComponent_2_4, []);
    _compView_3 = new import5.ViewBypassSecurityComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    _BypassSecurityComponent_3_4 = new import6.BypassSecurityComponent(parentView.injectorGet(import12.DomSanitizationService, viewData.parentIndex));
    _compView_3.create(_BypassSecurityComponent_3_4, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.InnerHtmlBindingComponent) && (2 == nodeIndex))) {
      return _InnerHtmlBindingComponent_2_4;
    }
    if ((identical(token, import6.BypassSecurityComponent) && (3 == nodeIndex))) {
      return _BypassSecurityComponent_3_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_2.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _compView_3?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_4;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_4 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
