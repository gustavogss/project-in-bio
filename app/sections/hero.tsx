import Button from "../components/button";
import TextInput from "../components/text-input"

export default function Hero() {
  return (
    <div className="flex h-screen ">
      <div className="w-full flex flex-col gap-2 mt-[35vh] ">
        <h1 className="text-5xl font-bold text-slate-200 leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6 text-slate-300">Crie sua página de projetos e compartilhe com o mundo
          <br />
          <span className="text-slate-400">Acompanhe o engajamento com o Analytics de cliques</span>
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>
          <TextInput placeholder="Seu Link" />
          <Button >Criar Agora</Button>
        </div>
        <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB, transparent_55%)] ">
          <div className="relative">
            {/* <User /> */}
            <div className="absolute -bottom-[7%] -right-[45%]">
              {/* <TotalVisitants /> */}
            </div>
            <div className="absolute top-[20%] -left-[45%] -z-10">
              {/* <ProjectCard /> */}
            </div>
            <div className="absolute -top-[5%] -left-[55%] -z-10">
              {/* <ProjectCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}