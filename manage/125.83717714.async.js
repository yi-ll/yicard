(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[125],{"57zA":function(e,a,t){e.exports={card:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-card",heading:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-heading",steps:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-steps",errorIcon:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-errorIcon",errorPopover:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-errorPopover",errorListItem:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-errorListItem",errorField:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-errorField",editable:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-editable",advancedForm:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-advancedForm",optional:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-optional",stepsContent:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-stepsContent",stepsAction:"antd-pro\\pages\\-base-manager\\-ent-manager\\create\\index-stepsAction"}},NMLI:function(e,a,t){"use strict";var n=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var o=n(t("bx4M"));t("+L6B");var l=n(t("2/Rp"));t("Pwec");var s=n(t("CtXQ"));t("BoS7");var i=n(t("Sdc0"));t("5NDa");var d=n(t("5rEg")),u=n(t("pVnL")),c=n(t("lwsE")),m=n(t("W8MJ")),f=n(t("a1gu")),g=n(t("Nsbk")),p=n(t("7W2i"));t("y8nQ");var b,M,h,I,v=n(t("Vl3Y")),z=r(t("q1tI")),E=t("LLXN"),C=n(t("usdK")),x=n(t("6v3/")),k=n(t("HZnN")),w=n(t("ufQ4")),y=t("MuoO"),D=n(t("zHco")),L=n(t("YBnh")),O=n(t("57zA")),N=v.default.Item,S=(b=(0,y.connect)(function(e){var a=e.loading;return{submitting:a.effects["entManager/post"]}}),M=k.default.Secured("/baseManager/entmanager/create"),h=v.default.create(),b(I=(0,w.default)(I=M(I=h(I=function(e){function a(e){var t;return(0,c.default)(this,a),t=(0,f.default)(this,(0,g.default)(a).call(this,e)),t.handleSubmit=function(e){var a=t.props.form;e.preventDefault(),a.validateFieldsAndScroll(function(e,a){if(!e){var n=t.props.dispatch,r=t.state.locationData;a.lon=r.position?r.position.lng:0,a.lat=r.position?r.position.lat:0,delete a.isOpenPostion,n({type:"entManager/post",payload:a})}})},t.onCancel=function(){C.default.goBack()},t.isOpenChange=function(e){t.setState({isOpen:e,locationData:{}})},t.getLocationData=function(e){t.setState({locationData:e})},t.state={locationData:{}},t}return(0,p.default)(a,e),(0,m.default)(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldDecorator,t=e.submitting,n=e.currentUser,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},c=this.state,m=c.locationData,f=c.isOpen;return z.default.createElement(D.default,null,z.default.createElement(o.default,{bordered:!1},z.default.createElement(v.default,{style:{marginTop:8}},z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.create.formItem.label.parentOrganization",defaultMessage:"\u4e0a\u7ea7\u7ec4\u7ec7"})}),a("parentID",{rules:[{required:!0,message:(0,E.formatMessage)({id:"organization.create.formItem.label.parentOrganizationRequired",defaultMessage:"\u4e0a\u7ea7\u7ec4\u7ec7\u5fc5\u9009"})}]})(n?z.default.createElement(x.default,{showSearch:!0}):null)),z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.create.formItem.label.organizationName",defaultMessage:"\u7ec4\u7ec7\u540d\u79f0"})}),a("name",{rules:[{required:!0,message:(0,E.formatMessage)({id:"organization.create.formItem.label.organizationNameRequired",defaultMessage:"\u7ec4\u7ec7\u540d\u79f0\u5fc5\u586b"})}]})(z.default.createElement(d.default,{placeholder:(0,E.formatMessage)({id:"organization.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.create.formItem.label.contacts",defaultMessage:"\u8054\u7cfb\u4eba"})}),a("contacts")(z.default.createElement(d.default,{placeholder:(0,E.formatMessage)({id:"organization.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.edit.formItem.label.tel",defaultMessage:"\u8054\u7cfb\u7535\u8bdd"})}),a("tel")(z.default.createElement(d.default,{placeholder:(0,E.formatMessage)({id:"organization.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.formItem.label.address",defaultMessage:"\u5730\u5740"})}),a("address")(z.default.createElement(d.default,{placeholder:(0,E.formatMessage)({id:"organization.create.formItem.input.pleaseinput",defaultMessage:"\u8bf7\u8f93\u5165"})}))),z.default.createElement(N,(0,u.default)({},r,{label:(0,E.formatMessage)({id:"organization.create.formItem.label.location",defaultMessage:"\u5730\u56fe"}),extra:f?m.address:""}),a("isOpenPostion",{initialValue:f,valuePropName:"checked"})(z.default.createElement(i.default,{checkedChildren:(0,E.formatMessage)({id:"organization.create.formItem.switch.checkedChildren",defaultMessage:"\u5f00"}),unCheckedChildren:(0,E.formatMessage)({id:"organization.create.formItem.switch.unCheckedChildren",defaultMessage:"\u5173"}),onChange:this.isOpenChange})),f?z.default.createElement(L.default,{locationData:this.getLocationData}):null),z.default.createElement("div",{className:O.default.stepsAction},z.default.createElement(N,{style:{marginTop:32,textAlign:"center"}},z.default.createElement(l.default,{type:"primary",htmlType:"submit",loading:t,onClick:this.handleSubmit},(0,E.formatMessage)({id:"organization.create.formItem.button.sumbit",defaultMessage:"\u63d0\u4ea4"}),z.default.createElement(s.default,{type:"check"})),z.default.createElement(l.default,{style:{marginLeft:8},onClick:this.onCancel},(0,E.formatMessage)({id:"organization.create.formItem.button.goBack",defaultMessage:"\u8fd4\u56de"})))))))}}]),a}(z.PureComponent))||I)||I)||I)||I),P=S;a.default=P}}]);