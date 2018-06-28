export const saveToStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const deleteFromStorage = key => window.localStorage.removeItem(key);
