let phrases = [
    { text: 'свапнешь джезет', image: 'https://media1.giphy.com/media/Wnqhk59dX1ZCg/giphy.gif' },
    { text: 'сьебешься в космос', image: 'https://i.pinimg.com/originals/c8/4f/04/c84f0405eb47c39edbecfb96a57a825f.gif' },
    { text: 'ебанешь колы', image: 'https://media1.tenor.com/images/335579c44ce3d70a77616c884cff809b/tenor.gif?itemid=7880483' },
    { text: 'ворки 45', image: 'https://i.gifer.com/2MMr.gif' },
    { text: 'сгоняешь на сходняк', image: 'https://media3.giphy.com/media/69iv77x8e5NMA/giphy.gif' },
    { text: 'подрочишь борнауты', image: 'https://media1.giphy.com/media/8IYd8HDaHHhTi/giphy.gif' },
    { text: 'вьебешь масленный радиатор', image: 'https://cs8.pikabu.ru/post_img/2018/01/04/7/1515062885112948334.jpg' },
   
    
  ];
  
function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
button.addEventListener('click', function () {
    let randomElement= getRandomElement(phrases);
    smoothly (phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
for (let i = 0; i <= 5; i = i + 1) {
    smoothly (phrase, 'textContent', phrases[i].text); 
    smoothly (image, 'src', phrases[i].image);
  }
