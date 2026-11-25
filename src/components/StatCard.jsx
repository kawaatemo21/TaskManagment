function StatCard({ title, number, description }) {
  return (
    <div className="bg-[rgba(255,255,255,1)] rounded-xl shadow-sm p-5 border border-[rgba(220,220,220,0.5)]">
      <h3 className="text-[rgba(100,100,100,1)] text-sm">{title}</h3>

      <p className="text-3xl font-bold text-[rgba(59,48,42,1)] mt-2">
        {number}
      </p>

      <p className="text-[rgba(130,130,130,0.8)] text-sm mt-2">{description}</p>
    </div>
  );
}

export default StatCard;
