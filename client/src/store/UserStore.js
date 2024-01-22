import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    // this._users = [];
    // this._devices = [];
    // this._types = [];
    // this._brands = [];
    // this._selectedType = {};
    // this._selectedBrand = {};
    // this._selectedDevice = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }

  getUser() {
    return this._user;
  }
}
