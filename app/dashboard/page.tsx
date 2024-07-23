import Chart from "@/components/Chart";
import Information from "@/components/Information";
import LatestTransactions from "@/components/LatestTransactions";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Information />
      <LatestTransactions />
      <Chart />
    </div>
  );
}
