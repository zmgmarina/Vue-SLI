import { createStore } from "vuex";

export default createStore({
  state: {
    data: [{
        title: 'Minimal Look Bedrooms',
        paragraphOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
        paragraphTwo: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
    }],
    
    slidImages: [
        { image: require('@/assets/image/sliderImg.png'), alt: 'slider image'},
        { image: require('@/assets/image/sliderImg2.png'), alt: 'slider image'},
        { image: require('@/assets/image/sliderImg.png'), alt: 'slider image'},
      ]
       
  },
  getters: {
    
  },
  mutations: {

  },
  actions: {
  
  },
  modules: {
    
  },
});
