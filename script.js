//bigdata
const dati = [
    {
      id : 0 ,
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      id: 1 ,
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      id : 2 ,
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      id : 3,
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      id : 4,
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];






console.log("ok Vue", Vue)

const app = Vue.createApp({
    data(){
        return{
        bigData : dati ,
        currentIndex : 0 ,
    
    }},
    methods:{
        arrowDown(){
            if(this.currentIndex == 4){
                this.currentIndex = 0
            }else{
                this.currentIndex += 1
            }
        },
        arrowUp(){
            if(this.currentIndex == 0){
                this.currentIndex = 4
            }else{
                this.currentIndex -= 1
            }
        },
        changePic(n){
            //voglio far semplicemnete cambiare il currentIndex
            this.currentIndex = n;
        }
    }
})

app.mount(".contenitore");