import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else parsedItem = JSON.parse(localStorageItem);

      setItems(parsedItem);
    } catch (error) {
      setError(error);
    }
  }, [itemName, initialValue]);

  const _saveItem = (newList) => {
    try {
      const stringList = JSON.stringify(newList);
      localStorage.setItem(itemName, stringList);
      setItems(newList);
    } catch (error) {
      setError(error);
    }
  };

  const add = (item) => {
    let isRepeat;
    if (items) isRepeat = items.find((el) => el.id === item.id);
    if (!isRepeat) return _saveItem([...items, { ...item, count: 1 }]);

    const itemIdx = items.findIndex((el) => el.id === item.id);
    const newList = [...items];

    newList[itemIdx].count++;
    console.log(newList);
    return _saveItem(newList);
  };

  const discount = (item) => {
    const itemIdx = items.findIndex((el) => el.id === item.id);
    if (itemIdx === -1) return;

    const newList = [...items];
    newList[itemIdx].count--;

    if (!newList[itemIdx].count)
      return _saveItem(newList.filter((el) => el.id !== item.id));
    return _saveItem(newList);
  };

  const remove = (item) => {
    const selectedItem = items.find((el) => el.id === item.id);
    if (!selectedItem) return;

    const newList = [...items];
    return _saveItem(newList.filter((el) => el.id !== selectedItem.id));
  };

  const reset = () => _saveItem([]);

  return {
    items,
    error,
    add,
    discount,
    remove,
    reset,
  };
}

export default useLocalStorage;
