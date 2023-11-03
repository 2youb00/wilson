function seeone(onetrailer){
    document.querySelector('.solo-trailer').classList.toggle('displaynone');
    let onetrailerID = onetrailer.id;
    let videos=document.querySelectorAll('.solo-trailer video');
    videos.forEach(video => {
        let videoID = video.id;
        if(videoID==onetrailerID){
            video.classList.toggle('displaynone');
            document.querySelector('.solo-trailer').addEventListener('click',()=>{
                video.classList.add('displaynone');
                document.querySelector('.solo-trailer').classList.add('displaynone');
            })
        }
    })

}
