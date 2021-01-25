const api_key = "&apiKey=84bdd348ade8480e9b6f3a9ede11b379";
const content = document.querySelector('#content');


// load sources
const home = () => {
    axios.get("https://newsapi.org/v2/sources?language=en"+ api_key)
        .then(content.innerHTML = '')
        .then(res => {
            res.data.sources.forEach(e => {
                // loops to adjust text
                if(e.description.length > 150){
                    content.innerHTML += 
                    '<div class="col-12 col-md-6 col-lg-4 mb-5">' +
                        '<div class="source-card rounded p-4" id="'+ e.id +'" onclick="getnews(id)">' +
                            '<h5>'+ e.name +'</h5>' +
                            '<p>'+ e.description.slice(0,150) + '....' +'</p>' +
                        '</div>' +
                    '</div>' ;
                }
                else{
                    content.innerHTML += 
                    '<div class="col-12 col-md-6 col-lg-4 mb-5">' +
                        '<div class="source-card rounded p-4" id="'+ e.id +'" onclick="getnews(id)">' +
                            '<h5>'+ e.name +'</h5>' +
                            '<p>'+ e.description +'</p>' +
                        '</div>' +
                    '</div>' ;
                }
                
            })
        })
}


// load headlines
const getnews = (name) => {
    axios.get("https://newsapi.org/v2/top-headlines?sources=" + name + api_key)
    .then(content.innerHTML = '')
    .then(res => {
        res.data.articles.forEach(e => {
            content.innerHTML += 
                    '<div class="col-12 mb-5">' +
                        '<div class="news-card rounded" id="'+ e.url +'" onclick="redirect(id)">' +
                            '<div class="row">'+
                                '<div class="news-image col-12 col-md-4">'+
                                    '<img class="w-100 h-100" src="'+ e.urlToImage +'" alt=""/>'+
                                '</div>'+
                                '<div class="news-info py-4 col-12 col-md-8">'+
                                    '<h5 class="mx-4 ml-md-0">'+ e.title +'</h5>' +
                                    '<p class="mx-4 ml-md-0">'+ e.description +'</p>' +
                                '</div>'+
                            '</div>'+
                        '</div>' +
                    '</div>' ;
        })
    })
}


const redirect = (url) => {
    location.href = url ;
}