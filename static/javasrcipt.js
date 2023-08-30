var tesla = function(e) {
    if (e == 10000000) {
        return "You have got Tesla. Good Job!!!"
      }
      if (e == "") {
        return "You put nothing."
      }
      if (e > 10000000) {
        return "You have got Tesla. Good Job!!!"
      } else {
        return 10000000 - e
      }
};

var vTesla = function(e) {
    return (10000000 - e) / 840
}

$("#video").on("click", function(event) {
        event.preventDefault();
        var $ag = $("#tesla-form").find("[name=🔋]")
          
        var ag = $ag.val()
          
        var dount = vTesla(ag);
          
        $("#result").text(dount);

      })




  
  $("#tesla-form").on("submit", function(event) {
      event.preventDefault();
      
      
      var $age = $(this).find("[name=🔋]")
      
      var age = $age.val()
      
      var dounts = tesla(age);
      
      $("#result").text(dounts);
  });
  
