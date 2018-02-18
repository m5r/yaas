import localforage from 'localforage';

export default localforage.createInstance({
  name: 'yaas',
  description: 'Store user history',
});
