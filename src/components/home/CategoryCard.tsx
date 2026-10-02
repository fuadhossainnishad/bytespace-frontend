import Link from "next/link";

export type Category = { name: string; icon: string };

export function CategoryCard({ category }: { category: Category }) {
  return <Link className="category-card" href="/search"><img src={category.icon} alt="" /><span>{category.name}</span></Link>;
}
