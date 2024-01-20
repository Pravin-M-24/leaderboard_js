let formSubmit = document.getElementById("form");
let players = document.getElementById("player_list");
let alertmsg = document.getElementById("alert");
let msg =  document.createElement("p");
let playerList = [
{
        name : "ms dhoni",
        country : "india",
        score : Number("95")
},
{
    name : "virat kohli",
    country : "india",
    score : Number("90")
},                                                          
{
    name : "rohit sharma",
    country : "india",
    score : Number("85")
}
];


function addplayer(e){
        e.preventDefault();
    let firstName = document.getElementById("firstName").value ;
    let lastName = document.getElementById("lastName").value ;
    let  country = document.getElementById("country").value ;
    let score = document.getElementById("score").value ;

    if(firstName == "" || lastName == "" || country == "" || score == "" ){
       msg.innerHTML = "All fields are required"
       alertmsg.append(msg);
       return;
    }
    else{
       alertmsg.style.display = "none";
    }

    let playerObj = {
        name : firstName + " " + lastName,
        country : country,
        score : Number(score)
    }

     playerList.push(playerObj);
       
     playerList.sort((a , b) => (b.score) - (a.score));

    players.innerHTML = "";

    playerList.forEach((obj , index)=>{

        
           
        let childdiv = document.createElement("div");
        let firstName = document.createElement("p");
        let country = document.createElement("p");
        let score = document.createElement("p");
        let incre_btn = document.createElement("button");
        let decre_btn = document.createElement("button");
        let remove_btn = document.createElement("button");
         
        firstName.innerHTML = `${obj.name}`;
        firstName.style.textTransform ="uppercase";
        country.innerHTML = `${obj.country}`;
        country.style.textTransform ="uppercase";
        score.innerHTML = `${obj.score}`;
        incre_btn.innerHTML = "+5";
        decre_btn.innerText = "-5";
        remove_btn.innerText = "DELETE";

        childdiv.append(firstName , country , score , incre_btn , decre_btn , remove_btn);
        players.append(childdiv);

         incre_btn.addEventListener("click" , ()  => increaseScore(index) );
         decre_btn.addEventListener("click", () => decreaseScore(index) );
         remove_btn.addEventListener("click" , (e) =>{
                    e.target.parentNode.style.display = "none";
         })
        console.log(players);
    })

}

        function refreshList(){
        
            playerList.sort((a , b) => (b.score) - (a.score));
        
            players.innerHTML = "";
        
            playerList.forEach((obj , idx)=>{
                   
                let childdiv = document.createElement("div");
                let firstName = document.createElement("p");
                let country = document.createElement("p");
                let score = document.createElement("p");
                let incre_btn = document.createElement("button");
                let decre_btn = document.createElement("button");
                let remove_btn = document.createElement("button");

                firstName.innerHTML = `${obj.name}`;
                firstName.style.textTransform ="uppercase";
                country.innerHTML = `${obj.country}`;
                country.style.textTransform ="uppercase";
                score.innerHTML = `${obj.score}`;
                incre_btn.innerHTML = "+5";
                decre_btn.innerText = "-5";
                remove_btn.innerText = "DELETE";

               

                childdiv.append(firstName , country , score , incre_btn , decre_btn , remove_btn);
                players.append(childdiv);
                incre_btn.addEventListener("click" , () => increaseScore(idx) );
                decre_btn.addEventListener("click", () => decreaseScore(idx) );
                remove_btn.addEventListener("click" , (e) =>{
                    e.target.parentNode.style.display = "none";
         })
            })
        }
        

function increaseScore(idx){
  playerList[idx].score += 5;
 refreshList();

}

function decreaseScore(idx){
 playerList[idx].score -= 5;
  refreshList();
}

  formSubmit.addEventListener("submit" , addplayer);

  document.addEventListener("DOMContentLoaded" , refreshList)