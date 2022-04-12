import {templates} from '../settings.js';

class Home{
  constructor(wrapper){
    const thisHome = this;

    thisHome.render(wrapper);
    // thisHome.initWidgets();
    // thisHome.getData();
  }


  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;

    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  // initWidgets(){
  //   const thisHome = this;


  // }
}

export default Home;