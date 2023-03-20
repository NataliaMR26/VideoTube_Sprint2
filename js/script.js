if(localStorage.getItem('allVideos') === null){
    localStorage.setItem("allVideos", JSON.stringify(videos));
}


const ItemsVideo= document.getElementById('videos')

const videoResult= (allVideos)=>{

    ItemsVideo.innerHTML=""
    allVideos.forEach(video => {
        ItemsVideo.innerHTML+= `
            <div class="item">
                <figure class="preview">
                    <iframe  src="${video.video}?modestbranding=1&autoplay=0&showinfo=0&controls=0&autohide=1" frameborder="0" ></iframe>
                    <span>${video.seeIn.duration}</span>
                </figure>
                <div class="description">
                    <button class="title"  type="button" id="${video.Id}">${video.name}</button>
                    <p>${video.seeIn.author}</p>
                    <p>${video.seeIn.views} - ${video.seeIn.date}</p>
                </div>
            </div>
        `
    });
    const buttons = document.querySelectorAll('.title')
    buttons.forEach(element => {
        element.addEventListener("click", (event)=>{
            const video=allVideos.find(element => element.Id === Number(event.target.id))
            sessionStorage.setItem('videoSelected', JSON.stringify(video));
            window.location.href='video.html';
        })
    })
}
const allVideos= JSON.parse(localStorage.getItem("allVideos"))

videoResult(allVideos)

const category = document.querySelectorAll('.category')
category.forEach(element => {
    element.addEventListener("click", (event)=>{
        category.forEach(video=> video.classList.remove("selected"));
        event.target.classList.add("selected") 
        let filterVideos;
        if(event.target.innerText.toUpperCase() === "TODOS"){
            filterVideos= allVideos

        } else{
            filterVideos= allVideos.filter(video=> video.seeIn.genre.toUpperCase() === event.target.innerText.toUpperCase())

        }
        videoResult(filterVideos)
    })
})

