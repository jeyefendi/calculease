import './response.css'
import './style.css'

export default function LeaseCalculator() {
  return (
    <div className="lease-calculator-container">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form className="lease-calculator-form">
        <div className="lease-form-row1">
          
          <div className="form-item">
            <label htmlFor="lease-amount">Стоимость автомобиля</label>
            <input
              type="number"
              name="lease-amount"
              placeholder="3 300 000"
              className="form-input"
            />
          </div>

          <div className="form-item">
            <label htmlFor="initial-payment">Первоначальный взнос</label>
            <input
              type="number"
              name="initial-payment"
              placeholder="420 000"
              className="form-input"
            />
          </div>

          <div className="form-item">
            <label htmlFor="lease-term">Срок лизинга</label>
            <input
              type="number"
              name="lease-term"
              placeholder="60"
              className="form-input"
            />
          </div>
        </div>

        <div className="lease-form-row2">
          <div className="form-item">
            <label>Сумма договора лизинга</label>
            <h2>4 467 313 Р</h2>
          </div>

          <div className="form-item">
            <label>Ежемесячный платеж от</label>
            <h2>114 455 Р</h2>
          </div>

          <div className="form-action">
            <input
              type="submit"
              value="Оставить заявку"
              className="form-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
