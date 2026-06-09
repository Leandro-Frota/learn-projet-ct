export default function CardDataAction({ action }) {
  return (
    <div className="flex gap-2 mt-2 pt-2 border-t border-[#1e293b]/50">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {action}
      </button>
    </div>
  );
}
