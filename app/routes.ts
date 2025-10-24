import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // الصفحة الرئيسية
  index("routes/home.tsx"),

  // صفحات المنتجات والسلة
  route("products", "routes/Products.tsx"),
  route("cart", "routes/Cart.tsx"),
  
  // صفحات Authentication
  route("login", "routes/Login.tsx"),
  route("register", "routes/Register.tsx"),
  route("profile", "routes/Profile.tsx"),
  
  // صفحات إضافية
  route("contact", "routes/Contact.tsx"),
  route("privacy", "routes/PrivacyPolicy.tsx"),
  route("terms", "routes/terms.tsx"),

  // صفحات الخطأ (في الآخر دائماً)
  route("error-boundary", "routes/error/error-boundary.tsx"),
  route("*", "routes/error/error404.tsx"),
] satisfies RouteConfig;