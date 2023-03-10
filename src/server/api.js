import axios from "axios";
export async function getRooms() {
  const { data } = await axios.get("localhost:3003/api/image");
  return data;
}
