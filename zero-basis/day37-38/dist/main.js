!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(2);var n=[{product:"手机",region:"华东",sale:[120,100,140,160,180,185,190,210,230,245,255,270]},{product:"手机",region:"华北",sale:[80,70,90,110,130,145,150,160,170,185,190,200]},{product:"手机",region:"华南",sale:[220,200,240,250,260,270,280,295,310,335,355,380]},{product:"笔记本",region:"华东",sale:[50,60,80,110,30,20,70,30,420,30,20,20]},{product:"笔记本",region:"华北",sale:[30,35,50,70,20,15,30,50,710,130,20,20]},{product:"笔记本",region:"华南",sale:[80,120,130,140,70,75,120,90,550,120,110,100]},{product:"智能音箱",region:"华东",sale:[10,30,4,5,6,5,4,5,6,5,5,25]},{product:"智能音箱",region:"华北",sale:[15,50,15,15,12,11,11,12,12,14,12,40]},{product:"智能音箱",region:"华南",sale:[10,40,10,6,5,6,8,6,6,6,7,26]}];var r={bind:function(t){let e=t.querySelectorAll("[checkbox-type=single]"),i=t.querySelector("[checkbox-type=all]");t.addEventListener("change",function(t){let n=[...e].filter(t=>t.checked);if("all"===t.target.getAttribute("checkbox-type"))if(n.length!==e.length)for(let i=0;i<e.length;i++)e[i].checked=t.target.checked;else t.target.checked=!0;else switch(n.length){case 0:t.target.checked=!0;break;case e.length:i.checked=!0;break;default:i.checked=!1}})},init:function(){document.getElementById("select-wrapper").querySelectorAll("input").forEach(t=>{t.checked=!0})},getSelectedItems:function(){let t=[],e=[];return document.getElementById("region-wrapper").querySelectorAll("[checkbox-type=single]").forEach(e=>{e.checked&&t.push(e.value)}),document.getElementById("product-wrapper").querySelectorAll("[checkbox-type=single]").forEach(t=>{t.checked&&e.push(t.value)}),{region:t,product:e}}};function h(){let t=document.getElementById("table-wrapper");for(;t.firstChild;)t.removeChild(t.firstChild);let e=document.createElement("table");t.appendChild(e);let i=document.createElement("tbody");e.appendChild(i),i.innerHTML="<tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>";let n=r.getSelectedItems(),h=1===n.region.length&&n.region.length<n.product.length;if(h){let t=i.rows[0].cells[0].innerText;i.rows[0].cells[0].innerText=i.rows[0].cells[1].innerText,i.rows[0].cells[1].innerText=t}s(n).forEach((t,e)=>{let r=document.createElement("tr");h?e%n.product.length==0?r.innerHTML=`<td rowspan=${n.product.length}>${t.region}</td><td>${t.product}</td>`:r.innerHTML=`<td>${t.product}</td>`:e%n.region.length==0?r.innerHTML=`<td rowspan=${n.region.length}>${t.product}</td><td>${t.region}</td>`:r.innerHTML=`<td>${t.region}</td>`,t.sale.forEach(t=>{r.innerHTML+=`<td>${t}<i class="fas fa-edit"></i></td>`}),r.addEventListener("click",a),i.appendChild(r)})}function s(t){let e=[];return(JSON.parse(localStorage.getItem("sourceData"))||n).forEach(i=>{t.region.indexOf(i.region)>-1&&t.product.indexOf(i.product)>-1&&e.push(i)}),e}function a(t){let e=t.target;if("TD"===e.nodeName){let t=e.innerHTML;e.innerHTML='<input type="text">\n                   <div class="input-icon">\n                     <i class="fas fa-check"></i>\n                     <i class="fas fa-times"></i>\n                   </div>',e.firstChild.focus(),e.firstChild.setAttribute("placeholder",t.slice(0,t.indexOf("<"))),e.firstChild.addEventListener("keydown",function(i){13===i.keyCode&&o(this.value)&&(e.innerHTML=this.value+'<i class="fas fa-edit"></i>'),27===i.keyCode&&(e.innerHTML=t)}),e.firstChild.addEventListener("blur",function(i){e.innerHTML=t}),e.querySelector(".fa-check").addEventListener("click",function(t){o(this.parentNode.previousElementSibling.value)&&(e.innerHTML=this.parentNode.previousElementSibling.value+'<i class="fas fa-edit"></i>')}),e.querySelector(".fa-times").addEventListener("click",function(){e.innerHTML=t})}}function o(t){return!isNaN(Number(t))&&""!==t.trim()||(alert("Input invalid!"),!1)}var c={render:h,init:function(){h()},getData:s,getCurrentData:function(){let t=[];return[...document.getElementsByTagName("tbody")[0].childNodes].slice(1).forEach(e=>{t.push([...e.childNodes].slice(-12).map(t=>t.innerText))}),t}};r.bind(document.getElementById("region-wrapper")),r.bind(document.getElementById("product-wrapper")),r.init(),c.init();const l=new class{constructor(t,e={}){this.data=e.data||[],this.margin=e.margin||10,this.barColor=e.barColor||"lightblue",this.axisColor=e.axisColor||"rgb(0,0,0)",this.container=t,this.width=document.documentElement.clientWidth/2,this.height=document.documentElement.clientHeight-350,this.init()}init(){this.setAttributes(this.container,{width:this.width,height:this.height})}set(t){this.data=t,this.clear(),this.drawAxes(),this.drawBars()}clear(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}drawAxes(){let t=document.createElementNS("http://www.w3.org/2000/svg","line");this.setAttributes(t,{x1:this.margin,y1:this.height-this.margin,x2:this.margin,y2:this.margin,stroke:this.axisColor,"stroke-width":2}),this.container.appendChild(t);let e=document.createElementNS("http://www.w3.org/2000/svg","line");this.setAttributes(e,{x1:this.margin,y1:this.height-this.margin,x2:this.width-this.margin,y2:this.height-this.margin,stroke:this.axisColor,"stroke-width":2}),this.container.appendChild(e)}drawBars(){let t=(this.width-2*this.margin)/(2*this.data.length+1),e=(this.height-2*this.margin)/Math.max(...this.data);this.data.forEach((i,n)=>{let r=e*i,h=document.createElementNS("http://www.w3.org/2000/svg","rect");this.setAttributes(h,{x:this.margin+t*(2*n+1),y:this.height-this.margin-r-2,width:t,height:r,fill:this.barColor}),this.container.appendChild(h)})}setAttributes(t,e){for(let i in e)t.setAttributeNS(null,i,e[i])}}(document.getElementById("svg")),d=new class{constructor(t,e={}){this.container=t,this.margin=e.margin||10,this.pointRadius=e.pointRadius||2.5,this.width=document.documentElement.clientWidth/2,this.height=document.documentElement.clientHeight-350,this.colors=["#f44242","#f48c41","#f4e541","#9af441","#41f4df","#41aff4","#4143f4","#ca41f4","#f4419d"],this.init()}init(){this.container.width=this.width,this.container.height=this.height,this.ctx=this.container.getContext("2d"),this.ctx.clearRect(0,0,this.width,this.height),this.drawAxes(),this.drawLines(c.getCurrentData())}set(t){this.data=t,this.ctx.clearRect(0,0,this.width,this.height),this.drawLine(),this.drawAxes()}drawAxes(){this.ctx.moveTo(this.margin,this.height-this.margin),this.ctx.lineTo(this.margin,this.margin),this.ctx.moveTo(this.margin,this.height-this.margin),this.ctx.lineTo(this.width-this.margin,this.height-this.margin),this.ctx.lineWidth=2,this.ctx.strokeStyle="rgb(0,0,0)",this.ctx.stroke()}drawLine(t,e,i="rgb(0,0,0)"){let n;t&&(this.data=t);let r=(this.width-2*this.margin)/(2*this.data.length+1);e||(e=(this.height-2*this.margin)/Math.max(...this.data)),this.data.forEach((t,h)=>{let s=this.margin+r*(2*h+1),a=this.height-this.margin-e*t;this.ctx.beginPath(),this.ctx.arc(s,a,this.pointRadius,0,2*Math.PI),this.ctx.fillStyle=i,this.ctx.fill(),h&&(this.ctx.beginPath(),this.ctx.moveTo(n.x,n.y),this.ctx.lineTo(s,a),this.ctx.strokeStyle=i,this.ctx.stroke()),n={x:s,y:a}})}drawLines(t){let e=Math.max(...t.map(t=>Math.max(...t))),i=(this.height-2*this.margin)/e;t.forEach((t,e)=>{this.drawLine(t,i,this.colors[e])})}}(document.getElementById("canvas"));window.addEventListener("mouseover",function(t){if("TD"===t.target.nodeName){let e=[...t.target.parentNode.childNodes].map(t=>t.innerText).slice(-12);l.set(e),d.set(e)}else"INPUT"!==t.target.nodeName&&"I"!==t.target.nodeName&&"input-icon"!==t.target.className&&d.init()}),document.getElementById("select-wrapper").addEventListener("change",function(t){c.render(),d.init()}),window.onresize=function(){window.location.href=window.location.href},document.getElementById("btn-save").addEventListener("click",function(){let t=[];[...document.getElementsByTagName("tbody")[0].childNodes].slice(1).forEach((e,i,n)=>{let r=[...e.childNodes];14===r.length?t.push({product:r[0].innerText,region:r[1].innerText,sale:r.slice(-12).map(t=>t.innerText)}):t.push({product:[...n[3*Math.floor(i/3)].childNodes][0].innerText,region:r[0].innerText,sale:r.slice(-12).map(t=>t.innerText)})}),localStorage.setItem("sourceData",JSON.stringify(t))})},,function(t,e,i){}]);