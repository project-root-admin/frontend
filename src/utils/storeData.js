export default function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }