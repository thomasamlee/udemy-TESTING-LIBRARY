import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", async () => {
    /** @type {import("./fixtures").ImageItem[]} */
    const response = [
      { name: "Chocolate", imagePath: "/images/chocolate.png" },
      { name: "Vanilla", imagePath: "/images/vanilla.png" },
    ];

    return HttpResponse.json(response);
  }),
];
