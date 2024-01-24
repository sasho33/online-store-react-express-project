import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
      {
        id: 6,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.backmarket.co.uk/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1200/https://d2e6ccujb3mkqf.cloudfront.net/bcab50ce-1f30-4e13-a0eb-6dd7d98fefc5-1_4eece915-5c72-4e21-a884-d047ab143981.jpg',
      },
    ];

    this._selectedType = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}
