//Realize picture jump, its role is to jump to the image, click the button to jump to the image, help users better understand our course //
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//Form validation, the purpose of which is to verify that the information entered by the user complies with JavaScript regulations, this HTML form will trigger this action="mailto:username@hotmail.com" //
function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value; 
  var name1=document.myform.name1.value;  
  var name2=document.myform.name2.value;  
    
  if (name==null || name==""){  
    alert("First name can't be blank");  
    return false;  
  }
  if (name1==null || name1==""){  
    alert("Last name can't be blank");  
    return false;  
  }
  if (name2==null || name2==""){  
    alert("Intention can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }
  
  //Make link jumps //
  //Jump to the introduction of the Financial Management Section //
  function myFunction() {
    location.replace("https://www.netsuite.com/portal/resource/articles/financial-management/financial-management.shtml")
  }

  //Jump to the introduction of the Advanced mathematics course//
  function myFunction2() {
    location.replace("https://pll.harvard.edu/subject/mathematics")
  }

  //Jump to the introduction of the Venture Capital Course//
  function myFunction3() {
    location.replace("https://executive.berkeley.edu/venture-capital/executive")
  }

  //Jump to the introduction of the Real Estate Investment Course//
  function myFunction4() {
    location.replace("https://extension.harvard.edu/academics/programs/real-estate-investment-certificate/#:~:text=%20The%20professional%20graduate%20certificate%20in%20Real%20Estate,%28choose%20one%20course%20from%20select%20group%29%20More%20")
  }

  //Jump to the introduction of the Internet Finance Courses//
  function myFunction5() {
    location.replace("https://www.coursera.org/browse/business/finance")
  }

  //Jump to the introduction of the Internet Big Data course//
  function myFunction6() {
    location.replace("https://www.edx.org/learn/big-data")
  }
