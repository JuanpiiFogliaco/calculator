import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [valueScreenShow, setValueScreenShow] = useState("");

  const ButtonClicked = (evento) => {
    let extractValueOfTheEvent = evento.target.value;
    setValueScreenShow(valueScreenShow + extractValueOfTheEvent);
  };

  const CalculateResult = () => {
    let resultado = eval(valueScreenShow);
    setValueScreenShow(resultado);
  }

  const ClearAllDigit = () => {
    setValueScreenShow("");
  }

  const ClearOneDigit = () => {
    setValueScreenShow(valueScreenShow.slice(1,valueScreenShow.length))
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.pantalla}>
          <div type="text" className={styles.valores}>
            {valueScreenShow}
          </div>
        </div>
        <div className={styles.wrapperPressers}>
          <div className={styles.pressers}>
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="7"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="8"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="9"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="+"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="-"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="4"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="5"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="6"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="*"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="/"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="1"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="2"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="3"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="("
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value=")"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="."
              className={styles.botones}
            />
            <input
              onClick={(evento) => ButtonClicked(evento)}
              type="button"
              value="0"
              className={styles.botones}
            />
            <input
              onClick={() => CalculateResult()}
              type="button"
              value="="
              className={styles.botones}
            />
            <input
              onClick={(evento) => ClearOneDigit(evento)}
              type="button"
              value="CO"
              className={styles.botones}
            />
            <input
              onClick={(evento) => ClearAllDigit(evento)}
              type="button"
              value="CLA"
              className={styles.botones}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
