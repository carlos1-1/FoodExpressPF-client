import { useState, useEffect } from "react";

function useFavorites(itemName) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = [];
      } else parsedItem = JSON.parse(localStorageItem);

      setItems(parsedItem);
    } catch (error) {
      setError(error);
    }
  }, [itemName]);

  const _saveItem = (newList) => {
    try {
      const stringList = JSON.stringify(newList);
      localStorage.setItem(itemName, stringList);
      setItems(newList);
    } catch (error) {
      setError(error);
    }
  };

  const _add = (item) => {
    return _saveItem([...items, item]);
  };

  const _remove = (item) => {
    const newList = [...items];
    return _saveItem(newList.filter((el) => el.id !== item.id));
  };

  const toggle = (item) => {
    const isItem = items.find((el) => el.id === item.id);
    if(!isItem) return _add(item);
    return _remove(item);
  }

  const reset = () => _saveItem([]);

  return {
    items,
    error,
    toggle,
    reset,
  };
};

export default useFavorites;