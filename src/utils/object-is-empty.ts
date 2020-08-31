export const isEmpty = (object) => {
  try {
    return Object.entries(object).length === 0;
  } catch (error) {
    return true;
  }
}
