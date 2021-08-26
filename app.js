

  const checkbox = document.querySelector("input[type=checkbox]");
// SOLVE: https://www.codegrepper.com/code-examples/javascript/javascript+event+listener+checkbox
  checkbox.addEventListener( 'change', function() {
      if(this.checked) {
          checkbox.parentElement.style.textDecoration = 'line-through';
      } else {
          checkbox.parentElement.style.textDecoration = 'none';
      }
  });



//  All of our sad attempts below

  // function handleChange(checkbox) {
  //   if(checkbox.checked == true){
  //       checkbox.parentElement.style.color = 'red';
  //   }
  // }


  // const checkedInput = document.querySelector('input:checked');
  // checkedInput.parentElement.style.textDecoration = 'line-through';
  
  

  // document.querySelectorAll('checkInput').forEach(item => {
  //   item.addEventListener('click', event => {
  //     item.parentElement.style.textDecoration = 'line-through';
  //     console.log('input:checked');
  //   })
  // })

  // const checkboxes = document.querySelectorAll('checkInput')

  // for (let item of checkboxes){

  //   item.addEventListener('input', event =>{

  //   })
  //   // if (item.checked() === true){
  //   //   //Could work if text is placed in a span.
  //   //   item.parentElement.style.textDecoration = 'line-through';
  //   // }
  // }


  //resources: 
  // https://www.w3schools.com/jsref/prop_checkbox_checked.asp
  // https://www.w3schools.com/cssref/pr_text_text-decoration.asp