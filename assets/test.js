$(document).ready(function() {
    $('#createNew').click(function() {
  
      var postData = {
        name: $('#name').val(),
        rate: $('#rate').val()
      }
  
      $('#listAll').load('../salarylevel/createNew #listAll', postData, function(data, status, xhr) { 
          if (status == 'error') {
                var obj = JSON.parse(data);
                $.toast({
                    text: obj.errorMessage, // Text that is to be shown in the toast
                    heading: 'Error', // Optional heading to be shown on the toast
                    icon: 'danger', // Type of toast icon
                    showHideTransition: 'fade', // fade, slide or plain
                    allowToastClose: true, // Boolean value true or false
                    hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                });
          } else {
            $('#name').val('')
            $('#rate').val('')
                  $.toast({
                    text: "New salary level has been created.", // Text that is to be shown in the toast
                    heading: 'Success', // Optional heading to be shown on the toast
                    icon: 'success', // Type of toast icon
                    showHideTransition: 'fade', // fade, slide or plain
                    allowToastClose: true, // Boolean value true or false
                    hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                });
          }
      });
  
    });
    // Number validations
    $('.rate').bind('keyup paste', function(){
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  
  });
  
  
    function inlineEdit(id) {
  
      var postData = {
        id: id,
        name: $('#name-'+id).val(),
        rate: $('#rate-'+id).val()
      }
  
       $.ajax({
        url: '../salarylevel/updateRecord/' + id,
        type: "post",
        data: postData,
        success: function (response) {
              $.toast({
                    text: " Edit has been saved.", // Text that is to be shown in the toast
                    heading: 'Success', // Optional heading to be shown on the toast
                    icon: 'success', // Type of toast icon
                    showHideTransition: 'fade', // fade, slide or plain
                    allowToastClose: true, // Boolean value true or false
                    hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                });
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
  
    }
  
    function deleteRecord(id) {
      
      var postData = {
        id: id
      }
      var deleteConfirmed = false;
      var name = $('#name-'+id).val();
  
      $.ajax({
        url: '../salarylevel/checkRecord/' + id,
        type: "post",
        data: postData,
        async: false,
        success: function (data) {
          if (data > 0) {
            var peopleCount = data == 1 ? 'There is ' +data : 'There are ' +data; 
            $.toast({
              text: peopleCount + ' people using this salary rate, you cannot delete this salary level', // Text that is to be shown in the toast
              heading: 'Failed', // Optional heading to be shown on the toast
              icon: 'error', // Type of toast icon
              showHideTransition: 'fade', // fade, slide or plain
              allowToastClose: true, // Boolean value true or false
              hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
              stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
              position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
          });
          deleteConfirmed = false;
          
          } else {
              deleteConfirmed = true;
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
  
      if(deleteConfirmed) {
        $('#listAll').load('../salarylevel/deleteRecord #listAll', postData, function(data, status, xhr) { 
          if (status == 'error') {
              var obj = JSON.parse(data);
              $.toast({
                  text: obj.errorMessage, // Text that is to be shown in the toast
                  heading: 'Error', // Optional heading to be shown on the toast
                  icon: 'error', // Type of toast icon
                  showHideTransition: 'fade', // fade, slide or plain
                  allowToastClose: true, // Boolean value true or false
                  hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                  stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                  position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
              });
          } else {
                 $.toast({
                  text:  name+ " has been deleted.", // Text that is to be shown in the toast
                  heading: 'Success', // Optional heading to be shown on the toast
                  icon: 'success', // Type of toast icon
                  showHideTransition: 'fade', // fade, slide or plain
                  allowToastClose: true, // Boolean value true or false
                  hideAfter: 2000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                  stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                  position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
              });
          }
        });
      } 
  
  
    }
  