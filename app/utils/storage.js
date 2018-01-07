import localforage from 'localforage';

window.ddd = localforage.createInstance({
  name: 'yaas',
  description: 'Store user history',
});

export default localforage.createInstance({
  name: 'yaas',
  description: 'Store user history',
});
