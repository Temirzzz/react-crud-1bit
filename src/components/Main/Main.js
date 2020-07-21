import React from 'react';
import './Main.css';

class Main extends React.Component {

    componentDidMount = () => {

        const RSS_URL = `https://cors-anywhere.herokuapp.com/https://cnews.ru/inc/rss/news.xml`;

        fetch(RSS_URL)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {

                const items = data.querySelectorAll("item");
                let html = ``;

                for (let i = 0; i < 10; i++) {
                    html += `                    
                         <div class="container mt-3 alert alert-primary">
                             <div class="row justify-content-center">
                                 <div class="col col-lg-6">

                                     <p class="">
                                         <a href="${items[i].querySelector("link").innerHTML}" target="_blank" rel="noopener">
                                         ${items[i].querySelector("title").innerHTML}
                                         </a>
                                     </p>
                                    <img src="${items[i].querySelector("enclosure").innerHTML}/type=image/jpeg" alt="">
                                     
                                     <p class="small">${items[i].querySelector("pubDate").innerHTML}<p>

                                 </div>
                             </div>
                         </div>
                         `;

                }

                document.body.insertAdjacentHTML("beforeend", html);
            });

    }


    render() {

        return (
            <div className="text-center">
                <h1 className="mt-3 mb-5">RSS Новости</h1>
                <div className="out"></div>
            </div>
        )
    }
}

export default Main;