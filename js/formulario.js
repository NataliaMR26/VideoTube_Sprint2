const allVideos= JSON.parse(localStorage.getItem("allVideos"))
const form= document.getElementById('form')

const buttonSent = document.getElementById('form');
buttonSent.addEventListener('submit',function(e){
    e.preventDefault();
    e.stopPropagation();
    const newVideo={
        Id: allVideos.length+1,
        name: document.getElementById('nameVideo').value,
        video: document.getElementById('urlVideo').value,
        seeIn: {
            category: document.getElementById('category').value,
            author: document.getElementById('author').value,
            date: document.getElementById('date').value,
            duration: document.getElementById('duration').value,
            genre: document.getElementById('genre').value,
            views: document.getElementById('views').value,
        },
    }
    allVideos.push(newVideo)
    localStorage.setItem("allVideos", JSON.stringify(allVideos));
 });