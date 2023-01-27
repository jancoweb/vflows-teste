export function saveItem(key, value) {
  localStorage.setItem(key, value)
}
export function getItem(key) {
  localStorage.getItem(key)
}
export function clearAll() {
  localStorage.clear();
}