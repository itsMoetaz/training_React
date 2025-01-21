export async function search(id,tab) {
  return tab.find(e => e.id === id);
}