import Select from "react-select";
import "./Form.css";

const categoryOptions = [
  { value: "rent", label: "Rent" },
  { value: "groceries", label: "Groceries" },
  { value: "restaurants", label: "Restaurants" },
  { value: "fuel", label: "Fuel" },
  { value: "shopping", label: "Shopping" },
  { value: "utilities", label: "Utilities" },
  { value: "subscriptions", label: "Subscriptions" },
  { value: "medical", label: "Medical" },
  { value: "education", label: "Education" },
  { value: "travel", label: "Travel" },
  { value: "savings", label: "Savings" },
  { value: "loan", label: "Loan Payments" },
  { value: "donations", label: "Donations" },
  { value: "other", label: "Other" }
];

const Form = () => {
  return (
    <div className="form1">
      <form>
        <p>Account *</p>
        <input type="text" required placeholder="SBI"/>
        <p>Transaction name *</p>
        <input type="text" name="name" id="name"  required placeholder="Walmart"/>
        <p>Category *</p>
        <Select options={categoryOptions} required />
        <p>Date *</p>
        <input type="date" required />
        <p>Amount * </p>
        <input type="number" name="money" id="money" required placeholder="80" />
        <p>Note </p>
        <textarea name="note" id="note" placeholder="for meal prep..." />
        <button type="button">Cancel</button>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

export default Form;
