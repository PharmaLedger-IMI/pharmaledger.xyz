import{r as e,h as t,g as o}from"./p-9835b40a.js";import"./p-869e3fb2.js";import{T as n}from"./p-61f24b9e.js";import{C as s}from"./p-ec895615.js";import{C as i}from"./p-f49df5a7.js";var r=function(e,t,o,n){var s,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(i<3?s(r):i>3?s(t,o,r):s(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};const a=class{constructor(t){e(this,t),this.formActions=""}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){if("string"==typeof this.controllerName)return new Promise((e,t)=>{i.getController(this.controllerName).then(t=>{if(this.disconnected)return e();this.controller=new t(this._host),e()}).catch(t)})}render(){return t("div",{class:"container"},t("form",null,t("slot",null),this._createFormActions(this.formActions)))}_createFormActions(e){if(0===e.trim().length)return null;let o=[];return o=e.split(",").map(e=>t("psk-button",{"button-class":e,"event-name":e,label:e})),t("div",{id:"actions",class:"container-fluid"},o)}get _host(){return o(this)}};r([s()],a.prototype,"controller",void 0),r([n({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:!1,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],a.prototype,"controllerName",void 0),r([n({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.','If this attribute is not defined, you can also add <psk-link page="web-components/psk-button">psk-button</psk-link> components anywhere in the form. The rule is the same, the event-name attribute assigned to the psk-button component needs to be registered in the form\'s controller.'],isMandatory:!1,propertyType:"string values sepparated by comma (,)",defaultValue:"null",specialNote:["If this attribute has no value, then the form will have no actions."]})],a.prototype,"formActions",void 0);export{a as psk_form};