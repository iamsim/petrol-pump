import { Divider } from "@mui/material";
import DUDetails from "../components/DUDetails";
import PumpDetails from "../components/PumpDetails";
import Credits from "../components/Credits";
import PaymentMode from "../components/PaymentMode";
import Expense from "../components/Expense";
import Result from "../components/Result";

const Dashboard = () => {
  return (
    <>
      <DUDetails />
      <Divider />
      <PumpDetails />
      <Divider />
      <Credits />
      <Divider />
      <PaymentMode />
      <Divider />
      <Expense />
      <Divider />
      <Result />
      <Divider />
    </>
  );
};
export default Dashboard;
