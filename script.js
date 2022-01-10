document.body.innerHTML+=`


<section class="user-list">

</section>
`;



async function getPopularAnime(){
    var data=await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`,{method:"GET"});
    const users=await data.json();
    console.log("a",users);
    const userContainer=document.querySelector(".user-list");
   
    userContainer.innerHTML="";
    var pic=document.createElement('img');
    userContainer.append(pic);
   
    users.data.forEach((a)=>{
        userContainer.innerHTML+=`
        <div class="user-container">
       <img src="${a.anime_img}" class="user-pic"/>
       <h3Id:>${a.anime_id}</h3>
        <p class="user-name">Name:${a.anime_name}</p>
       
</div>
        
        `;
    });
    

       
    console.log(users);
}
getPopularAnime();