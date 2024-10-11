import Store, { Schema } from 'electron-store';

// Source: https://whoisryosuke.com/blog/2022/using-typescript-with-electron-store

export type SchemaType = {
  settings: {
    folder?: string;
  };
};

// Use a plain schema without JSONSchemaType
const schema: Schema<SchemaType> = {
  settings: {
    type: 'object',
    properties: {
      folder: {
        type: 'string',
      },
    },
  },
};

const defaults: Readonly<SchemaType> = {
  settings: {},
};

type MappedSchemaType = {
  SETTINGS: keyof SchemaType;
  SETTINGS_FOLDER: keyof SchemaType['settings'];
};

export const STORE_KEYS: MappedSchemaType = {
  SETTINGS: 'settings',
  SETTINGS_FOLDER: 'folder',
} as const;

// handle false config-file
// https://github.com/sindresorhus/electron-store/issues/116
const setupStore = () => {
  try {
    return new Store<SchemaType>({ defaults, schema, clearInvalidConfig: true });
  } catch (e) {
    const store = new Store<SchemaType>({ defaults, clearInvalidConfig: true });
    store.clear();
    return new Store<SchemaType>({ defaults, schema, clearInvalidConfig: true });
  }
};

export const store = setupStore();
