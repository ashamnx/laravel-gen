webpackJsonp([0,3],{1179:function(e,t,n){e.exports=n(543)},186:function(e,t,n){"use strict";var o=n(46),a=(n.n(o),n(0));n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l={ADD_MODEL:"ADD_MODEL",ADD_FIELD:"ADD_FIELD",ADD_RELATION:"ADD_RELATION",SELECT_MODEL:"SELECT_MODEL"},c=function(){function e(e){this.ngRedux=e}return e.prototype.addField=function(e){this.ngRedux.dispatch(this._addField(e))},e.prototype.addRelation=function(e){this.ngRedux.dispatch(this._addRelation(e))},e.prototype.addModel=function(){this.ngRedux.dispatch(this._addModel())},e.prototype.selectModel=function(e){this.ngRedux.dispatch(this._selectModel(e))},e.prototype._addField=function(e){return{type:l.ADD_FIELD,payload:{id:e}}},e.prototype._addRelation=function(e){return{type:l.ADD_RELATION,payload:{id:e}}},e.prototype._addModel=function(){return{type:l.ADD_MODEL,payload:{}}},e.prototype._selectModel=function(e){return{type:l.SELECT_MODEL,payload:{id:e}}},e}();c=r([n.i(a.Injectable)(),i("design:paramtypes",["function"==typeof(d="undefined"!=typeof o.NgRedux&&o.NgRedux)&&d||Object])],c);var d},453:function(e,t,n){"use strict";var o=n(46),a=(n.n(o),n(0));n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l={SEARCH:"SEARCH",SEARCH_RESULT:"SEARCH_RESULT",TERMINATE:"TERMINATE",SEARCH_NEXT:"SEARCH_NEXT",SEARCH_PREVIOUS:"SEARCH_PREVIOUS"},c=function(){function e(e){this.ngRedux=e}return e.prototype.searchDispatch=function(e){this.ngRedux.dispatch(this.search(e))},e.prototype.fetchResultDispatch=function(e){this.ngRedux.dispatch(this.fetchResult(e))},e.prototype.search=function(e){return{type:l.SEARCH,payload:e}},e.prototype.fetchResult=function(e){return{type:l.SEARCH_RESULT,payload:{total:e}}},e}();c=r([n.i(a.Injectable)(),i("design:paramtypes",["function"==typeof(d="undefined"!=typeof o.NgRedux&&o.NgRedux)&&d||Object])],c);var d},542:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=542},543:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(721),n(687)),a=n(0),r=n(720),i=n(708);r.a.production&&n.i(a.enableProdMode)(),n.i(o.a)().bootstrapModule(i.a)},707:function(e,t,n){"use strict";var o=n(0),a=n(46),r=(n.n(a),n(719)),i=n(296),l=(n.n(i),n(296));n.n(l);n.d(t,"a",function(){return p});var c=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=n(914),p=function(){function e(e,t){this.ngRedux=e,this.devTool=t,this.ngRedux.configureStore(n.i(i.composeReducers)(r.a,n.i(l.defaultFormReducer)()),{},[s()],r.b.concat([t.isEnabled()?t.enhancer():function(e){return e}]))}return e}();p=c([n.i(o.Component)({selector:"app-root",styles:[n(896)],template:n(899)}),d("design:paramtypes",["function"==typeof(u="undefined"!=typeof a.NgRedux&&a.NgRedux)&&u||Object,"function"==typeof(m="undefined"!=typeof a.DevToolsExtension&&a.DevToolsExtension)&&m||Object])],p);var u,m},708:function(e,t,n){"use strict";var o=n(0),a=n(25),r=n(71),i=n(669),l=n(32),c=n(631),d=n(46),s=(n.n(d),n(453)),p=n(707),u=n(715),m=n(716),f=n(717),y=n(710),h=n(874),b=(n.n(h),n(711)),g=n(712),R=n(186),v=n(713),O=n(296),x=(n.n(O),n(718)),$=n(709);n.d(t,"a",function(){return _});var D=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},_=function(){function e(){}return e}();_=D([n.i(o.NgModule)({imports:[r.a,l.FormsModule,O.NgReduxForms,l.ReactiveFormsModule,a.a,d.NgReduxModule,i.a.forRoot(),c.a.forRoot()],declarations:[p.a,u.a,m.a,f.a,b.a,g.a,v.a,$.a,x.a],bootstrap:[p.a],providers:[s.a,y.a,R.a]})],_)},709:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return r});var a=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=function(){function e(){}return e.prototype.transform=function(e,t,n){return e.filter(function(e){return e[t]==n})},e}();r=a([n.i(o.Pipe)({name:"filter"})],r)},710:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return r});var a=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=function(){function e(){}return e.prototype.pick=function(){return Math.floor(100*Math.random())},e}();r=a([n.i(o.Injectable)()],r)},711:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return i});var a=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e}();a([n.i(o.Input)(),r("design:type",Object)],i.prototype,"model",void 0),i=a([n.i(o.Component)({selector:"model-code",template:n(900)})],i)},712:function(e,t,n){"use strict";var o=n(0),a=n(46),r=(n.n(a),n(298)),i=(n.n(r),n(186));n.d(t,"a",function(){return d});var l=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.actions=e,this.ngRedux=t}return e.prototype.addNewField=function(e){this.actions.addField(Number(e))},e.prototype.addNewRelation=function(e){this.actions.addRelation(Number(e))},e.prototype.ngOnInit=function(){var e=this;this.selectedModel$.subscribe(function(t){e.selectedModel=t}),this.models$.subscribe(function(t){e.modelKeys=Object.keys(t)})},e}();l([n.i(a.select)(),c("design:type","function"==typeof(s="undefined"!=typeof r.Observable&&r.Observable)&&s||Object)],d.prototype,"models$",void 0),l([n.i(a.select)(function(e){return e.models[e.selectedModel||e.models[Object.keys(e.models)[0]].id]}),c("design:type","function"==typeof(p="undefined"!=typeof r.Observable&&r.Observable)&&p||Object)],d.prototype,"model$",void 0),l([n.i(a.select)("selectedModel"),c("design:type","function"==typeof(u="undefined"!=typeof r.Observable&&r.Observable)&&u||Object)],d.prototype,"selectedModel$",void 0),d=l([n.i(o.Component)({selector:"model",template:n(901),styles:[n(897)]}),c("design:paramtypes",["function"==typeof(m="undefined"!=typeof i.a&&i.a)&&m||Object,"function"==typeof(f="undefined"!=typeof a.NgRedux&&a.NgRedux)&&f||Object])],d);var s,p,u,m,f},713:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return r});var a=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},r=function(){function e(){}return e.prototype.transform=function(e,t){void 0===e&&(e="");var o=n(894);return o(e)},e}();r=a([n.i(o.Pipe)({name:"pluralize"})],r)},714:function(e,t,n){"use strict";function o(e,t){switch(void 0===e&&(e=[]),t.type){case l.b.ADD_FIELD:return e.concat([{}]);default:return e}}function a(e,t){switch(void 0===e&&(e=[]),t.type){case l.b.ADD_RELATION:return e.concat([{}]);default:return e}}function r(e,t){switch(void 0===e&&(e=d),t.type){case l.b.ADD_FIELD:var n={fields:o(e[t.payload.id].fields,t)},r=Object.assign({},e[t.payload.id],n);return Object.assign({},e,(m={},m[t.payload.id]=r,m));case l.b.ADD_RELATION:var i={relations:a(e[t.payload.id].fields,t)},s=Object.assign({},e[t.payload.id],i);return Object.assign({},e,(f={},f[t.payload.id]=s,f));case l.b.ADD_MODEL:var p=+new Date,u=(y={},y[p]=Object.assign({},c,{id:p}),y);return Object.assign({},e,u);default:return e}var m,f,y}function i(e,t){switch(void 0===e&&(e=s),t.type){case l.b.SELECT_MODEL:return t.payload.id;default:return e}}var l=n(186);t.b=r,t.a=i;var c={id:+new Date,name:"Post",softDelete:!0,polymorphic:!1,migration:!0,timestamps:!0,fields:[],relations:[]},d={},s=null},715:function(e,t,n){"use strict";var o=n(0),a=n(46),r=(n.n(a),n(298)),i=(n.n(r),n(453));n.d(t,"a",function(){return d});var l=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.actions=e,this.ngRedux=t}return e.prototype.ngOnInit=function(){var e=this;this.search$.subscribe(function(t){console.log("keyssssss",t),""!=t&&e.actions.fetchResultDispatch(t.length)}),this.numChars$.subscribe(function(t){e.numChars=t})},e.prototype.handleKeyUp=function(e){this.keyword=e,this.actions.searchDispatch(e)},e}();l([n.i(a.select)(["search","total"]),c("design:type","function"==typeof(s="undefined"!=typeof r.Observable&&r.Observable)&&s||Object)],d.prototype,"numChars$",void 0),l([n.i(a.select)(["search","keyword"]),c("design:type","function"==typeof(p="undefined"!=typeof r.Observable&&r.Observable)&&p||Object)],d.prototype,"search$",void 0),d=l([n.i(o.Component)({selector:"search",template:n(902)}),c("design:paramtypes",["function"==typeof(u="undefined"!=typeof i.a&&i.a)&&u||Object,"function"==typeof(m="undefined"!=typeof a.NgRedux&&a.NgRedux)&&m||Object])],d);var s,p,u,m},716:function(e,t,n){"use strict";var o=n(0),a=n(46),r=(n.n(a),n(1));n.n(r);n.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return e}();i([n.i(a.select)(["pathDemo","foo"]),l("design:type","function"==typeof(d="undefined"!=typeof r.Observable&&r.Observable)&&d||Object)],c.prototype,"foo$",void 0),i([n.i(a.select)(["pathDemo","foo","bar",0]),l("design:type","function"==typeof(s="undefined"!=typeof r.Observable&&r.Observable)&&s||Object)],c.prototype,"bar$",void 0),c=i([n.i(o.Component)({selector:"select-by-path",template:n(903)})],c);var d,s},717:function(e,t,n){"use strict";var o=n(0),a=n(46);n.n(a);n.d(t,"a",function(){return l});var r=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e){this.rootState$=e.select()}return e}();l=r([n.i(o.Component)({selector:"select-root-state",template:n(904)}),i("design:paramtypes",["function"==typeof(c="undefined"!=typeof a.NgRedux&&a.NgRedux)&&c||Object])],l);var c},718:function(e,t,n){"use strict";var o=n(0),a=n(46),r=(n.n(a),n(298)),i=(n.n(r),n(186));n.d(t,"a",function(){return d});var l=this&&this.__decorate||function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.actions=e,this.ngRedux=t}return e.prototype.ngOnInit=function(){var e=this;this.models$.subscribe(function(t){e.modelKeys=Object.keys(t)})},e.prototype.selectModel=function(e){console.log("id",e),this.actions.selectModel(e)},e.prototype.addNewModel=function(){this.actions.addModel()},e}();l([n.i(a.select)(),c("design:type","function"==typeof(s="undefined"!=typeof r.Observable&&r.Observable)&&s||Object)],d.prototype,"models$",void 0),d=l([n.i(o.Component)({selector:"app-side-menu",template:n(905),styles:[n(898)]}),c("design:paramtypes",["function"==typeof(p="undefined"!=typeof i.a&&i.a)&&p||Object,"function"==typeof(u="undefined"!=typeof a.NgRedux&&a.NgRedux)&&u||Object])],d);var s,p,u},719:function(e,t,n){"use strict";var o=n(500),a=n(714);n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var r=n(908),i=(function(){function e(){}return e}(),n.i(o.combineReducers)({selectedModel:a.a,models:a.b})),l=[r("models",{key:"ng2-redux/examples/model"}),r("selectedModel",{key:"ng2-redux/examples/selectedModel"})]},720:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!0}},721:function(e,t,n){"use strict";var o=n(735),a=(n.n(o),n(728)),r=(n.n(a),n(724)),i=(n.n(r),n(730)),l=(n.n(i),n(729)),c=(n.n(l),n(727)),d=(n.n(c),n(726)),s=(n.n(d),n(734)),p=(n.n(s),n(723)),u=(n.n(p),n(722)),m=(n.n(u),n(732)),f=(n.n(m),n(725)),y=(n.n(f),n(733)),h=(n.n(y),n(731)),b=(n.n(h),n(736)),g=(n.n(b),n(1178));n.n(g)},896:function(e,t){e.exports=".example-sidenav-fab-container md-sidenav{\n    max-width:250px;\n}\n"},897:function(e,t){e.exports=".example-margin{\n    margin:0 10px;\n}"},898:function(e,t){e.exports=""},899:function(e,t){e.exports='<!--<counter></counter>-->\n<!--<counter-info></counpmnter-info>-->\n<!--<search></search>-->\n<!--<hr>-->\n<!--<select-by-path></select-by-path>-->\n\n<md-sidenav-container class="example-sidenav-fab-container">\n    <md-sidenav #sidenav mode="side" opened="true">\n        <app-side-menu></app-side-menu>\n    </md-sidenav>\n\n    <div class="example-scrolling-content" fxLayout="column">\n        <md-toolbar color="primary">\n            <button class="example-fab" md-icon-button (click)="sidenav.toggle()">\n                <md-icon>menu</md-icon>\n            </button>\n            <span>Laravel Generator</span>\n        </md-toolbar>\n        <section fxLayout="row" fxFlex class="overflow-auto">\n            <model></model>\n            <!--<div fxLayout="column">-->\n                <!--<select-root-state></select-root-state>-->\n            <!--</div>-->\n        </section>\n    </div>\n</md-sidenav-container>\n'},900:function(e,t){e.exports="<md-tab-group dynamicHeight=\"true\">\n    <md-tab>\n        <template md-tab-label>\n            Model (<em>{{ model.name }}.php)</em>\n        </template>\n        <md-card class=\"example-card\">\n            <md-card-content>\n                <pre class=\"\">\n                    <code class=\"language-php\">\n<?php\n\nnamespace App\\Models;\n\nuse Eloquent as Model;\n<template [ngIf]=\"model.softDelete\">use Illuminate\\Database\\Eloquent\\SoftDeletes;</template>\n\n/**\n * Class {{ modelname }}\n * @package App\\Models\n * @version January 27, 2017, 6:26 am UTC\n */\nclass {{ model.name }} extends Model\n{{'{'}}\n    <template [ngIf]=\"model.softDelete\">use SoftDeletes;</template>\n\n    public $table = '{{ model.name | lowercase | pluralize}}';\n\n    protected $dates = [\n        <template [ngIf]=\"model.softDelete\">'deleted_at',</template>\n    ]\n\n    public $fillable = [\n        <template ngFor let-field [ngForOf]=\"(model.fields | filter: 'fillable': true)\"> '{{field.name}}',\n        </template>\n    ];\n\n    /**\n     * The attributes that should be casted to native types.\n     *\n     * @var array\n     */\n    protected $casts = [\n\n    ];\n\n    /**\n     * Validation rules\n     *\n     * @var array\n     */\n    public static $rules = [\n        <template ngFor let-field [ngForOf]=\"(model.fields)\"> '{{field?.name}}' => '{{field?.validations}}',\n        </template>\n    ];\n\n{{'}'}}\n</code>\n        </pre>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button color=\"primary\">DOWNLOAD</button>\n                <button md-button color=\"accent\">COPY</button>\n            </md-card-actions>\n        </md-card>\n    </md-tab>\n    <md-tab *ngIf=\"(model.migration)\">\n        <template md-tab-label>\n            Migration (<em>{{ model.id }}_create_{{ model.name | lowercase | pluralize }}_table.php)</em>\n        </template>\n        <md-card class=\"example-card\">\n            <md-card-content>\n<pre class=\"\">\n    <code class=\"language-php\">\n<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass Create{{ model.name | pluralize }}Table extends Migration\n{{'{'}}\n\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {{'{'}}\n        Schema::create('{{ model.name | lowercase | pluralize }}', function (Blueprint $table) {{'{'}}\n            $table->increments('id');\n            <template ngFor let-field [ngForOf]=\"(model.fields)\">$table->{{field.db_type}}('{{field.name}}');\n            </template>\n            <template [ngIf]=\"model.polymorphic\">$table->morphs('{{ model.name | lowercase }}able');</template>\n            <template [ngIf]=\"model.timestamps\">$table->timestamps();</template>\n            <template [ngIf]=\"model.softDelete\">$table->softDeletes();</template>\n        {{'}'}});\n    {{'}'}}\n\n    /**\n     * Reverse the migrations.\n     *\n     * @return void\n     */\n    public function down()\n    {{'{'}}\n        Schema::drop('{{ model.name | lowercase | pluralize }}');\n    {{'}'}}\n\n{{'}'}}\n        </code>\n</pre>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button color=\"primary\">DOWNLOAD</button>\n                <button md-button color=\"accent\">COPY</button>\n            </md-card-actions>\n        </md-card>\n    </md-tab>\n    <md-tab>\n        <template md-tab-label>\n            Controller (<em>{{ model.name }}Controller.php)</em>\n        </template>\n        <md-card class=\"example-card\">\n            <md-card-content>\n<pre class=\"\">\n    <code class=\"language-php\">\n<?php\n\nnamespace App\\Http\\Controllers\\API;\n\nuse App\\Http\\Requests\\API\\Create{{ model.name }}APIRequest;\nuse App\\Http\\Requests\\API\\Update{{ model.name }}APIRequest;\nuse App\\Models\\{{ model.name }};\nuse App\\Repositories\\{{ model.name }}Repository;\nuse Illuminate\\Http\\Request;\nuse App\\Http\\Controllers\\AppBaseController;\nuse InfyOm\\Generator\\Criteria\\LimitOffsetCriteria;\nuse Prettus\\Repository\\Criteria\\RequestCriteria;\nuse Response;\n\n/**\n * Class {{ model.name }}Controller\n * @package App\\Http\\Controllers\\API\n */\n\nclass {{ model.name }}APIController extends AppBaseController\n{{'{'}}\n    /** @var  {{ model.name }}Repository */\n    private ${{ model.name | lowercase}}Repository;\n\n    public function __construct({{ model.name }}Repository ${{ model.name | lowercase}}Repo)\n    {{'{'}}\n        $this->{{ model.name | lowercase}}Repository = ${{ model.name | lowercase}}Repo;\n    {{'}'}}\n\n    /**\n     * Display a listing of the {{ model.name }}.\n     * GET|HEAD /{{ model.name | lowercase | pluralize}}\n     *\n     * @param Request $request\n     * @return Response\n     */\n    public function index(Request $request)\n    {{'{'}}\n        $this->{{ model.name | lowercase}}Repository->pushCriteria(new RequestCriteria($request));\n        $this->{{ model.name | lowercase}}Repository->pushCriteria(new LimitOffsetCriteria($request));\n        ${{ model.name | lowercase | pluralize}} = $this->{{ model.name | lowercase}}Repository->all();\n\n        return $this->sendResponse(${{ model.name | lowercase | pluralize}}->toArray(), '{{ model.name | pluralize }} retrieved successfully');\n    {{'}'}}\n\n    /**\n     * Store a newly created {{ model.name }} in storage.\n     * POST /{{ model.name | lowercase | pluralize}}\n     *\n     * @param Create{{ model.name }}APIRequest $request\n     *\n     * @return Response\n     */\n    public function store(Create{{ model.name }}APIRequest $request)\n    {{'{'}}\n        $input = $request->all();\n\n        ${{ model.name | lowercase | pluralize}} = $this->{{ model.name | lowercase}}Repository->create($input);\n\n        return $this->sendResponse(${{ model.name | lowercase | pluralize}}->toArray(), '{{ model.name }} saved successfully');\n    {{'}'}}\n\n    /**\n     * Display the specified {{ model.name }}.\n     * GET|HEAD /{{ model.name | lowercase | pluralize}}/{{'{'}}id{{'}'}}\n     *\n     * @param  int $id\n     *\n     * @return Response\n     */\n    public function show($id)\n    {{'{'}}\n        /** @var {{ model.name }} ${{ model.name | lowercase}} */\n        ${{ model.name | lowercase}} = $this->{{ model.name | lowercase}}Repository->findWithoutFail($id);\n\n        if (empty(${{ model.name | lowercase}})) {{'{'}}\n            return $this->sendError('{{ model.name }} not found');\n        {{'}'}}\n\n        return $this->sendResponse(${{ model.name | lowercase}}->toArray(), '{{ model.name }} retrieved successfully');\n    {{'}'}}\n\n    /**\n     * Update the specified {{ model.name }} in storage.\n     * PUT/PATCH /{{ model.name | lowercase | pluralize}}/{{'{'}}id{{'}'}}\n     *\n     * @param  int $id\n     * @param Update{{ model.name }}APIRequest $request\n     *\n     * @return Response\n     */\n    public function update($id, Update{{ model.name }}APIRequest $request)\n    {{'{'}}\n        $input = $request->all();\n\n        /** @var {{ model.name }} ${{ model.name | lowercase}} */\n        ${{ model.name | lowercase}} = $this->{{ model.name | lowercase}}Repository->findWithoutFail($id);\n\n        if (empty(${{ model.name | lowercase}})) {{'{'}}\n            return $this->sendError('{{ model.name }} not found');\n        {{'}'}}\n\n        ${{ model.name | lowercase}} = $this->{{ model.name | lowercase}}Repository->update($input, $id);\n\n        return $this->sendResponse(${{ model.name | lowercase}}->toArray(), '{{ model.name }} updated successfully');\n    {{'}'}}\n\n    /**\n     * Remove the specified {{ model.name }} from storage.\n     * DELETE /{{ model.name | lowercase | pluralize}}/{{'{'}}id{{'}'}}\n     *\n     * @param  int $id\n     *\n     * @return Response\n     */\n    public function destroy($id)\n    {{'{'}}\n        /** @var {{ model.name }} ${{ model.name | lowercase}} */\n        ${{ model.name | lowercase}} = $this->{{ model.name | lowercase}}Repository->findWithoutFail($id);\n\n        if (empty(${{ model.name | lowercase}})) {{'{'}}\n            return $this->sendError('{{ model.name }} not found');\n        {{'}'}}\n\n        ${{ model.name | lowercase}}->delete();\n\n        return $this->sendResponse($id, '{{ model.name }} deleted successfully');\n    {{'}'}}\n{{'}'}}\n        </code>\n</pre>\n            </md-card-content>\n            <md-card-actions>\n                <button md-button color=\"primary\">DOWNLOAD</button>\n                <button md-button color=\"accent\">COPY</button>\n            </md-card-actions>\n        </md-card>\n    </md-tab>\n</md-tab-group>\n"},901:function(e,t){e.exports='<md-card class="example-card">\n    <md-card-content fxLayout="column" fxLayoutAlign="center stretch">\n        <template ngFor let-model [ngForOf]="(modelKeys)">\n            <template [ngIf]="(selectedModel && selectedModel == model)">\n                <form [connect]="[\'models\', (model)]">\n                    <md-input-container floatPlaceholder="Model Name (Eg, Post)">\n                        <input\n                                name="name"\n                                ngControl ngModel\n                                type="text"\n                                class="search"\n                                placeholder="Model Name (Eg, Post)"\n                                mdInput\n                        />\n                    </md-input-container>\n                    <section class="example-section">\n                        <h3>Options</h3>\n                        <md-checkbox class="example-margin" ngControl ngModel name="softDelete">Soft Deletes</md-checkbox>\n                        <md-checkbox class="example-margin" ngControl ngModel name="migration">Migration</md-checkbox>\n                        <md-checkbox class="example-margin" ngControl ngModel name="timestamps">Time Stamps</md-checkbox>\n                        <md-checkbox class="example-margin" ngControl ngModel name="polymorphic">Polymorphic</md-checkbox>\n                    </section>\n                    <section>\n                        <h3>Fields</h3>\n                        <table class="material-table">\n                            <thead>\n                            <tr>\n                                <th>Field Name</th>\n                                <th>DB Type</th>\n                                <th>Validations</th>\n                                <th>Primary</th>\n                                <th>Searchable</th>\n                                <th>Fillable</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <template connectArray let-field connectArrayOf="fields">\n                                    <tr [ngModelGroup]="field">\n                                        <td>\n                                            <md-input-container>\n                                                <input\n                                                        name="name"\n                                                        type="text"\n                                                        ngControl ngModel\n                                                        class="search"\n                                                        placeholder=""\n                                                        mdInput/>\n                                            </md-input-container>\n                                        </td>\n                                        <td>\n                                            <md-input-container>\n                                                <input\n                                                        name="db_type"\n                                                        type="text"\n                                                        ngControl ngModel\n                                                        class="search"\n                                                        placeholder=""\n                                                        mdInput/>\n                                            </md-input-container>\n                                        </td>\n                                        <td>\n                                            <md-input-container>\n                                                <input\n                                                        name="validations"\n                                                        type="text"\n                                                        ngControl ngModel\n                                                        class="search"\n                                                        placeholder=""\n                                                        mdInput/>\n                                            </md-input-container>\n                                        </td>\n\n                                        <td>\n                                            <md-checkbox class="example-margin" ngControl ngModel name="primary"></md-checkbox>\n                                        </td>\n\n                                        <td>\n                                            <md-checkbox class="example-margin" ngControl ngModel name="searchable"></md-checkbox>\n                                        </td>\n\n                                        <td>\n                                            <md-checkbox class="example-margin" ngControl ngModel name="fillable"></md-checkbox>\n                                        </td>\n\n                                    </tr>\n                                </template>\n                            </tbody>\n                        </table>\n                        <button md-raised-button (click)="addNewField(selectedModel)" color="accent">Add Field</button>\n                    </section>\n                    <section>\n                        <h3>Relations</h3>\n                        <template connectArray let-relation connectArrayOf="relations">\n                            <div [ngModelGroup]="relation">\n                                <md-select placeholder="Relation" ngModel name="model">\n                                    <md-option *ngFor="let rel of modelKeys" [value]="(models$ | async)[rel].name">\n                                        {{(models$ | async)[rel].name}}\n                                    </md-option>\n                                </md-select>\n                            </div>\n                        </template>\n                        <button md-raised-button (click)="addNewRelation(selectedModel)" color="accent">Add Relation</button> <p style=" opacity: 0.87; font-size: 0.94em; ">* Id (Primary Key), Softdeletes, timestamps, Polymorphic (id & type) fields are added automatically</p>\n                    </section>\n                </form>\n                <model-code [model]="(model$ | async)"></model-code>\n            </template>\n        </template>\n    </md-card-content>\n</md-card>';
},902:function(e,t){e.exports='<h1>String Length Example {{ search$ | async }}</h1>\n<input\n        id=\'search-input\'\n        type="text"\n        class="search"\n        #field (keyup)="handleKeyUp(field.value)"/>\n<p>Number of characters (from subscription): {{ numChars }}</p>\n<p>Number of characters (from async pipe): {{ numChars$ | async }}</p>\n<p>You entered: {{ search$ | async }}<p>\n'},903:function(e,t){e.exports="<h1>Select By Path Demo</h1>\n<p>foo$: {{ foo$ | async | json }}</p>\n<p>bar$: {{ bar$ | async }}</p>\n"},904:function(e,t){e.exports="<h1>Select Root State Demo</h1>\n<pre>\n  {{ rootState$ | async | json }}\n</pre>\n"},905:function(e,t){e.exports='<md-toolbar color="primary">\n  <span>Models</span>\n</md-toolbar>\n<div style="min-width: 275px;">\n  <md-list>\n    <md-list-item *ngFor="let modelKey of (modelKeys); let i = index;" (click)="selectModel(modelKey)"> {{(models$ | async)[modelKey].name}} </md-list-item>\n    <button md-button (click)="addNewModel()" color="primary"> New Model </button>\n  </md-list>\n</div>'}},[1179]);