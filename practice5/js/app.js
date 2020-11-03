const name = document.getElementById("firstnam");
const picture = document.getElementById("image");
const mail = document.getElementById("em");
let num = 1;
let numb = 0;
let start = {
    Firstname: name.innerText,
    Imag: picture.src,
    Email: mail.innerText
};
name.onclick = function(){
    if(numb++%5 === 0){
        name.innerText = start.Firstname;
        picture.src = start.Imag;
        mail.innerText = start.Email;
    }
    else{
        if(num >= 12)num = 1; else num++;
        $ajaxUtils.sendGetRequest("https://web-development-task8.herokuapp.com/users"+num,function(response){
            const json =  JSON.parse(response.responseText);
            name.innerText = json.first_name +" "+ json.last_name;
            mail.innerText = json.email;
            picture.src = json.avatar; 
        });
    }
};