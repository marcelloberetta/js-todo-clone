$(document).ready(function () {

   var todoItems = []
   


   var list = $(".todo");
   var newInput = $(".add-todo");
   var template = $("#template li");

   

   for (var i = 0; i < todoItems.length; i++) {
       var todo = todoItems[i];
       var item = template.clone();
       item.find("text").text(todo.text);

       //AGGIUNGO ALLA LISTA
       list.append(item);
   }
   //INSERIMENTO TODO

   newInput.keyup(function (event) {

       

       if (event.which === 13) {

           var text = newInput.val().trim();

           if (text !== " ") {

               

               var item = template.clone();
               item.find(".text").text(text);

               //AGGIUNGO ALLA LISTA

               list.append(item);

               
               newInput.val(" ");


           }
       }
   })

   //RIMUOVO TODO ITEM

   $("body").on("click", ".todo li i", function () {

       $(this).parent().remove();


   });

   //COMPLETO TODO ITEM

   $("body").on("click", ".todo li .text", function () {

       $(this).toggleClass("completed");



   });








})
