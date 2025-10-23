import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // الصفحة الرئيسية
  index("routes/home.tsx"),

  // صفحات المنتجات والسلة
  route("products", "routes/products.tsx"),
  route("cart", "routes/cart.tsx"),
  
  // صفحات Authentication
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("profile", "routes/profile.tsx"),
  
  // صفحات إضافية
  route("contact", "routes/contact.tsx"),
  
  // صفحات الخطأ (في الآخر دائماً)
  route("error-boundary", "routes/error/error-boundary.tsx"),
  route("*", "routes/error/error404.tsx"),
] satisfies RouteConfig;