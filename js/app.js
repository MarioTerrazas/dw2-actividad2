$(function(){
  // Activar los tooltips
  $("[data-toggle='tooltip']").tooltip();
  // Activar los popovers
  $("[data-toggle='popover']").popover();
  // Configurar el carousel con intervalo de 2 segundos
  $('.carousel').carousel({
      interval: 2000
  });
  // Evento cuando el modal se está mostrando
  $('#Modal').on('show.bs.modal', function(e){
      console.log('El modal se está mostrando');
      // Modificar el botón del modal
      $('#modalbtn').removeClass('btn-info');
      $('#modalbtn').addClass('btn-success');
      $('#modalbtn').prop('disabled', true);
  });
  // Evento cuando el modal se ha mostrado completamente
  $('#Modal').on('shown.bs.modal', function(e){
      console.log('El modal se mostró completamente');
  });
  // Evento cuando el modal se está ocultando
  $('#Modal').on('hide.bs.modal', function(e){
      console.log('El modal se está ocultando');
  });
  // Evento cuando el modal se ha ocultado completamente
  $('#Modal').on('hidden.bs.modal', function(e){
      console.log('El modal se ocultó completamente');
      // Restaurar el botón del modal
      $('#modalbtn').prop('disabled', false);
      $('#modalbtn').removeClass('btn-success');
      $('#modalbtn').addClass('btn-info');
  });
});
/*este código jQuery proporciona funcionalidades como tooltips,
 popovers, un carousel y control sobre un modal en una página web.
  Estas características pueden mejorar la experiencia del usuario
   al proporcionar información adicional y facilitar la navegación.*/