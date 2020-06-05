    let c1 = document.getElementById("c1");
    let c2 = document.getElementsByClassName("c2")[0];
    let c3 = document.querySelector(".c3");
    let c4 = document.querySelectorAll(".c4")[0];
    let darkm = document.getElementsByClassName("darkbtn")[0];

        function skillin(){
            c1.style.width = "70%";
            c2.style.width = "60%"; 
            c3.style.width = "40%"; 
            c4.style.width = "80%"; 
            
        }
        function skillOut() {
            c1.style.width = "0%";
            c2.style.width = "0%"; 
            c3.style.width = "0%"; 
            c4.style.width = "0%"; 
            darkm.setAttribute("class", "darkbtn"); 
        }

    /* button */
    let darkbtn = document.querySelector(".darkbtn");
    darkbtn.addEventListener("click" , function(){
        let b = document.getElementsByTagName("body")[0];
        let l = document.querySelector(".m_left");
        
        b.classList.toggle("allblack");        
        l.classList.toggle("allblack"); 

    })

    let addE = document.querySelector(".addE");
    addE.addEventListener("click",function(){
        document.body.appendChild(document.createElement("h1"));
        document.querySelector("h1").id = "new";
        document.querySelector("h1").innerHTML = "Hello World";
        document.querySelector(".addE").innerHTML = "yes!!";
    })

    let delE = document.querySelector(".delE");
    
    delE.addEventListener("click",function(){
      let hOne = document.getElementById("new");  
      document.querySelector(".addE").innerHTML = "Add Elem";
        console.log(hOne);
        document.body.removeChild(hOne);
    })

    function addT(){
        let x = document.getElementById("mytext").value;
        document.body.appendChild(document.createElement("h2"));
        document.querySelector("h2").classList = "newT";
        document.querySelector("h2").innerHTML = x;

    }

