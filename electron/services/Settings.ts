import { store, STORE_KEYS } from './';

export class Settings {
  public static get Folder(): string {
    return store.get(STORE_KEYS.SETTINGS_FOLDER);
  }
  public static set Folder(value: string) {
    store.set(STORE_KEYS.SETTINGS_FOLDER, value);
  }
}
