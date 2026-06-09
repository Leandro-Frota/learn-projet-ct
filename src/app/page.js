import { CardData } from "@/app/components/CardData";

const colaboradores = [
  {
    id: 1,
    nome: "Bieelzinho chupetinh...",
    dataIn: "04/06/2026",
    dataFi: "04/06/2026",
    desc: "TEste responsividade",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Gabriel Angelo",
    dataIn: "29/04/2026",
    dataFi: "29/04/2026",
    desc: "Teste",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "João Pedro Lira",
    dataIn: "01/04/2026",
    dataFi: "01/04/2026",
    desc: "teste de endpoint do autor",
    status: "Ativo",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {colaboradores.map((colaborador) => (
          <CardData.Root key={colaborador.id}>
            <CardData.Header text="Colaboradores" />
            <CardData.Content text={[colaborador]} />
            <CardData.Action
              actions={
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>
              }
            />
          </CardData.Root>
        ))}
        
        <CardData.Root>
          <CardData.Header text="Colaboradores" />
          <CardData.Content text={colaboradores} />
          <CardData.Action
            actions={
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Editar
              </button>
            }
          />
        </CardData.Root>
      </main>
    </div>
  );
}
