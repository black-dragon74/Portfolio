<script>
// Export the root component as named export.
export const Components = {
  name: "Components"
};

// Proxy export all the other components
export { default as Hero } from "./Hero";
export { default as About } from "./About";
export { default as Experience } from "./Experience";
export { default as Skills } from "./Skills";
export { default as Portfolio } from "./Portfolio";
export { default as Contact } from "./Contact";

export default Components;
</script>