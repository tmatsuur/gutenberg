(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2102],{"./node_modules/@ariakit/react-core/esm/__chunks/346FK57L.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>useCompositeTypeahead});var _3IEDWLST_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3IEDWLST.js"),_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js"),_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/events.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),chars="";function clearChars(){chars=""}function itemTextStartsWith(item,text){var _a;const itemText=(null==(_a=item.element)?void 0:_a.textContent)||item.children;return!!itemText&&(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.Ue)(itemText).trim().toLowerCase().startsWith(text.toLowerCase())}var useCompositeTypeahead=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_5__.Bi)((_a=>{var _b=_a,{store,typeahead=!0}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__.S0)(_b,["store","typeahead"]);const context=(0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_7__.$)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_3__.kG)(store,!1);const onKeyDownCaptureProp=props.onKeyDownCapture,cleanupTimeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),onKeyDownCapture=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_8__.zX)((event=>{if(null==onKeyDownCaptureProp||onKeyDownCaptureProp(event),event.defaultPrevented)return;if(!typeahead)return;if(!store)return;const{items,activeId}=store.getState();if(!function isValidTypeaheadEvent(event){const target=event.target;return(!target||!(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.eS)(target))&&(!(" "!==event.key||!chars.length)||1===event.key.length&&!event.ctrlKey&&!event.altKey&&!event.metaKey&&/^[\p{Letter}\p{Number}]$/u.test(event.key))}(event))return clearChars();let enabledItems=function getEnabledItems(items){return items.filter((item=>!item.disabled))}(items);if(!function isSelfTargetOrItem(event,items){if((0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_2__.Ud)(event))return!0;const target=event.target;return!!target&&items.some((item=>item.element===target))}(event,enabledItems))return clearChars();event.preventDefault(),window.clearTimeout(cleanupTimeoutRef.current),cleanupTimeoutRef.current=window.setTimeout((()=>{chars=""}),500);const char=event.key.toLowerCase();chars+=char,enabledItems=function getSameInitialItems(items,char,activeId){if(!activeId)return items;const activeItem=items.find((item=>item.id===activeId));return activeItem&&itemTextStartsWith(activeItem,char)?chars!==char&&itemTextStartsWith(activeItem,chars)?items:(chars=char,(0,_3IEDWLST_js__WEBPACK_IMPORTED_MODULE_4__.$3)(items.filter((item=>itemTextStartsWith(item,chars))),activeId).filter((item=>item.id!==activeId))):items}(enabledItems,char,activeId);const item=enabledItems.find((item2=>itemTextStartsWith(item2,chars)));item?store.move(item.id):clearChars()}));return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_6__.ih)({},props),{onKeyDownCapture})}));(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_5__.LM)((props=>{const htmlProps=useCompositeTypeahead(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_5__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/4ZEZYKUR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>usePopoverDisclosure});var NWCBQ4CV=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/NWCBQ4CV.js"),_3ORBWXWF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react=__webpack_require__("./node_modules/react/index.js"),DLOEKDPY=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js"),useButton=(0,_3ORBWXWF.Bi)((props=>{const ref=(0,react.useRef)(null),tagName=(0,_6O5OEQGF.O)(ref,props.as||"button"),[isNativeButton,setIsNativeButton]=(0,react.useState)((()=>!!tagName&&(0,DLOEKDPY.iK)({tagName,type:props.type})));return(0,react.useEffect)((()=>{ref.current&&setIsNativeButton((0,DLOEKDPY.iK)(ref.current))}),[]),props=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({role:isNativeButton||"a"===tagName?void 0:"button"},props),{ref:(0,_6O5OEQGF.qq)(ref,props.ref)}),props=(0,NWCBQ4CV.Y)(props)}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=useButton(props);return(0,_3ORBWXWF.az)("button",htmlProps)}));var OAYFXAQ2=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/OAYFXAQ2.js"),I2VQ3XGR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),symbol=Symbol("disclosure"),useDisclosure=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store,toggleOnClick=!0}=_b,props=(0,_4R3V3JGP.S0)(_b,["store","toggleOnClick"]);const context=(0,OAYFXAQ2.eR)();store=store||context,(0,I2VQ3XGR.kG)(store,!1);const ref=(0,react.useRef)(null),[expanded,setExpanded]=(0,react.useState)(!1),disclosureElement=store.useState("disclosureElement"),open=store.useState("open");(0,react.useEffect)((()=>{let isCurrentDisclosure=disclosureElement===ref.current;(null==disclosureElement?void 0:disclosureElement.isConnected)||(null==store||store.setDisclosureElement(ref.current),isCurrentDisclosure=!0),setExpanded(open&&isCurrentDisclosure)}),[disclosureElement,store,open]);const onClickProp=props.onClick,toggleOnClickProp=(0,_6O5OEQGF.yl)(toggleOnClick),[isDuplicate,metadataProps]=(0,_6O5OEQGF.XJ)(props,symbol,!0),onClick=(0,_6O5OEQGF.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||isDuplicate||toggleOnClickProp(event)&&(null==store||store.setDisclosureElement(event.currentTarget),null==store||store.toggle())})),contentElement=store.useState("contentElement");return props=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)((0,_4R3V3JGP.ih)({"aria-expanded":expanded,"aria-controls":null==contentElement?void 0:contentElement.id},metadataProps),props),{ref:(0,_6O5OEQGF.qq)(ref,props.ref),onClick}),props=useButton(props)}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=useDisclosure(props);return(0,_3ORBWXWF.az)("button",htmlProps)}));var G6BJYYBK=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/G6BJYYBK.js"),useDialogDisclosure=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_4R3V3JGP.S0)(_b,["store"]);const context=(0,G6BJYYBK.pQ)();store=store||context,(0,I2VQ3XGR.kG)(store,!1);const contentElement=store.useState("contentElement");return props=(0,_4R3V3JGP.ih)({"aria-haspopup":(0,DLOEKDPY.SK)(contentElement,"dialog")},props),props=useDisclosure((0,_4R3V3JGP.ih)({store},props))}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=useDialogDisclosure(props);return(0,_3ORBWXWF.az)("button",htmlProps)}));var _7H5KSHHF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js"),usePopoverAnchor=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_4R3V3JGP.S0)(_b,["store"]);const context=(0,_7H5KSHHF.yL)();return store=store||context,props=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},props),{ref:(0,_6O5OEQGF.qq)(null==store?void 0:store.setAnchorElement,props.ref)})}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=usePopoverAnchor(props);return(0,_3ORBWXWF.az)("div",htmlProps)}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),usePopoverDisclosure=(0,_3ORBWXWF.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_4R3V3JGP.S0)(_b,["store"]);const context=(0,_7H5KSHHF.yL)();store=store||context,(0,I2VQ3XGR.kG)(store,!1);const onClickProp=props.onClick,onClick=(0,_6O5OEQGF.zX)((event=>{null==store||store.setAnchorElement(event.currentTarget),null==onClickProp||onClickProp(event)}));return props=(0,_6O5OEQGF.OJ)(props,(element=>(0,jsx_runtime.jsx)(_7H5KSHHF.ZQ,{value:store,children:element})),[store]),props=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},props),{onClick}),props=usePopoverAnchor((0,_4R3V3JGP.ih)({store},props)),props=useDialogDisclosure((0,_4R3V3JGP.ih)({store},props))}));(0,_3ORBWXWF.LM)((props=>{const htmlProps=usePopoverDisclosure(props);return(0,_3ORBWXWF.az)("button",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/6XBVQI3K.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>CheckboxCheckedContext});var CheckboxCheckedContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(!1)},"./node_modules/@ariakit/react-core/esm/__chunks/G6ONQ5EH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>useCompositeHover});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/DLOEKDPY.js"),_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/focus.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js");function getMouseDestination(event){const relatedTarget=event.relatedTarget;return(null==relatedTarget?void 0:relatedTarget.nodeType)===Node.ELEMENT_NODE?relatedTarget:null}var symbol=Symbol("composite-hover");var useCompositeHover=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__.Bi)((_a=>{var _b=_a,{store,focusOnHover=!0,blurOnHoverEnd=!!focusOnHover}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.S0)(_b,["store","focusOnHover","blurOnHoverEnd"]);const context=(0,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_5__.$)();store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.kG)(store,!1);const isMouseMoving=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.m1)(),onMouseMoveProp=props.onMouseMove,focusOnHoverProp=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.yl)(focusOnHover),onMouseMove=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.zX)((event=>{if(null==onMouseMoveProp||onMouseMoveProp(event),!event.defaultPrevented&&isMouseMoving()&&focusOnHoverProp(event)){if(!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.B_)(event.currentTarget)){const baseElement=null==store?void 0:store.getState().baseElement;baseElement&&!(0,_ariakit_core_utils_focus__WEBPACK_IMPORTED_MODULE_7__.H1)(baseElement)&&baseElement.focus()}null==store||store.setActiveId(event.currentTarget.id)}})),onMouseLeaveProp=props.onMouseLeave,blurOnHoverEndProp=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.yl)(blurOnHoverEnd),onMouseLeave=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.zX)((event=>{var _a2;null==onMouseLeaveProp||onMouseLeaveProp(event),event.defaultPrevented||isMouseMoving()&&(function hoveringInside(event){const nextElement=getMouseDestination(event);return!!nextElement&&(0,_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.r3)(event.currentTarget,nextElement)}(event)||function movingToAnotherItem(event){let dest=getMouseDestination(event);if(!dest)return!1;do{if((0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.nr)(dest,symbol)&&dest[symbol])return!0;dest=dest.parentElement}while(dest);return!1}(event)||focusOnHoverProp(event)&&blurOnHoverEndProp(event)&&(null==store||store.setActiveId(null),null==(_a2=null==store?void 0:store.getState().baseElement)||_a2.focus()))})),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>{element&&(element[symbol]=!0)}),[]);return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_4__.ih)({},props),{ref:(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_6__.qq)(ref,props.ref),onMouseMove,onMouseLeave})}));(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__.W5)((props=>{const htmlProps=useCompositeHover(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_3__.az)("div",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/JL6IRDFK.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,x:()=>useRadio});var _XEV62JUQ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/XEV62JUQ.js"),_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/QZLXIDNP.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js"),_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js");var useRadio=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store,name,value,checked}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_XEV62JUQ_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_EKQEJRUF_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,props.as||"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves,activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange,onClick,onFocus}),props=(0,_QZLXIDNP_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store,clickOnEnter:!nativeRadio},props)),(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props)})),Radio=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.W5)((props=>{const htmlProps=useRadio(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/LEIRFLRL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useRadioStore});var _7GBW5FLS=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7GBW5FLS.js"),EKQEJRUF=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/EKQEJRUF.js"),VEUNYQYR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/VEUNYQYR.js"),K6ELJFXN=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/K6ELJFXN.js"),I2VQ3XGR=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),_4R3V3JGP=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");function createRadioStore(_a={}){var _a2,props=(0,_4R3V3JGP.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,VEUNYQYR.t)((0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},props),{focusLoop:(0,I2VQ3XGR.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},composite.getState()),{value:(0,I2VQ3XGR.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,K6ELJFXN.MT)(initialState,composite,props.store);return(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)((0,_4R3V3JGP.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,EKQEJRUF.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,_7GBW5FLS.b)(store,update,props),(0,EKQEJRUF.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./node_modules/@ariakit/react-core/esm/__chunks/MW2F7SEA.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>useCheckboxCheck});var _6XBVQI3K_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6XBVQI3K.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),checkmark=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{display:"block",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5pt",viewBox:"0 0 16 16",height:"1em",width:"1em",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline",{points:"4,8 7,12 12,4"})});var useCheckboxCheck=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.Bi)((_a=>{var _b=_a,{store,checked}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.S0)(_b,["store","checked"]);const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_6XBVQI3K_js__WEBPACK_IMPORTED_MODULE_4__.x),children=function getChildren(props){return props.checked?props.children||checkmark:"function"==typeof props.children?props.children:null}({checked:checked=null!=checked?checked:context,children:props.children});return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({"aria-hidden":!0},props),{children,style:(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_3__.ih)({width:"1em",height:"1em",pointerEvents:"none"},props.style)})}));(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.LM)((props=>{const htmlProps=useCheckboxCheck(props);return(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_2__.az)("span",htmlProps)}))},"./node_modules/@ariakit/react-core/esm/__chunks/W76OTZCC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Vo:()=>useComboboxProviderContext});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),_7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7H5KSHHF.js"),_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ctx=(0,_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.re)([_7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_2__.qo,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_3__.Lq],[_7H5KSHHF_js__WEBPACK_IMPORTED_MODULE_2__.ZQ,_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_3__.al]),useComboboxProviderContext=(ctx.useContext,ctx.useScopedContext,ctx.useProviderContext);ctx.ContextProvider,ctx.ScopedContextProvider,(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1)},"./node_modules/@ariakit/react-core/esm/__chunks/XEV62JUQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hz:()=>useRadioProviderContext,Wh:()=>useRadioContext,o:()=>RadioScopedContextProvider});var _IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IB7YUKH5.js"),ctx=(0,__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js").re)([_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_IB7YUKH5_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./node_modules/@ariakit/react-core/esm/radio/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _chunks_XEV62JUQ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/XEV62JUQ.js"),_chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/7QTPYGNZ.js"),_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/3ORBWXWF.js"),_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6O5OEQGF.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/I2VQ3XGR.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((_a=>{var _b=_a,{store}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_XEV62JUQ_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_6O5OEQGF_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_XEV62JUQ_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_7QTPYGNZ_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),RadioGroup=(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.LM)((props=>{const htmlProps=useRadioGroup(props);return(0,_chunks_3ORBWXWF_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>LayoutGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children,id,inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender})),[key]);return(0,jsx_runtime.jsx)(LayoutGroupContext.p.Provider,{value:memoizedContext,children})}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents}}]);