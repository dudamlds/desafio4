import "./styles/theme.css";
import "./styles/global.css";
import { LuckyNumber } from "./components/Etapa2/LuckyNumber";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <LuckyNumber />
      </div>
    </>
  );
}