export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/orders", "/create-product", "/cart", "/wishlist"],
};
