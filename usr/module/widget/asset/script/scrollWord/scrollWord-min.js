function ScrollWord(a,b){this.obj=$("#"+a),this.params=$.extend({time:2e3},b||{}),this.init()}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c}}),ScrollWord.prototype={init:function(){this.timer=setInterval($.proxy(this.rotate,this),this.params.time),this.bindEvent()},bindEvent:function(){var a=this;this.obj.mouseover(function(){clearInterval(a.timer)}).mouseout(function(){a.timer=setInterval(a.rotate.bind(a),a.params.time)})},rotate:function(){var a=this,b=a.obj.find("li:first"),c=b.outerHeight();this.obj.animate({marginTop:-c},800,"easeOutCubic",function(){a.obj.append(b),a.obj.css("marginTop",0)})}}