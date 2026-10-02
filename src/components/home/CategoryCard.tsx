export type Category = { name: string; icon: string };

export function CategoryCard({ category }: { category: Category }) {
  return <a className="category-card" href="#courses"><img src={category.icon} alt="" /><span>{category.name}</span></a>;
}
