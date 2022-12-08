export default async function <T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error: " + response.status);
    const json = await response.json();
    return json;
  } catch (e) {
    if (e instanceof Error) console.error("Error : " + e.message);
    return null;
  }
}
