$(function(){$("[data-toggle='tooltip']").tooltip(),$("[data-toggle='popover']").popover(),$(".carousel").carousel({interval:2e3}),$("#Modal").on("show.bs.modal",function(o){console.log("el modal se esta mostrando"),$("#modalbtn").removeClass("btn-info"),$("#modalbtn").addClass("btn-success"),$("#modalbtn").prop("disabled",!0)}),$("#Modal").on("shown.bs.modal",function(o){console.log("el modal se esta mostro")}),$("#Modal").on("hide.bs.modal",function(o){console.log("el modal se esta ocultando")}),$("#Modal").on("hidden.bs.modal",function(o){console.log("el modal se oculto"),$("#modalbtn").prop("disabled",!1),$("#modalbtn").removeClass("btn-success"),$("#modalbtn").addClass("btn-info")})});