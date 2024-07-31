"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[6764],{"./packages/dom/build-module/dom/get-computed-style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getComputedStyle});var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/utils/assert-is-defined.js");function getComputedStyle(element){return(0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.c)(element.ownerDocument.defaultView,"element.ownerDocument.defaultView"),element.ownerDocument.defaultView.getComputedStyle(element)}},"./packages/dom/build-module/dom/get-scroll-container.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getScrollContainer});var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/dom/build-module/dom/get-computed-style.js");function getScrollContainer(node,direction="vertical"){if(node){if(("vertical"===direction||"all"===direction)&&node.scrollHeight>node.clientHeight){const{overflowY}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowY))return node}if(("horizontal"===direction||"all"===direction)&&node.scrollWidth>node.clientWidth){const{overflowX}=(0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__.Z)(node);if(/(auto|scroll)/.test(overflowX))return node}return node.ownerDocument===node.parentNode?node:getScrollContainer(node.parentNode,direction)}}},"./packages/dom/build-module/utils/assert-is-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function assertIsDefined(val,name){0}__webpack_require__.d(__webpack_exports__,{c:()=>assertIsDefined})},"./packages/icons/build-module/library/star-empty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{fillRule:"evenodd",d:"M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",clipRule:"evenodd"})})},"./packages/icons/build-module/library/star-filled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"})})},"./packages/components/src/modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_modal});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_focus_on_mount=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),use_constrained_tabbing=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),use_focus_return=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");const LIVE_REGION_ARIA_ROLES=new Set(["alert","status","log","marquee","timer"]),hiddenElementsByDepth=[];function elementShouldBeHidden(element){const role=element.getAttribute("role");return!("SCRIPT"===element.tagName||element.hasAttribute("aria-hidden")||element.hasAttribute("aria-live")||role&&LIVE_REGION_ARIA_ROLES.has(role))}var src_button=__webpack_require__("./packages/components/src/button/index.tsx"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx"),with_ignore_ime_events=__webpack_require__("./packages/components/src/utils/with-ignore-ime-events.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalContext=(0,react.createContext)(new Set),bodyOpenClasses=new Map;const Modal=(0,react.forwardRef)((function UnforwardedModal(props,forwardedRef){const{bodyOpenClassName="modal-open",role="dialog",title=null,focusOnMount=!0,shouldCloseOnEsc=!0,shouldCloseOnClickOutside=!0,isDismissible=!0,aria={labelledby:void 0,describedby:void 0},onRequestClose,icon,closeButtonLabel,children,style,overlayClassName,className,contentLabel,onKeyDown,isFullScreen=!1,size,headerActions=null,__experimentalHideHeader=!1}=props,ref=(0,react.useRef)(),instanceId=(0,use_instance_id.Z)(Modal),headingId=title?`components-modal-header-${instanceId}`:aria.labelledby,focusOnMountRef=(0,use_focus_on_mount.Z)("firstContentElement"===focusOnMount?"firstElement":focusOnMount),constrainedTabbingRef=(0,use_constrained_tabbing.Z)(),focusReturnRef=(0,use_focus_return.Z)(),contentRef=(0,react.useRef)(null),childrenContainerRef=(0,react.useRef)(null),[hasScrolledContent,setHasScrolledContent]=(0,react.useState)(!1),[hasScrollableContent,setHasScrollableContent]=(0,react.useState)(!1);let sizeClass;isFullScreen||"fill"===size?sizeClass="is-full-screen":size&&(sizeClass=`has-size-${size}`);const isContentScrollable=(0,react.useCallback)((()=>{if(!contentRef.current)return;const closestScrollContainer=(0,get_scroll_container.Z)(contentRef.current);contentRef.current===closestScrollContainer?setHasScrollableContent(!0):setHasScrollableContent(!1)}),[contentRef]);(0,react.useEffect)((()=>(function modalize(modalElement){const elements=Array.from(document.body.children),hiddenElements=[];hiddenElementsByDepth.push(hiddenElements);for(const element of elements)element!==modalElement&&elementShouldBeHidden(element)&&(element.setAttribute("aria-hidden","true"),hiddenElements.push(element))}(ref.current),()=>function unmodalize(){const hiddenElements=hiddenElementsByDepth.pop();if(hiddenElements)for(const element of hiddenElements)element.removeAttribute("aria-hidden")}())),[]);const refOnRequestClose=(0,react.useRef)();(0,react.useEffect)((()=>{refOnRequestClose.current=onRequestClose}),[onRequestClose]);const dismissers=(0,react.useContext)(ModalContext),[nestedDismissers]=(0,react.useState)((()=>new Set));(0,react.useEffect)((()=>{dismissers.add(refOnRequestClose);for(const dismisser of dismissers)dismisser!==refOnRequestClose&&dismisser.current?.();return()=>{for(const dismisser of nestedDismissers)dismisser.current?.();dismissers.delete(refOnRequestClose)}}),[dismissers,nestedDismissers]),(0,react.useEffect)((()=>{var _bodyOpenClasses$get;const theClass=bodyOpenClassName,oneMore=1+(null!==(_bodyOpenClasses$get=bodyOpenClasses.get(theClass))&&void 0!==_bodyOpenClasses$get?_bodyOpenClasses$get:0);return bodyOpenClasses.set(theClass,oneMore),document.body.classList.add(bodyOpenClassName),()=>{const oneLess=bodyOpenClasses.get(theClass)-1;0===oneLess?(document.body.classList.remove(theClass),bodyOpenClasses.delete(theClass)):bodyOpenClasses.set(theClass,oneLess)}}),[bodyOpenClassName]),(0,react.useLayoutEffect)((()=>{if(!window.ResizeObserver||!childrenContainerRef.current)return;const resizeObserver=new ResizeObserver(isContentScrollable);return resizeObserver.observe(childrenContainerRef.current),isContentScrollable(),()=>{resizeObserver.disconnect()}}),[isContentScrollable,childrenContainerRef]);const onContentContainerScroll=(0,react.useCallback)((e=>{var _e$currentTarget$scro;const scrollY=null!==(_e$currentTarget$scro=e?.currentTarget?.scrollTop)&&void 0!==_e$currentTarget$scro?_e$currentTarget$scro:-1;!hasScrolledContent&&scrollY>0?setHasScrolledContent(!0):hasScrolledContent&&scrollY<=0&&setHasScrolledContent(!1)}),[hasScrolledContent]);let pressTarget=null;const overlayPressHandlers={onPointerDown:event=>{event.target===event.currentTarget&&(pressTarget=event.target,event.preventDefault())},onPointerUp:({target,button})=>{const isSameTarget=target===pressTarget;pressTarget=null,0===button&&isSameTarget&&onRequestClose()}},modal=(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([ref,forwardedRef]),className:(0,clsx.Z)("components-modal__screen-overlay",overlayClassName),onKeyDown:(0,with_ignore_ime_events.U)((function handleEscapeKeyDown(event){!shouldCloseOnEsc||"Escape"!==event.code&&"Escape"!==event.key||event.defaultPrevented||(event.preventDefault(),onRequestClose&&onRequestClose(event))})),...shouldCloseOnClickOutside?overlayPressHandlers:{},children:(0,jsx_runtime.jsx)(style_provider.Z,{document,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx.Z)("components-modal__frame",sizeClass,className),style,ref:(0,use_merge_refs.Z)([constrainedTabbingRef,focusReturnRef,"firstContentElement"!==focusOnMount?focusOnMountRef:null]),role,"aria-label":contentLabel,"aria-labelledby":contentLabel?void 0:headingId,"aria-describedby":aria.describedby,tabIndex:-1,onKeyDown,children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx.Z)("components-modal__content",{"hide-header":__experimentalHideHeader,"is-scrollable":hasScrollableContent,"has-scrolled-content":hasScrolledContent}),role:"document",onScroll:onContentContainerScroll,ref:contentRef,"aria-label":hasScrollableContent?(0,build_module.__)("Scrollable section"):void 0,tabIndex:hasScrollableContent?0:void 0,children:[!__experimentalHideHeader&&(0,jsx_runtime.jsxs)("div",{className:"components-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"components-modal__header-heading-container",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:icon}),title&&(0,jsx_runtime.jsx)("h1",{id:headingId,className:"components-modal__header-heading",children:title})]}),headerActions,isDismissible&&(0,jsx_runtime.jsx)(src_button.ZP,{onClick:onRequestClose,icon:library_close.Z,label:closeButtonLabel||(0,build_module.__)("Close")})]}),(0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([childrenContainerRef,"firstContentElement"===focusOnMount?focusOnMountRef:null]),children})]})})})});return(0,react_dom.createPortal)((0,jsx_runtime.jsx)(ModalContext.Provider,{value:nestedDismissers,children:modal}),document.body)})),src_modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"Modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement" | "firstContentElement"'}},headerActions:{defaultValue:{value:"null"},description:"Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",name:"headerActions",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"If this property is added it will cause the modal to render at a preset\nwidth, or expand to fill the screen. This prop will be ignored if\n`isFullScreen` is set to `true`.\n\nNote: `Modal`'s width can also be controlled by adjusting the width of the\nmodal's contents, or via CSS using the `style` prop.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"fill"'},{value:'"large"'},{value:'"medium"'}]}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/components/src/modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{modal.displayName="modal",modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement" | "firstContentElement"'}},headerActions:{defaultValue:{value:"null"},description:"Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",name:"headerActions",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"If this property is added it will cause the modal to render at a preset\nwidth, or expand to fill the screen. This prop will be ignored if\n`isFullScreen` is set to `true`.\n\nNote: `Modal`'s width can also be controlled by adjusting the width of the\nmodal's contents, or via CSS using the `style` prop.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"fill"'},{value:'"large"'},{value:'"medium"'}]}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"packages/components/src/modal/index.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/style-provider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>StyleProvider,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_cache__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/uuid/dist/esm-browser/v4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const uuidCache=new Set,containerCacheMap=new WeakMap,memoizedCreateCacheWithContainer=container=>{if(containerCacheMap.has(container))return containerCacheMap.get(container);let key=uuid__WEBPACK_IMPORTED_MODULE_2__.Z().replace(/[0-9]/g,"");for(;uuidCache.has(key);)key=uuid__WEBPACK_IMPORTED_MODULE_2__.Z().replace(/[0-9]/g,"");uuidCache.add(key);const cache=(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__.Z)({container,key});return containerCacheMap.set(container,cache),cache};function StyleProvider(props){const{children,document}=props;if(!document)return null;const cache=memoizedCreateCacheWithContainer(document.head);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C,{value:cache,children})}StyleProvider.displayName="StyleProvider";const __WEBPACK_DEFAULT_EXPORT__=StyleProvider;try{StyleProvider.displayName="StyleProvider",StyleProvider.__docgenInfo={description:"",displayName:"StyleProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},document:{defaultValue:null,description:"Current document.",name:"document",required:!0,type:{name:"Document"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/style-provider/index.tsx#StyleProvider"]={docgenInfo:StyleProvider.__docgenInfo,name:"StyleProvider",path:"packages/components/src/style-provider/index.tsx#StyleProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/components/src/modal/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithHeaderActions:()=>WithHeaderActions,WithsizeSmall:()=>WithsizeSmall,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/build-module/library/star-filled.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icons/build-module/library/star-empty.js"),_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/button/index.tsx"),_input_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/input-control/index.tsx"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/modal/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/Modal",argTypes:{children:{control:{type:null}},onKeyDown:{control:{type:null}},focusOnMount:{options:[!0,!1,"firstElement","firstContentElement"],control:{type:"select"}},role:{control:{type:"text"}},onRequestClose:{action:"onRequestClose"},isDismissible:{control:{type:"boolean"}}},parameters:{sourceLink:"packages/components/src/modal",badges:[],controls:{expanded:!0}}},Template=({onRequestClose,...args})=>{const[isOpen,setOpen]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),closeModal=event=>{setOpen(!1),onRequestClose(event)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{variant:"secondary",onClick:()=>setOpen(!0),children:"Open Modal"}),isOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{onRequestClose:closeModal,...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_input_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{style:{marginBottom:"20px"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{variant:"secondary",onClick:closeModal,children:"Close Modal"})]})]})},Default=Template.bind({});Default.args={title:"Title"},Default.parameters={docs:{source:{code:""}}};const WithsizeSmall=Template.bind({});WithsizeSmall.args={size:"small"},WithsizeSmall.storyName="With size: small";const LikeButton=()=>{const[isLiked,setIsLiked]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button__WEBPACK_IMPORTED_MODULE_3__.ZP,{icon:isLiked?_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__.Z:_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__.Z,label:"Like",onClick:()=>setIsLiked(!isLiked)})};LikeButton.displayName="LikeButton";const WithHeaderActions=Template.bind({});WithHeaderActions.args={...Default.args,headerActions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LikeButton,{}),isDismissible:!1},WithHeaderActions.parameters={...Default.parameters},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",...Default.parameters?.docs?.source}}},WithsizeSmall.parameters={...WithsizeSmall.parameters,docs:{...WithsizeSmall.parameters?.docs,source:{originalSource:"({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",...WithsizeSmall.parameters?.docs?.source}}},WithHeaderActions.parameters={...WithHeaderActions.parameters,docs:{...WithHeaderActions.parameters?.docs,source:{originalSource:"({\n  onRequestClose,\n  ...args\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openModal = () => setOpen(true);\n  const closeModal: ModalProps['onRequestClose'] = event => {\n    setOpen(false);\n    onRequestClose(event);\n  };\n  return <>\n            <Button variant=\"secondary\" onClick={openModal}>\n                Open Modal\n            </Button>\n            {isOpen && <Modal onRequestClose={closeModal} {...args}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                        sed do eiusmod tempor incididunt ut labore et magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud\n                        exercitation ullamco laboris nisi ut aliquip ex ea ea\n                        commodo consequat. Duis aute irure dolor in\n                        reprehenderit in voluptate velit esse cillum dolore eu\n                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n                        non proident, sunt in culpa qui officia deserunt mollit\n                        anim id est laborum.\n                    </p>\n\n                    <InputControl style={{\n        marginBottom: '20px'\n      }} />\n\n                    <Button variant=\"secondary\" onClick={closeModal}>\n                        Close Modal\n                    </Button>\n                </Modal>}\n        </>;\n}",...WithHeaderActions.parameters?.docs?.source}}}}}]);