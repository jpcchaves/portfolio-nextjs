export const sendContactForm = async (values: any) =>
  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
