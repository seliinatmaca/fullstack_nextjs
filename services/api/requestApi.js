// services/api/requestApi.js

export const getApi = async (endpoint) => {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error("GET isteği başarısız");
  return await res.json();
};

export const postApi = async (endpoint, data) => {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("POST isteği başarısız");
  return await res.json();
};

export const putApi = async (endpoint, data) => {
  const res = await fetch(endpoint, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("PUT isteği başarısız");
  return await res.json();
};

export const deleteApi = async (endpoint) => {
  const res = await fetch(endpoint, { method: "DELETE" });
  if (!res.ok) throw new Error("DELETE isteği başarısız");
  return;
};
