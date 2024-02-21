import { base_url, bearer_token } from "./common";
/**
 * 
 * @param {*} body 
 * @param {string} token 
 * @returns {RequestInit}
 */
function opts(body = {}, token = "") {
  /**@type {RequestInit["headers"]} */
  const headers = {
    "Content-Type": "application/json"
  };
  if (token.length > 0) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  }
}
/**
 * 
 * @param {string} url 
 * @param {RequestInit|undefined} options 
 * @returns 
 */
async function request(url, options = undefined) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    return { err }
  }

}

/**
 * @typedef {import("./spacetraders-sdk/models/Register201Response").Register201Response} RegisterResponse
 * @returns {Promise<RegisterResponse>}
 */
export async function register(symbol = '', faction = '') {
  return await request(`${base_url}/register`, opts({ symbol, faction }));
}

/**
 * @typedef {import("./spacetraders-sdk/models/GetFactions200Response").GetFactions200Response} FactionResponse
 * @returns {Promise<FactionResponse>}
 */
export async function factions() {
  let res = await register("foo", "bar");
  return await request(`${base_url}/factions`);
}