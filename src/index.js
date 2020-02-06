import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Title from './Components/Title'
import Preview from './Components/Preview'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "RECIPE COLLECTIONS",
      previews: [
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Crispy Koji Duck Confit With Garlicky Duck-Fat Rice and Umeboshi Recipe',
          shortDescription: 'Crispy skin, tender meat, and garlicky duck-fat rice.'
        },
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Eggplant Rice Bowl (Donburi) Recipe',
          shortDescription: 'A 100% vegitarian meal in a (rice) bowl.'
        },
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Nasi Goreng (Indonesian Fried Rice)',
          shortDescription: 'Indonesia\'s take on fried rice gets a sweet-savory profile from kecap manis and a big hit of umami from shirmp paste.'
        },
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Test Dish',
          shortDescription: 'Hodor hodor hodor hodor hodor hodor hodor'
        },
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Test Dish',
          shortDescription: 'Hodor hodor hodor hodor hodor hodor hodor'
        },
        {
          picture: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
          category: 'RECIPE',
          name: 'Test Dish',
          shortDescription: 'Hodor hodor hodor hodor hodor hodor hodor'
        }
    ]
    }
  }
  render() {
    const {title, previews} = this.state;
    return (
      <div className='recipe-list'>
        <Title title={title}/>
        <Preview previews={previews}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)