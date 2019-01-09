import { observable, action, configure } from 'mobx'

configure({ enforceActions: 'always' })

export default class ProductsStore {
  @observable
  products

  constructor() {
		this.setProducts();
	}
	
	@action
	setProducts = () => {
		this.products = 10;
	}
	
	@action
	increment = () => {
		this.products = this.products + 1;
	}

  @action
  clear = () => {
    this.products = [];
  }
}