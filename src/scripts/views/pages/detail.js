import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="detailRestaurant" class="restaurantDetail">
        </div>         
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActivateUrlWithCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
