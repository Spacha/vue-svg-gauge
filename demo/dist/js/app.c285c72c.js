(function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)i=o[p],n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="demo/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Vue-svg-gauge")]),a("h2",[e._v("Customizable gauge component with gradients and animations for VueJs")]),a("div",{staticClass:"example"},[a("VueSvgGauge",{staticClass:"gauge",attrs:{"start-angle":parseInt(e.startAngle||110),"end-angle":parseInt(e.endAngle||-110),value:parseInt(e.value),"separator-step":parseInt(e.separatorStep),min:parseInt(e.min||0),max:parseInt(e.max||100),"gauge-color":[{offset:0,color:"#347AB0"},{offset:100,color:"#8CDFAD"}],"scale-interval":parseInt(e.scale),"inner-radius":parseInt(e.innerRadius),"separator-thickness":parseInt(e.separatorThickness),"base-color":e.baseColor,easing:e.easing}}),a("div",{staticClass:"customizer"},[a("div",{staticClass:"property"},[a("label",{attrs:{for:"value"}},[e._v("Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:"value",type:"number"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),a("div",{staticClass:"block"},[a("div",{staticClass:"property"},[a("label",{attrs:{for:"startAngle"}},[e._v("Start angle")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.startAngle,expression:"startAngle"}],attrs:{id:"startAngle",type:"number"},domProps:{value:e.startAngle},on:{input:function(t){t.target.composing||(e.startAngle=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"endAngle"}},[e._v("End angle")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endAngle,expression:"endAngle"}],attrs:{id:"endAngle",type:"number"},domProps:{value:e.endAngle},on:{input:function(t){t.target.composing||(e.endAngle=t.target.value)}}})])]),a("div",{staticClass:"block"},[a("div",{staticClass:"property"},[a("label",{attrs:{for:"min"}},[e._v("Minimum value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.min,expression:"min"}],attrs:{id:"min",type:"number"},domProps:{value:e.min},on:{input:function(t){t.target.composing||(e.min=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"max"}},[e._v("Maximum value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.max,expression:"max"}],attrs:{id:"max",type:"number"},domProps:{value:e.max},on:{input:function(t){t.target.composing||(e.max=t.target.value)}}})])]),a("div",{staticClass:"block"},[a("div",{staticClass:"property"},[a("label",{attrs:{for:"separatorStep"}},[e._v("Separators Step")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separatorStep,expression:"separatorStep"}],attrs:{id:"separatorStep",type:"number"},domProps:{value:e.separatorStep},on:{input:function(t){t.target.composing||(e.separatorStep=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Separators thickness")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separatorThickness,expression:"separatorThickness"}],attrs:{id:"scale",type:"number"},domProps:{value:e.separatorThickness},on:{input:function(t){t.target.composing||(e.separatorThickness=t.target.value)}}})])]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Scale step")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.scale,expression:"scale"}],attrs:{id:"scale",type:"number"},domProps:{value:e.scale},on:{input:function(t){t.target.composing||(e.scale=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Inner radius")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.innerRadius,expression:"innerRadius"}],attrs:{id:"scale",type:"number"},domProps:{value:e.innerRadius},on:{input:function(t){t.target.composing||(e.innerRadius=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Base color")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseColor,expression:"baseColor"}],attrs:{id:"scale",type:"text"},domProps:{value:e.baseColor},on:{input:function(t){t.target.composing||(e.baseColor=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Easing function")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.easing,expression:"easing"}],attrs:{id:"scale",type:"text"},domProps:{value:e.easing},on:{input:function(t){t.target.composing||(e.easing=t.target.value)}}})])])],1),e._m(0)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom"},[e._v("Made with ❤️ at "),a("a",{attrs:{href:"https://comet.co/"}},[e._v("comet")])])}],i={name:"app",data:function(){return{startAngle:-110,endAngle:110,value:25,separatorStep:25,min:0,max:100,scale:5,innerRadius:60,separatorThickness:4,baseColor:"#ddd",easing:"Circular.Out"}}},o=i,l=(a("7faf"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,null,null),c=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gauge"},[e.height?a("svg",{attrs:{viewBox:"0 0 "+2*e.RADIUS+" "+e.height,height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("filter",{attrs:{id:"innershadow"}},[a("feFlood",{attrs:{"flood-color":"#c7c6c6"}}),a("feComposite",{attrs:{in2:"SourceAlpha",operator:"out"}}),a("feGaussianBlur",{attrs:{stdDeviation:"2",result:"blur"}}),a("feComposite",{attrs:{operator:"atop",in2:"SourceGraphic"}})],1),e.hasGradient?a("linearGradient",{attrs:{id:"gaugeGradient"}},e._l(e.gaugeColor,function(e,t){return a("stop",{key:e.color+"-"+t,attrs:{offset:e.offset+"%","stop-color":e.color}})}),1):e._e(),a("mask",{attrs:{id:"innerCircle"}},[a("circle",{attrs:{r:e.RADIUS-.5,cx:e.X_CENTER,cy:e.Y_CENTER,fill:"white"}}),a("circle",{attrs:{r:e.innerRadius,cx:e.X_CENTER,cy:e.Y_CENTER,fill:"black"}}),e.separatorPaths?e._l(e.separatorPaths,function(e,t){return a("path",{key:t,attrs:{d:e,fill:"black"}})}):e._e()],2)],1),a("g",{attrs:{mask:"url(#innerCircle)"}},[e.isCircle?a("circle",{attrs:{r:e.RADIUS,cx:e.X_CENTER,cy:e.Y_CENTER,fill:e.hasGradient?"url(#gaugeGradient)":e.gaugeColor}}):a("path",{attrs:{d:e.basePath,fill:e.hasGradient?"url(#gaugeGradient)":e.gaugeColor}}),e.value===e.min&&e.isCircle?a("circle",{attrs:{r:e.RADIUS,cx:e.X_CENTER,cy:e.Y_CENTER,fill:e.baseColor}}):a("path",{attrs:{d:e.gaugePath,fill:e.baseColor,filter:"url(#innershadow)"}})]),e.scaleLines?e._l(e.scaleLines,function(t,r){return a("line",{key:t.xE+"-"+r,attrs:{x1:t.xS,y1:t.yS,x2:t.xE,y2:t.yE,"stroke-width":"1",stroke:e.baseColor}})}):e._e(),a("foreignObject",{attrs:{x:"0",y:"0",width:"100%",height:e.height}},[e._t("default")],2)],2):e._e()])},d=[],g=a("a745"),v=a.n(g),m=(a("c5f6"),a("682a")),f=a.n(m),h=a("9b02"),b=a.n(h),y=100,C=100,x=100;function w(e,t){var a=(t-90)*Math.PI/180;return{x:C+e*Math.cos(a),y:x+e*Math.sin(a)}}function A(e,t,a){var r=w(e,a),n=w(e,t),s=a-t<=180?"0":"1",i=["M",r.x,r.y,"A",e,e,0,s,0,n.x,n.y,"L",C,x].join(" ");return i}var _={name:"Gauge",props:{value:{type:Number,default:70},min:{type:Number,default:0},max:{type:Number,default:100},startAngle:{type:Number,default:-90,validator:function(e){return(e<-360||e>360)&&console.warn('GaugeChart - props "startAngle" must be between -360 and 360'),!0}},endAngle:{type:Number,default:90,validator:function(e){return(e<-360||e>360)&&console.warn('GaugeChart - props "endAngle" must be between -360 and 360'),!0}},innerRadius:{type:Number,default:60,validator:function(e){return(e<0||e>100)&&console.warn('GaugeChart - props "innerRadius" must be between 0 and '.concat(y)),!0}},separatorStep:{type:Number,default:10,validator:function(e){return null!==e&&e<0&&console.warn('GaugeChart - props "separatorStep" must be null or >= 0'),!0}},separatorThickness:{type:Number,default:4},gaugeColor:{type:[Array,String],default:function(){return[{offset:0,color:"#347AB0"},{offset:100,color:"#8CDFAD"}]}},baseColor:{type:String,default:"#DDDDDD"},easing:{type:String,default:"Circular.Out"},scaleInterval:{type:Number,default:5,validator:function(e){return null!==e&&e<0&&console.warn('GaugeChart - props "scaleInterval" must be null or >= 0'),!0}}},data:function(){return{X_CENTER:C,Y_CENTER:x,RADIUS:y,tweenedValue:this.min}},computed:{height:function(){var e=this.endAngle,t=this.startAngle,a=w(y,t),r=a.y,n=w(y,e),s=n.y;return Math.abs(e)<=180&&Math.abs(t)<=180?Math.max(x,r,s):2*y},basePath:function(){var e=this.startAngle,t=this.endAngle;return A(y,e,t)},gaugePath:function(){var e=this.endAngle,t=this.getAngle,a=this.tweenedValue;return A(y,t(a),e)},totalAngle:function(){var e=this.startAngle,t=this.endAngle;return Math.abs(t-e)},isCircle:function(){return 360===Math.abs(this.totalAngle)},hasGradient:function(){return v()(this.gaugeColor)},separatorPaths:function(){var e=this.separatorStep,t=this.getAngle,a=this.min,r=this.max,n=this.separatorThickness,s=this.isCircle;if(e>0){var i=[],o=s?a:a+e;for(o;o<r;o+=e){var l=t(o),u=n/2;i.push(A(y+2,l-u,l+u))}return i}return null},scaleLines:function(){var e=this.scaleInterval,t=this.isCircle,a=this.min,r=this.max,n=this.getAngle,s=this.innerRadius;if(e>0){var i=[],o=t?a+e:a;for(o;o<r+e;o+=e){var l=n(o),u=w(s-4,l),c=w(s-8,l);i.push({xS:u.x,yS:u.y,xE:c.x,yE:c.y})}return i}return null}},watch:{value:{immediate:!0,handler:function(e){var t=this,a=this.easing,r=this.tweenedValue;function n(){f.a.update()&&requestAnimationFrame(n)}new f.a.Tween({tweeningValue:r}).to({tweeningValue:e},1500).easing(b()(f.a.Easing,a)).onUpdate(function(e){t.tweenedValue=e.tweeningValue}).start(),n()}}},methods:{getAngle:function(e){var t=this.min,a=this.max,r=this.startAngle,n=this.totalAngle,s=a-t||1;return e*n/s+r}}},S=_,E=(a("f611"),Object(l["a"])(S,p,d,!1,null,null,null)),N=E.exports,k={install:function(e,t){e.component("vue-svg-gauge",N),e.component("VueSvgGauge",N)}},P=k;r["a"].config.productionTip=!1,r["a"].use(P),new r["a"]({render:function(e){return e(c)}}).$mount("#app")},"7faf":function(e,t,a){"use strict";var r=a("8fba"),n=a.n(r);n.a},"8fba":function(e,t,a){},d9b6:function(e,t,a){},f611:function(e,t,a){"use strict";var r=a("d9b6"),n=a.n(r);n.a}});
//# sourceMappingURL=app.c285c72c.js.map