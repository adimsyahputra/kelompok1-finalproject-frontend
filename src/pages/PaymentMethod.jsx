// PaymentMethod.jsx
const PaymentMethod = ({ selectedPaymentMethod, onChange }) => {
    const paymentMethods = ["Credit Card", "Debit Card", "PayPal", "Cash"];
  
    return (
      <div>
        {paymentMethods.map((method) => (
          <div key={method} className="flex items-center space-x-2 mt-2">
            <input
              type="radio"
              id={method}
              name="paymentMethod"
              value={method}
              checked={selectedPaymentMethod === method}
              onChange={() => onChange(method)}
              className="form-radio"
            />
            <label htmlFor={method} className="text-sm text-[#321313]">
              {method}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default PaymentMethod;
  