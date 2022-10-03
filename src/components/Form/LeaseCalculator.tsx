import './style.css'

export default function LeaseCalculator() {
  return (
    <div className="lease-calculator-container">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form className="lease-calculator-form">
        <div className="lease-form-row1">
          
          <div className="form-item">
            <label htmlFor="total-cost">Стоимость автомобиля</label>
            <input
              type="number"
              id="total-cost"
              value={3300000}
            />
            <input
              type="range"
              id="total-cost"
              placeholder="3 300 000"
              min="1000000"
              max="6000000"
            />
          </div>

          <div className="form-item">
            <label htmlFor="initial-fee">Первоначальный взнос</label>
            <input
              type="number"
              name="initial-fee"
              placeholder="420 000"
              min="10%"
              max="60%"
            />
            
          </div>

          <div className="form-item">
            <label htmlFor="lease-term">Срок лизинга</label>
            <input
              type="number"
              name="lease-term"
              placeholder="60"
              className="form-input"
              min="1"
              max="60"
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
