
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// skills chart
	$(document).ready(function(e) {
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
		if(top<-300){
			if(index==0){	
			
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});


  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();

// var canvasDots = function() {
//     var canvas = document.querySelector('canvas'),
//         ctx = canvas.getContext('2d'),
//         colorDot = '#ffffff',
//         color = '#ffffff';
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     canvas.style.display = 'block';
//     ctx.fillStyle = colorDot;
//     ctx.lineWidth = .1;
//     ctx.strokeStyle = color;

//     var mousePosition = {
//         x: 30 * canvas.width / 100,
//         y: 30 * canvas.height / 100
//     };

//     var dots = {
//         nb: 500,
//         distance: 90,
//         d_radius: 130,
//         array: []
//     };

//     if (window.innerWidth <= 768) {
//         dots = {
//             nb: 200,
//             distance: 50,
//             d_radius: 90,
//             array: []
//         }
//     }

//     function Dot() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;

//         this.vx = -.5 + Math.random();
//         this.vy = -.5 + Math.random();

//         this.radius = Math.random();
//     }

//     Dot.prototype = {
//         create: function(){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             ctx.fill();
//         },

//         animate: function(){
//             for(i = 0; i < dots.nb; i++){

//                 var dot = dots.array[i];

//                 if(dot.y < 0 || dot.y > canvas.height){
//                     dot.vx = dot.vx;
//                     dot.vy = - dot.vy;
//                 }
//                 else if(dot.x < 0 || dot.x > canvas.width){
//                     dot.vx = - dot.vx;
//                     dot.vy = dot.vy;
//                 }
//                 dot.x += dot.vx;
//                 dot.y += dot.vy;
//             }
//         },

//         line: function(){
//             for(i = 0; i < dots.nb; i++){
//                 for(j = 0; j < dots.nb; j++){
//                     i_dot = dots.array[i];
//                     j_dot = dots.array[j];

//                     if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//                         if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
//                             ctx.beginPath();
//                             ctx.moveTo(i_dot.x, i_dot.y);
//                             ctx.lineTo(j_dot.x, j_dot.y);
//                             ctx.stroke();
//                             ctx.closePath();
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     function createDots(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for(i = 0; i < dots.nb; i++){
//             dots.array.push(new Dot());
//             dot = dots.array[i];

//             dot.create();
//         }

//         dot.line();
//         dot.animate();
//     }

//     window.onmousemove = function(parameter) {
//         mousePosition.x = parameter.pageX;
//         mousePosition.y = parameter.pageY;
//     }

//     mousePosition.x = window.innerWidth / 2;
//     mousePosition.y = window.innerHeight / 2;

//     setInterval(createDots, 1000/30);
// };

// window.onload = function() {
//     canvasDots();
// };

(function() {
    window.navigator.userAgent.match(/Macintosh/);
    $(n);

    function n() {
        $("form").each(function() {
            0 === $(window).height() / 2 ? window.setTimeout(function() {
                n()
            }, 100) : $(this).css("margin-top", -$(this).outerHeight() / 2)
        })
    };

    function r(a, b) {
        this.j = (this.i = "PUBLIC" !== a) ? a : "*";
        this.o = b
    }
    r.prototype.init = function(a) {
        window.addEventListener("message", function(b) {
            b = b.data;
            b.isCanvaApi && (a[b.type] || $.noop)(b)
        }, !1);
        this.sendMessage({
            type: "Init",
            authenticated: this.i
        })
    };
    r.prototype.sendMessage = function(a) {
        a.isCanvaApi = !0;
        this.o.postMessage(a, this.j)
    };

    function u() {
        var a = {
            embedDomain: "PUBLIC"
        };

        function b(c) {
            0 === $(c.target).closest("#loginForm, #signupForm").length && f.sendMessage({
                type: "LoginSignup",
                action: "hide"
            })
        }

        function k(c) {
            c = c.emailAddress;
            h();
            c && ($("#loginUsername").val(c), $("#emailSignup #email").val(c));
            d()
        }

        function d() {
            window.setTimeout(function() {
                f.sendMessage({
                    type: "LoginSignup",
                    action: "show"
                })
            }, 300)
        }

        function g() {
            var c = $(".intro").css("background-image").replace("url", "").replace("(", "").replace(")", "").replace(/["']/g, "");
            f.sendMessage({
                type: "LoginSignup",
                action: "pageTransition",
                u: c
            })
        }

        function h() {
            $("html").addClass("embedded");
            $(".embedded canvas").css("display", "none");
            if (/login\?redirect/gi.test(window.location.href)) {
                var c = window.location.href.replace("login?", "signup?").replace("redirect", "signupRedirect"),
                    c = c + "%3Fonboarding%26layouts";
                $(function() {
                    if (1 === $("#signupLinkWrapper a").length) $("#signupLinkWrapper a").attr("href", c), $("#signupLinkWrapper a").on("mousedown", g);
                    else {
                        var a = $('\x3ca href\x3d"' + c + '"\x3eSignup now\x3c/a\x3e');
                        a.on("mousedown",
                            g);
                        $("#loginForm .message").html("Don\x26#8217;t have an account?").append(a)
                    }
                })
            } else if (/signup\?signupRedirect/gi.test(window.location.href)) {
                var a = window.location.href.replace("signup?", "login?").replace("signupRedirect", "redirect");
                $(function() {
                    if (1 === $("#loginLinkWrapper a").length) $("#loginLinkWrapper a").attr("href", a), $("#loginLinkWrapper a").on("mousedown", g);
                    else {
                        var c = $('\x3cp style\x3d"margin-top:2em;"\x3eAlready have an account?\x3c/p\x3e'),
                            d = $('\x3ca href\x3d"' + a + '"\x3eLogin\x3c/a\x3e');
                        c.append(d);
                        d.on("mousedown", g);
                        $("#signupForm").append(c)
                    }
                })
            }
            var d = document.createElement("style");
            d.setAttribute("type", "text/css");
            var e = document.head || document.getElementsByTagName("head")[0];
            d.styleSheet ? d.styleSheet.cssText = "\n.embedded header { display: none !important; } .embedded footer { display: none !important; } .embedded .intro \x3e canvas { display: none !important; } " : d.appendChild(document.createTextNode("\n.embedded header { display: none !important; } .embedded footer { display: none !important; } .embedded .intro \x3e canvas { display: none !important; } "));
            e.appendChild(d);
            $("header").hide();
            $("footer").hide()
        }
        if (window != window.top) {
            var f = new r(a.embedDomain, window.parent);
            f.init({
                blur: function() {},
                focus: function() {},
                registerOrShowLogin: k
            });
            f.sendMessage({
                type: "LoginSignup"
            });
            window.addEventListener("click", b, !1)
        }
    }
    window !== window.top && u();
    (function() {
        function a() {
            $(".intro").mousemove(function(a) {
                m = a.clientX;
                q = a.clientY;
                t = Date.now();
                p || k()
            });
            $(window).on("blur mouseout", function() {
                q = m = null
            }).on("resize", function() {
                d && d.parentNode && d.parentNode.removeChild(d);
                b()
            });
            b()
        }

        function b() {
            var a = null == g ? !0 : !1;
            d = document.createElement("canvas");
            d.width = $(window).width();
            d.height = $(window).height();
            $(".intro").append(d);
            g = document.createElement("canvas");
            g.width = $(window).width();
            g.height = $(window).height();
            if (d.getContext && d.getContext("2d")) {
                h =
                    d.getContext("2d");
                f = g.getContext("2d");
                f.lineCap = "round";
                f.shadowColor = "#000000";
                f.shadowBlur = 30;
                c = new Image;
                var e = $(".intro").css("background-image");
                e && ($(c).one("load", function() {
                    a && k()
                }), e = e.replace(/url\((.*)\)/, "$1").replace(/["']/gi, "").replace(/\.jpg/, "_color.jpg"), $(c).attr("src", e), e = $('\x3cdiv style\x3d"position:absolute;height:0;width:0;overflow:hidden;"\x3e\x3c/div\x3e'), $(".intro").append(e), e.append(c))
            }
        }

        function k() {
            var a, b = Date.now();
            p = b > t + 500 ? !1 : !0;
            m && p && e.splice(0, 0, {
                time: b,
                x: m,
                y: q
            });
            for (a = 0; a < e.length;) 1E3 < b - e[a].time ? e.splice(a, e.length) : a++;
            0 < e.length && window.l(k);
            f.clearRect(0, 0, g.width, g.height);
            for (a = 1; a < e.length; a++) {
                var v = Math.sqrt(Math.pow(e[a].x - e[a - 1].x, 2) + Math.pow(e[a].y - e[a - 1].y, 2));
                f.strokeStyle = "rgba(0,0,0," + Math.max(1 - (b - e[a].time) / 1E3, 0) + ")";
                f.lineWidth = 25 + 75 * Math.max(1 - v / 50, 0);
                f.beginPath();
                f.moveTo(e[a - 1].x, e[a - 1].y);
                f.lineTo(e[a].x, e[a].y);
                f.stroke()
            }
            a = d.width;
            b = d.width / c.naturalWidth * c.naturalHeight;
            b < d.height && (b = d.height, a = d.height / c.naturalHeight * c.naturalWidth);
            h.drawImage(c, 0, 0, a, b);
            h.globalCompositeOperation = "destination-in";
            h.drawImage(g, 0, 0);
            h.globalCompositeOperation = "source-over"
        }
        var d, g, h, f, c, m = null,
            q = null,
            e = [],
            t = 0,
            p = !0;
        "createTouch" in document || $(a);
        window.l = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
        }()
    })();
    $(function() {
        $("menu .dropdown").on("mouseover", function() {
            if (0 >= $(this).parents("#movedMenus").length) {
                var a = $(this),
                    b = Number(a.data("timer"));
                null != b && clearTimeout(b);
                b = setTimeout(function() {
                    a.parent().find("li.hover").not(a).removeClass("hover").addClass("hoverOff");
                    a.removeClass("hoverOff").addClass("hover")
                }, 0);
                a.data("timer", b);
                a.on("mouseout", function() {
                    var b = Number(a.data("timer"));
                    null != b && clearTimeout(b);
                    b = setTimeout(function() {
                            a.off("mouseout").removeClass("hover").addClass("hoverOff")
                        },
                        500);
                    a.data("timer", b)
                })
            }
        })
    });
})();