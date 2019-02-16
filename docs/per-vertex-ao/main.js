(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);t.regl=r()},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.createSampleCollection=function(e,t){var n=1-(t=Math.max(Math.min(t||0,1),0)),o=e.positions,i=e.normals,a=e.indices,c=o.length/3,l=a.length/3,s={perVertex:Array.from({length:c}).map(function(e){return[]}),all:[]};if(!o||!i||!a)return s;for(var u,p=[r.vec3.create(),r.vec3.create(),r.vec3.create()],f=[r.vec3.create(),r.vec3.create(),r.vec3.create()],v=r.vec3.create(),d=r.vec3.create(),h=r.vec3.create(),m=0;m<l;m++){for(r.vec3.copyFromOffset(h,a,3*m),u=0;u<3;u++)r.vec3.copyFromOffset(p[u],o,3*h[u]),r.vec3.copyFromOffset(f[u],i,3*h[u]);for(r.vec3.add(v,p[0],p[1]),r.vec3.add(v,v,p[2]),r.vec3.scale(v,v,1/3),r.vec3.add(d,f[0],f[1]),r.vec3.add(d,d,f[2]),r.vec3.normalize(d,d),u=0;u<3;u++){var g={position:r.vec3.create(),normal:r.vec3.create()};r.vec3.scale(g.position,p[u],n),r.vec3.scaleAndAdd(g.position,g.position,v,t),r.vec3.scale(g.normal,f[u],n),r.vec3.scaleAndAdd(g.normal,g.normal,d,t),r.vec3.normalize(g.normal,g.normal),s.perVertex[h[0]].push(g),s.perVertex[h[1]].push(g),s.perVertex[h[2]].push(g),s.all.push(g)}}return s}},113:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(0),c=n(22),l=n(114),s=n(115);t.renderSamples=function(e,t,n){return r(this,void 0,void 0,function(){var r,u,p,f,v,d,h,m;return o(this,function(o){if(n=Object.assign({near:.2,far:7,fov:.45*Math.PI,sampleSize:8},n||{}),r=t.length,u=n.sampleSize*n.sampleSize,(p=c.getSmallestPOTSize(r*u))>4096)throw new Error("Too large buffer!");return f=c.fbo(p),v=i.vec3.create(),d=Math.floor(p/n.sampleSize),h={viewport:{x:0,y:0,width:n.sampleSize,height:n.sampleSize},model:i.mat4.create(),view:i.mat4.create(),projection:i.mat4.perspective(i.mat4.create(),n.fov,1,n.near,n.far),positions:a.regl.buffer(e.positions),indices:a.regl.elements(e.indices),nearPlane:n.near,farPlane:n.far},f.use(function(e){a.regl.clear({color:[1,1,1,1],depth:1});for(var o=0;o<r;o++){var c=t[o];i.vec3.add(v,c.position,c.normal),i.mat4.lookAt(h.view,c.position,v,i.vec3.UP),h.viewport.x=o%d*n.sampleSize,h.viewport.y=Math.floor(o/d)*n.sampleSize,s.renderDepth(h)}}),m=l.reduceSamples(f,n.sampleSize,r),f.destroy(),[2,m]})})}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(22);t.reduceSamples=function(e,t,n){var c=o.getSmallestPOTSize(n),l=o.fbo(c),s=new Float32Array(n);return l.use(function(o){r.regl({vert:i,frag:a(t),attributes:{position:[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]},uniforms:{source:e,size:[c,c],sourceRes:[e.width,e.height],sampleSize:[t,t]},count:6})();for(var l=r.regl.read(),u=0;u<n;u++)s[u]=l[4*u]/255}),l.destroy(),s};var i="\n\tprecision highp float;\n\tattribute vec2 position;\n\n\tvoid main() {\n\t\tgl_Position = vec4(position, 0, 1);\n\t}\n",a=function(e){return"\n\tprecision mediump float;\n\tuniform sampler2D source;\n\tuniform vec2 size, sampleSize;\n\n\tvoid main() {\n\t\tfloat brightness = 0.0;\n\t\tvec2 lowerBound = (gl_FragCoord.xy - vec2(0.5)) / size;\n\t\tvec2 upperBound = (gl_FragCoord.xy + vec2(0.5)) / size;\n\n\t\tfor (float y = 0.0; y < 1.0; y+= "+(1/e).toFixed(4)+") {\n\t\t\tfor (float x = 0.0; x < 1.0; x += "+(1/e).toFixed(4)+") {\n\t\t\t\tvec2 texel = vec2(mix(lowerBound.x, upperBound.x, x), mix(lowerBound.y, upperBound.y, y));\n\t\t\t\tbrightness = brightness + texture2D(source, texel).r;\n\t\t\t}\n\t\t}\n\n\t\tbrightness = brightness / (sampleSize.x * sampleSize.y);\n\t\tgl_FragColor = vec4(brightness, 0, 0, 1);\n\t}\n"}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.renderDepth=r.regl({vert:"\n\t\tprecision highp float;\n\t\tattribute vec3 position;\n\t\tuniform mat4 model, view, projection;\n\t\tuniform float farPlane, nearPlane;\n\t\tvarying vec3 distance;\n\n\t\tvoid main() {\n\t\t\tvec4 cs_position = view * model * vec4(position, 1);\n\t\t\tdistance = vec3(min(((-cs_position.z - nearPlane) / (farPlane - nearPlane)), 1.0));\n\t\t\tgl_Position = projection * cs_position;\n\t\t}\n\t",frag:"\n\t\tprecision highp float;\n\t\tvarying vec3 distance;\n\n\t\tvoid main() {\n\t\t\tgl_FragColor = vec4(distance, 1);\n\t\t}\n\t",attributes:{position:r.regl.prop("positions")},uniforms:{model:r.regl.prop("model"),view:r.regl.prop("view"),projection:r.regl.prop("projection"),nearPlane:r.regl.prop("nearPlane"),farPlane:r.regl.prop("farPlane")},elements:r.regl.prop("indices"),viewport:r.regl.prop("viewport"),cull:{enable:!1,face:"back"}})},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.fbo=function(e,t){return r.regl.framebuffer({width:e,height:void 0!==t?t:e,colorFormat:"rgba",colorType:"uint8"})},t.getSmallestPOTSize=function(e){for(var t=1;t*t<e;)t*=2;return t}},25:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}l((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),n(26);var i=n(1),a=n(27),c=n(112),l=n(113);!function(){r(this,void 0,void 0,function(){var e,t,r,s,u,p,f,v,d,h,m,g,b,w,y,x,_,P;return o(this,function(o){switch(o.label){case 0:return[4,Promise.resolve().then(function(){return n(116)})];case 1:return e=o.sent(),t=e.positions.length/3,r=e.indices.length/3,console.log("Vertices: "+t+", Triangles: "+r),s=c.createSampleCollection(e,.2),[4,l.renderSamples(e,s.all,{near:.08,far:5,fov:.5*Math.PI,sampleSize:4})];case 2:for(u=o.sent(),v=0;v<u.length;v++)s.all[v].value=u[v];for(p=new Float32Array(t),f=i.vec3.create(),v=0;v<t;v++){for(d=s.perVertex[v],h=d.length,i.vec3.copyFromOffset(f,e.positions,3*v),m=0,g=0,b=[],w=[],_=0;_<h;_++)m=i.vec3.dist(f,d[_].position),g+=m,b.push(m),w.push(1-d[_].value);for(y=0,x=0,_=0;_<h;_++)P=1-b[_]/g,x+=P,y+=w[_]*P;y/=x,p[v]=1-y}return a.renderModel(e,p),[2]}})})}()},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);r.vec3.UP=r.vec3.fromValues(0,1,0),r.vec3.DOWN=r.vec3.fromValues(0,-1,0),r.vec3.LEFT=r.vec3.fromValues(-1,0,0),r.vec3.RIGHT=r.vec3.fromValues(1,0,0),r.vec3.ONE=r.vec3.fromValues(1,1,1),r.vec3.ZERO=r.vec3.fromValues(0,0,0),r.vec3.copyFromOffset=function(e,t,n){return e[0]=t[n+0],e[1]=t[n+1],e[2]=t[n+2],e}},27:function(e,t,n){"use strict";n.r(t),n.d(t,"renderModel",function(){return s});var r=n(0),o=n(1),i=n(23),a=n.n(i),c=n(24),l=n.n(c);function s(e,t){const n=document.getElementsByTagName("canvas")[0];e.positions=a()(e.positions,{center:[0,-.5,0]});var i=new l.a(n,{onRotate:u,drag:.01});const c=Object(r.regl)({vert:"\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 position;\n\t\t\tattribute vec3 normal;\n\t\t\tattribute float occlusion;\n\t\t\tuniform mat4 model, view, projection;\n\t\t\tvarying float vOcclusion;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_Position = projection * view * model * vec4(position, 1);\n\t\t\t\tvOcclusion = occlusion;\n\t\t\t}\n\t\t",frag:"\n\t\t\tprecision highp float;\n\t\t\tvarying float vOcclusion;\n\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = vec4(1.0 * vec3(vOcclusion), 1.0);\n\t\t\t}\n\t\t",attributes:{position:e.positions,occlusion:t},uniforms:{model:r.regl.prop("model"),view:r.regl.prop("view"),projection:r.regl.prop("projection")},viewport:r.regl.prop("viewport"),elements:e.indices,cull:{enable:!0,face:"back"}});let s=32;function u(){n.width=n.clientWidth,n.height=n.clientHeight;const e=i.rotation,t=o.mat4.lookAt([],[0,0,s],[0,0,0],[0,1,0]),a=o.mat4.perspective([],Math.PI/4,n.width/n.height,.1,1e3);r.regl.clear({color:[.3,.3,.3,1],depth:1}),c({model:e,view:t,projection:a,viewport:{x:0,y:0,width:n.width,height:n.height}})}window.addEventListener("wheel",function(e){e.deltaY<0?s*=.9:e.deltaY>0&&(s*=1.1),s=Math.max(2,Math.min(64,s)),u()}),i.spin(15,0)}}},[[25,2,3,1]]]);
//# sourceMappingURL=main.js.map