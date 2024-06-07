const newsContainer = document.querySelector(".posts-container")
let finalResult;



async function fetchingNews() {

    const dayDate = new Date().getDate();
    console.log()



    const news = await fetch('newsData/news-data.json');
    const newsData = await news.json();
    const articles = newsData.articles

    

    let articlesList = [];
    for(article in articles) {
        console.log(article)
        finalResult = `

        <div class="post">
                   <img src="${articles[0].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[0].title}</h3>
                       <p> ${articles[0].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[0].author == null || articles[0].author.length > 25 ? "unknown" : articles[0].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[0].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               
        <div class="post">
                   <img src="${articles[1].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[1].title}</h3>
                       <p> ${articles[1].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[1].author == null || articles[1].author.length > 25 ? "unknown" : articles[1].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[1].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               
        <div class="post">
                   <img src="${articles[2].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[2].title}</h3>
                       <p> ${articles[2].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[2].author == null || articles[2].author.length > 25 ? "unknown" : articles[2].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[2].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               


        <div class="post">
                   <img src="${articles[3].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[3].title}</h3>
                       <p> ${articles[3].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[3].author == null || articles[3].author.length > 25 ? "unknown" : articles[3].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[3].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               



         <div class="post">
                   <img src="${articles[4].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[4].title}</h3>
                       <p> ${articles[4].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[4].author == null || articles[4].author.length > 25 ? "unknown" : articles[4].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[4].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               

            <div class="post">
                   <img src="${articles[6].urlToImage}" alt="">
               <div class="post-content">
                   <div class="desc">
                       <h3>${articles[6].title}</h3>
                       <p> ${articles[6].description}</p>
                   </div>            
                   <div class="info">
                       <div class="post-info">
                           <span>
                               <img src="data:image/jpeg;base64,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"  alt="">
                           </span>
                           <div class="info-txt">
                               <span class="author">
                                   ${articles[6].author == null || articles[6].author.length > 25 ? "unknown" : articles[6].author}
                               </span>
                               <span class="date">
                                   11/03/2024
                               </span>
                           </div>
                       </div>
                       <a href="${articles[6].url}">Read More</a>
                   </div>
               </div>
               </div> 
               
               



   `;
    }
    newsContainer.innerHTML = finalResult;
    
}

fetchingNews()