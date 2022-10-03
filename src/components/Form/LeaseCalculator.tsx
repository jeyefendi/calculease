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
              id="total-cost-range"
              className="input-range"
              min="1000000"
              max="6000000"
              value={3300000}
            />
          </div>

          <div className="form-item">
            <label htmlFor="initial-fee">Первоначальный взнос</label>
            <input
              type="number"
              id="initial-fee"
              placeholder="420 000"
            />
            <input
              type="range"
              id="initial-fee-range"
              className="input-range"
              min="10%"
              max="60%"
            />
            
          </div>

          <div className="form-item">
            <label htmlFor="lease-term">Срок лизинга</label>
            <input
              type="number"
              id="lease-term"
              placeholder="60"
            />
            
            <input
              type="range"
              id="lease-term-range"
              className="input-range"
              min="1"
              max="60"
            />
          </div>
        </div>

        <div className="lease-form-row2">
          <div className="form-item">
            <label>Сумма договора лизинга</label>
            <div className="value" id="lease-amount" >0<span>₽</span></div>
          </div>

          <div className="form-item">
            <label>Ежемесячный платеж от</label>
            <div className="value" id="monthly-payment" >0<span>₽</span></div>          
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
