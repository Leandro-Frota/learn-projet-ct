export default function CardDataContent({ text }) {
  return (
    <div className="flex flex-col gap-1.5 text-sm text-gray-400 my-1">
      {text.map((item) => (
        <div key={item.id} className="flex flex-col gap-1.5 text-sm text-gray-400 my-1">
          <span><strong>Nome:</strong> {item.nome}</span>
          <span><strong>Data de Início:</strong> {item.dataIn}</span>
          <span><strong>Data de Término:</strong> {item.dataFi}</span>
          <span><strong>Descrição:</strong> {item.desc}</span>
          <span><strong>Status:</strong> {item.status}</span>
        </div>
      ))}
    </div>
  );
};