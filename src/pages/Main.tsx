import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor.tsx";
import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients.tsx";
import Style from "./App.module.css";

function Main() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={Style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}

export default Main;
