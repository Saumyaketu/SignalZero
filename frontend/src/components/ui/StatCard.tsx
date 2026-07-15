import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string | number;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="p-4">
      <p className="text-zinc-400 text-sm">{title}</p>

      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </Card>
  );
}

export default StatCard;
