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
  
  function myFunction() {
    location.replace("https://www.netsuite.com/portal/resource/articles/financial-management/financial-management.shtml")
  }

  function myFunction2() {
    location.replace("https://pll.harvard.edu/subject/mathematics")
  }

  function myFunction3() {
    location.replace("https://executive.berkeley.edu/venture-capital/executive")
  }

  function myFunction4() {
    location.replace("https://extension.harvard.edu/academics/programs/real-estate-investment-certificate/#:~:text=%20The%20professional%20graduate%20certificate%20in%20Real%20Estate,%28choose%20one%20course%20from%20select%20group%29%20More%20")
  }

  function myFunction5() {
    location.replace("https://www.coursera.org/browse/business/finance")
  }

  function myFunction6() {
    location.replace("https://www.edx.org/learn/big-data")
  }
