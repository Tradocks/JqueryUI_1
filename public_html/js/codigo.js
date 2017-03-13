$(document).ready(function (){
    $("#acordeon").accordion();
    $("#txtfec").datepicker();
    $(".botones").button();
    $(".opciones").checkboxradio({
        icon: false
    });   
   $("#divdialog").dialog({
      autoOpen: false,
      
      width:350,
      height: 300,
      modal: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    }); 
    $("#camdVer").on( "click", function() {
      $("#divdialog").dialog( "open" );
    });  
       $( function() {  
       var dateFormat = "dd/mm/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          changeYear: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
         
      function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );
     var handle = $("#edad");    
    $("#barrraed").slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
       
 
});


