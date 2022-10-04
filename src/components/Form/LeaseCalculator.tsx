import './style.css'
import LoanJS from 'loanjs'
import { useState } from 'react';

export default function LeaseCalculator() {

  const [values, setValues] = useState({
    "total-cost": 3300000,
    "initial-fee": 420000,
    "lease-term": 60
  });
  
  const [installments, setInstallments] = useState([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    calculate(10000, 30, 4);
  }

  const calculate = (amount: number, years: number, rate: number) => {
    var loan = new LoanJS.Loan(amount, years * 12, rate);
    setInstallments(loan.installments);
  }


  return (
    <div className="lease-calculator-container">
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <form onSubmit={handleSubmit} className="lease-calculator-form">
        <div className="lease-form-row1">
          
          <div className="form-item">
            <label htmlFor="total-cost">Стоимость автомобиля</label>
            <input
              type="number"
              id="total-cost"
              value={values["total-cost"]}
            />
            <input
              type="range"
              id="total-cost-range"
              className="input-range"
              min="1000000"
              max="6000000"
              value={values["total-cost"]}
            />
          </div>

          <div className="form-item">
            <label htmlFor="initial-fee">Первоначальный взнос</label>
            <input
              type="number"
              id="initial-fee"
              value={values["initial-fee"]}
            />
            <input
              type="range"
              id="initial-fee-range"
              className="input-range"
              value={values["initial-fee"]}
              min="10%"
              max="60%"
            />
            
          </div>

          <div className="form-item">
            <label htmlFor="lease-term">Срок лизинга</label>
            <input
              type="number"
              id="lease-term"
              value={values["lease-term"]}
            />
            
            <input
              type="range"
              id="lease-term-range"
              className="input-range"
              value={values["lease-term"]}
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