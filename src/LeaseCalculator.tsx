import React from "react";

export default function LeaseCalculator() {
  return (
    <div className="lease-calculator-container">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form className="lease-calculator-form">
        <div className="form-item">
          <label htmlFor="lease-amount">Стоимость автомобиля</label>
          <input
            type="number"
            name="lease-amount"
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-item">
          <label htmlFor="initial-payment">Первоначальный взнос</label>
          <input
            type="number"
            name="initial-payment"
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-item">
          <label htmlFor="lease-term">Срок лизинга</label>
          <input
            type="number"
            name="lease-term"
            placeholder="0"
            className="form-input"
          />
        </div>

        <div className="form-action">
          <input
            type="submit"
            value="Оставить заявку"
            className="form-button"
          />
        </div>
      </form>
    </div>
  );
}
