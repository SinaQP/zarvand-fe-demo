// authorization
export function authorization(): boolean {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
}
