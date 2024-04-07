function Validate()
{
    //to fetch username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('pass').value;
    const cboxes=document.getElementById("checkboxes").querySelectorAll('input[type= "checkbox"]:checked');

    // regex for password and username check
    let pssPat=/[0-9]+[a-zA-Z]*/;
    let namePat=/[a-zA-Z]+[0-9]*/;

    // to check the length and validate the pattern , if found wrong return false 
    if(!namePat.test(username)||username.length<3)
        return wrongInput("Wrong Username  ");
  
    if(!pssPat.test(password)||password.length<6)
        return wrongInput("Wrong Password");

   
    if(!document.getElementById("Male").checked&&!document.getElementById("Female").checked)
       return wrongInput("No gender selected");

    if(cboxes.length==0)
        return wrongInput("No programming language selected ");

    alert("Form Submited successfully");
    return true;
}
function wrongInput(data)
{
    alert(data);
    return false;
}
