// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'inner_html_binding_component.dart';
export 'inner_html_binding_component.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'inner_html_binding_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$InnerHtmlBindingComponent = const [];

class ViewInnerHtmlBindingComponent0 extends AppView<import1.InnerHtmlBindingComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Element _el_4;
  import2.Text _text_5;
  import2.Element _el_6;
  import2.Element _el_8;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewInnerHtmlBindingComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('inner-html-binding');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$InnerHtmlBindingComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.InnerHtmlBindingComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Binding innerHTML');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_3 = new import2.Text('Bound value:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'p', parentRenderNode);
    _el_4.className = 'e2e-inner-html-interpolated';
    _text_5 = new import2.Text('');
    _el_4.append(_text_5);
    _el_6 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_7 = new import2.Text('Result of binding to innerHTML:');
    _el_6.append(_text_7);
    _el_8 = createAndAppend(doc, 'p', parentRenderNode);
    _el_8.className = 'e2e-inner-html-bound';
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.InnerHtmlBindingComponent _ctx = ctx;
    final currVal_0 = (_ctx.htmlSnippet ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_5.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = _ctx.htmlSnippet;
    if (!identical(_expr_1, currVal_1)) {
      setProp(_el_8, 'innerHTML', import6.appViewUtils.sanitizer.sanitizeHtml(currVal_1));
      _expr_1 = currVal_1;
    }
  }
}

AppView<import1.InnerHtmlBindingComponent> viewFactory_InnerHtmlBindingComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewInnerHtmlBindingComponent0(parentView, parentIndex);
}

const List<dynamic> styles$InnerHtmlBindingComponentHost = const [];

class _ViewInnerHtmlBindingComponentHost0 extends AppView<dynamic> {
  ViewInnerHtmlBindingComponent0 _compView_0;
  import1.InnerHtmlBindingComponent _InnerHtmlBindingComponent_0_5;
  _ViewInnerHtmlBindingComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewInnerHtmlBindingComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _InnerHtmlBindingComponent_0_5 = new import1.InnerHtmlBindingComponent();
    _compView_0.create(_InnerHtmlBindingComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.InnerHtmlBindingComponent>(0, this, rootEl, _InnerHtmlBindingComponent_0_5);
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

AppView viewFactory_InnerHtmlBindingComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewInnerHtmlBindingComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.InnerHtmlBindingComponent> InnerHtmlBindingComponentNgFactory = const ComponentFactory<import1.InnerHtmlBindingComponent>('inner-html-binding', viewFactory_InnerHtmlBindingComponentHost0, _InnerHtmlBindingComponentMetadata);
const _InnerHtmlBindingComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(InnerHtmlBindingComponent, InnerHtmlBindingComponentNgFactory);
  _ref0.initReflector();
}
