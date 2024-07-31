"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8748],{"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/block-editor/src/components/line-height-control/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,UnconstrainedWidth:()=>UnconstrainedWidth,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),number_control=__webpack_require__("./packages/components/build-module/number-control/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LineHeightControl=({value:lineHeight,onChange,__nextHasNoMarginBottom=!1,__unstableInputWidth="60px",...otherProps})=>{const isDefined=function isLineHeightDefined(lineHeight){return void 0!==lineHeight&&""!==lineHeight}(lineHeight),adjustNextValue=(nextValue,wasTypedOrPasted)=>{if(isDefined)return nextValue;switch(`${nextValue}`){case"0.1":return 1.6;case"0":return wasTypedOrPasted?nextValue:1.4;case"":return 1.5;default:return nextValue}},value=isDefined?lineHeight:"";__nextHasNoMarginBottom||(0,build_module.Z)("Bottom margin styles for wp.blockEditor.LineHeightControl",{since:"6.0",version:"6.4",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version"});const deprecatedStyles=__nextHasNoMarginBottom?void 0:{marginBottom:24};return(0,jsx_runtime.jsx)("div",{className:"block-editor-line-height-control",style:deprecatedStyles,children:(0,jsx_runtime.jsx)(number_control.Z,{...otherProps,__unstableInputWidth,__unstableStateReducer:(state,action)=>{const wasTypedOrPasted=["insertText","insertFromPaste"].includes(action.payload.event.nativeEvent?.inputType),value=adjustNextValue(state.value,wasTypedOrPasted);return{...state,value}},onChange:(nextValue,{event})=>{""!==nextValue?"click"!==event.type?onChange(`${nextValue}`):onChange(adjustNextValue(`${nextValue}`,!1)):onChange()},label:(0,i18n_build_module.__)("Line height"),placeholder:1.5,step:.01,spinFactor:10,value,min:0,spinControls:"custom"})})};LineHeightControl.displayName="LineHeightControl";const line_height_control=LineHeightControl;LineHeightControl.__docgenInfo={description:"",methods:[],displayName:"LineHeightControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false",computed:!1},required:!1},__unstableInputWidth:{defaultValue:{value:"'60px'",computed:!1},required:!1}}};const index_story={component:line_height_control,title:"BlockEditor/LineHeightControl",parameters:{sourceLink:"packages/block-editor/src/components/line-height-control",badges:[]}},Template=props=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(line_height_control,{onChange:setValue,value,...props})};Template.displayName="Template";const Default=Template.bind({});Default.args={__nextHasNoMarginBottom:!0,__unstableInputWidth:"100px"};const UnconstrainedWidth=Template.bind({});UnconstrainedWidth.args={...Default.args,__unstableInputWidth:"100%"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState();\n  return <LineHeightControl onChange={setValue} value={value} {...props} />;\n}",...Default.parameters?.docs?.source}}},UnconstrainedWidth.parameters={...UnconstrainedWidth.parameters,docs:{...UnconstrainedWidth.parameters?.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState();\n  return <LineHeightControl onChange={setValue} value={value} {...props} />;\n}",...UnconstrainedWidth.parameters?.docs?.source}}}}}]);