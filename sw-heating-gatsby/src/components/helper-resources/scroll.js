
https://codepen.io/thenutz/pen/VwYeYEE



const CSS = styled.div`
body,
html {
  color: #fff;
  text-align: center;
  background: $white;
  font-family: Helvetica, sans-serif;
  margin: 0;
}

.grid-container {
  background: $white;
  font-family: 'Rubik', sans-serif;
}

//ENABLE CSS GRID FOR LIFT OFF  🚀
@supports(display: grid) {

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    
    //Let the craziness begin!!!
    grid-template-areas:
      "header header header"
      "title title footer"
      "main main main";
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 1fr auto 1fr;
      grid-template-areas: 
        "header"
        "title"
        "main"
        "footer";
    }
  }

  .grid-item {
    color: #fff;
    background: skyblue;
    padding: 3.5em 1em;
    font-size: 1em;
    font-weight: 700;
  }
  
  .header {
    background-color: darken(skyblue, 60%);
    grid-area: header;
    padding: 1em;
  }
  
  .title {
    color: $gray;
    background-color: lighten(skyblue, 25%);
    grid-area: title;
  }

  .main {
    color: lighten($gray, 25%);
    background-color: lighten(skyblue, 60%);
    grid-area: main;
    padding: 0;
    overflow-x: hidden;
    // overflow-y: hidden;
    width: 100%;
  }
  
  .footer {
    background-color: darken(skyblue, 10%);
    grid-area: footer;
    padding: 1em;
  }

  .items {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    will-change: transform;
    user-select: none;
    cursor: pointer;
  }

  .items.active {
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .item {
    display: inline-block;
    background: skyblue;
    min-height: 250px;
    min-width: 400px;
    margin: 2em 2em 2em 0;
    
    @media screen and (max-width: 500px) {
      min-height: 200px;
      min-width: 200px;
    }
  }
  .item:first-of-type {
    margin-left: 2em
  }
}


a {
  display: block;
  color: lighten(skyblue, 15%);
  text-decoration: underline;
  margin: 1em auto;
  &:hover {
    cursor: pointer;
  }
}

p {
  text-align: left;
  text-indent: 20px;
  font-weight: 100;
}

i {
  color: skyblue;
}
`




const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});





<div class="grid-container">
  <header class="grid-item header">
    <h2>🍽 CSS Grid Tem-plated 🍽</h2>
    
  </header>
  <div class="grid-item title">
    <h1>So you wanna side scroll, eh?</h1>
  </div>
  <main class="grid-item main">
    <div class="items">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
      <div class="item item7"></div>
      <div class="item item8"></div>
      <div class="item item9"></div>
      <div class="item item10"></div>
    </div>
    <p>🐰🥚Click & Drag <i>powered by Javascript</i></p>
  </main>
  <footer class="grid-item footer">
    <h2>More Things</h2>
    <a>All of the Things</a>
    <a>Some of the Things</a>
    <a>None of the Things</a>
  </footer>
</div>