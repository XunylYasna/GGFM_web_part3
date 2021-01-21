var hitlistdata =  [
    {
        "title": "34+35",
        "artist": "Ariana Grande",
        "album": "Positions",
        "cover": "https://static.wikia.nocookie.net/arianagrande/images/1/13/Positions_%E2%80%93_Album_Cover.jpg",
        "votes": 100
    },
    {
        "title": "Anyone",
        "artist": "Justin Beiber",
        "album": "Anyone",
        "cover": "https://upload.wikimedia.org/wikipedia/en/0/0d/Justin_Bieber_-_Anyone.png",
        "votes": 99
    },
    {
        "title": "Bakit Papa?",
        "artist": "Sex Bomb Girls",
        "album": "Unang Putok",
        "cover": "https://images-na.ssl-images-amazon.com/images/I/61Nt47L62LL._SY445_SX342_QL70_ML2_.jpg",
        "votes": 98
    },
    {
        "title": "Vibez",
        "artist": "ZAYN",
        "album": "Nobody Is Listening",
        "cover": "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=tc&w=300&h=300&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F01%2F01%2Fharry-styles.jpg",
        "votes": 97
    },
    {
        "title": "MY TREASURE",
        "artist": "TREASURE",
        "album": "The First Step: Treasure Effect",
        "cover": "https://www.songmeaningsandfacts.com/wp-content/uploads/2021/01/MY-TREASURE-by-TREASURE.jpg",
        "votes": 96
    },
    {
        "title": "willow",
        "artist": "Taylor Swift",
        "album": "Evermore",
        "cover": "https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png",
        "votes": 95
    }
]

hitlistdata.sort((a,b)=>{
    return b.votes - a.votes
})

hitlistdata.forEach((song,index) => {
    var str = `
    <div class="hitlist-song">
        <div class="part">
            <div class="place">
            <h1>${index+1}</h1>
            <p class="green-text">🠕</p>
            </div>
            <div class="album-cover">
            <img src="${song.cover}">
            </div>
        </div>
        <div class="info">
            <div class="song">
            <h4>${song.title}</h4>
            <h5>${song.artist}</h5>
            <h6>${song.album}</h6>
            </div>
            <div class="votes">
            <h4>Votes</h4>
            <h5>${song.votes}</h5>
            </div>
        </div>
    </div>
  `
    div = document.getElementById( 'hitlist-container' );

    div.insertAdjacentHTML( 'beforeend', str );
});


{/* <div class="hitlist-song">
        <div class="part">
          <div class="place">
            <h1>1</h1>
            <p class="green-text">🠕</p>
          </div>
          <div class="album-cover">
            <img src="https://static.wikia.nocookie.net/arianagrande/images/1/13/Positions_%E2%80%93_Album_Cover.jpg">
          </div>
        </div>
        <div class="info">
          <div class="song">
            <h4>34 + 35</h4>
            <h5>Ariana Grande</h5>
            <h6>Positions</h6>
          </div>
          <div class="votes">
            <h4>Votes</h4>
            <h5>100</h5>
          </div>
        </div>
        
      </div> */}