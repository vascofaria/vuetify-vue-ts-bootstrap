/**
 * Set storage
 *
 * @param name
 * @param content
 * @param maxAge
 */
export const setStore = (name: string, content, maxAge = null) => {
  if (!name) {
    return;
  }

  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }

  const storage = sessionStorage;

  storage.setItem(name, content);
  // if (maxAge && !isNaN(parseInt(maxAge))) {
  //   const timeout = parseInt(new Date().getTime() / 1000)
  //   storage.setItem(`${name}_expire`, timeout + maxAge)
  // }
};

/**
 * Get storage
 *
 * @param name
 * @returns {*}
 */
export const getStore = (name: string) => {
  if (!name) {
    return;
  }

  const content = sessionStorage.getItem(name);
  // const _expire = window.localStorage.getItem(`${name}_expire`)

  // if (_expire) {
  //   const now = parseInt(new Date().getTime() / 1000)
  //   if (now > _expire) {
  //     return
  //   }
  // }

  try {
    return JSON.parse(content);
  } catch (e) {
    return content;
  }
};

/**
 * Clear storage
 *
 * @param name
 */
export const clearStore = (name) => {
  if (!name) {
    return;
  }

  sessionStorage.removeItem(name);
  // sessionStorage.removeItem(`${name}_expire`);
};

/**
 * Clear all storage
 */
export const clearAll = () => {
  if (!name) {
    return;
  }

  sessionStorage.clear();
};
