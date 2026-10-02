import { CategoryCard, type Category } from "@/components/home/CategoryCard";

const categories: Category[] = [
  { name: "Design", icon: "/assets/category-design.svg" },
  { name: "Development", icon: "/assets/category-development.svg" },
  { name: "IT & Software", icon: "/assets/category-it.svg" },
  { name: "Business", icon: "/assets/category-business.svg" },
  { name: "Marketing", icon: "/assets/category-marketing.svg" },
  { name: "Photography", icon: "/assets/category-photography.svg" },
];

export function CategoryGrid() {
  return <section className="category-section" aria-label="Course categories"><div className="category-grid">{categories.map((category) => <CategoryCard key={category.name} category={category} />)}</div></section>;
}
