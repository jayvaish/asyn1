function Product(n,c,e,p){
    

    this.name=n;
    this.contact=c;
    this.email=e;
    this.password=p;
}





function myFunction(event){


    event.preventDefault()

    let form=document.getElementById("data")

    let name=form.name.value;
    let contact=form.contact.value;
    let email=form.email.value;
    let password=form.password.value;


    let s1=new Product( name,contact,email,password)

    let bio=JSON.parse(localStorage.getItem("data")) ||[]

    bio.push(s1);

    localStorage.setItem("data",JSON.stringify(bio))


    // window.location.href="https://i.imgur.com/EewiXkw.png"

    
    console.log(s1);
    
}
