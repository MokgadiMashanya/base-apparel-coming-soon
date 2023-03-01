window.onload=()=>
{

    var label_id=document.getElementById('label_id');
    label_id.innerHTML='Please provide a valid email';
    label_id.style.display='none';
    var btnsub=document.getElementById('btnsub');
    var emailfield=document.getElementById('emailfield');

    var hfist=document.getElementById('hfistid');
    hfist.innerHTML=`We're`;
    var hsecond=document.getElementById('hsecondid');
    hsecond.innerHTML='coming <br> soon';
    var ptag=document.getElementById('ptagid');
    ptag.innerHTML=`Hello fellow shoppers! We're currently building our new<br>
    fashion store. Add your email below to stay up-to-date<br> with announcements
    and our launch deals.`;
    var imgcover=document.getElementById('imgcover');
    imgcover.src='images/hero-desktop.jpg';
    var logo=document.getElementById('logo');
    logo.src='images/logo.svg';

    var anchor=document.getElementById('anchor');
    anchor.innerHTML='Mokgadi Mashanya';
    anchor.href="https://mokgadimashanya.github.io/Introduction-to-HTML/";

    //validating form submission
    btnsub.onclick=()=>{
        if(emailfield.value=='' || !(emailfield.value).includes('@'))
        {
            label_id.style.display='block';
        }else{
            label_id.style.display='none';
        }
    }


    
}