const videoSelected= JSON.parse(sessionStorage.getItem("videoSelected"));
const allVideos= JSON.parse(localStorage.getItem("allVideos"))
const video= document.getElementById("openVideo")

video.innerHTML= `
    <iframe  src="${videoSelected.video}" frameborder="0" ></iframe>
    <p>${videoSelected.name}</p>
    <p class="view">${videoSelected.seeIn.views} - ${videoSelected.seeIn.date}</p>
`
const filterCategory= document.getElementById("filterCategory")
const filterVideo= allVideos.filter(video=>video.seeIn.genre === videoSelected.seeIn.genre && video.Id !== videoSelected.Id)
filterVideo.forEach(element =>{
    filterCategory.innerHTML+= `
        <div class="item">
            <figure class="preview">
                <iframe  src="${element.video}" frameborder="0" ></iframe>
                <span>${element.seeIn.duration}</span>
            </figure>
            <div class="description">
                <button class="title"  type="button" id="${element.Id}">${element.name}</button>
                <p>${element.seeIn.author}</p>
                <p>${element.seeIn.views} - ${element.seeIn.date}</p>
            </div>
        </div>
    `
})
const buttons = document.querySelectorAll('.title')
buttons.forEach(element => {
    element.addEventListener("click", (event)=>{
        const video=allVideos.find(element => element.Id === Number(event.target.id))
        sessionStorage.setItem('videoSelected', JSON.stringify(video));
        window.location.href='video.html';
    })
})