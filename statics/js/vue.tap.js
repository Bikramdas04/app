(function(){var vueTap={};vueTap.install=function(Vue){Vue.directive("tap",{isFn:true,acceptStatement:true,bind:function(){},update:function(fn){var self=this;self.tapObj={};if(typeof fn!=="function"){return console.error('The param of directive "v-tap" must be a function!')}self.handler=function(e){e.tapObj=self.tapObj;fn.call(self,e)};this.el.addEventListener("touchstart",function(e){if(self.modifiers.stop){e.stopPropagation()}self.touchstart(e,self)},false);this.el.addEventListener("touchend",function(e){e.preventDefault();self.touchend(e,self,fn)},false)},unbind:function(){},isTap:function(){var self=this;if(self.el.disabled){return false}var tapObj=this.tapObj;return this.time<1000&&Math.abs(tapObj.distanceX)<2&&Math.abs(tapObj.distanceY)<2},touchstart:function(e,self){var touches=e.touches[0];var tapObj=self.tapObj;tapObj.pageX=touches.pageX;tapObj.pageY=touches.pageY;tapObj.clientX=touches.clientX;tapObj.clientY=touches.clientY;self.time=+new Date()},touchend:function(e,self){var touches=e.changedTouches[0];var tapObj=self.tapObj;self.time=+new Date()-self.time;tapObj.distanceX=tapObj.pageX-touches.pageX;tapObj.distanceY=tapObj.pageY-touches.pageY;if(self.isTap(tapObj)){self.handler(e)}}})};if(typeof exports=="object"){module.exports=vueTap}else{if(typeof define=="function"&&define.amd){define([],function(){return vueTap})}else{if(window.Vue){window.vueTap=vueTap;Vue.use(vueTap)}}}})();