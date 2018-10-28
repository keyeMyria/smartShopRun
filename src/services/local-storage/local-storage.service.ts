import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private storage: Storage) { }


  /**
   * Speichert Daten im lokalen Speicher nach key: value
   */
  saveInStorage(key: string, value){
    // set a key/value
    return this.storage.set(key, value);
  }

  /**
   * Holt Daten vom lokalen Speicher, sucht nach dem key
   * Daten: 
   *    User,
   *    alreadyStarted,
   *    keepLoggedin,
   *    oneTimeLoggin
   */
  getFromStorage(key: string){
    // get a key/value pair
    return this.storage.get(key);
  }

  /**
   * Löscht Daten aus dem lokalen Speicher, mit dem key
   */
  deleteFromStorage(key: string){
    return this.storage.remove(key);
  }
}
