import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Employee {
  jobTitle: string;
  jobRequirements: string[];
}

const employees: Employee[] = [
  {
    jobTitle: "účtovník/účtovníčka",
    jobRequirements: [
      "musí pracovať s peniazmi",
      "musí pracovať na počítači",
      "musí poznať finančné programy",
    ],
  },
  {
    jobTitle: "riaditeľ/riaditeľka",
    jobRequirements: [
      "musí manažovať zamestnancov",
      "musí kupovať jachty",
      "musí často piť pivo",
    ],
  },
  {
    jobTitle: "majstri pivovarov",
    jobRequirements: [
      "musia variť pivo",
      "musia riadiť ľudí",
      "musia vedieť riadiť výrobný proces",
    ],
  },
];

const Employees = () => {
  return (
    <section id="firma" className=" bg-white py-4 min-h-screen">
      <h2 className="text-center font-bald text-7xl mb-6">Zamestnanci</h2>
      <Table className="max-w-4xl mx-auto border-gray-200 border-solid border-2 mb-6 text-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Zamestnanec</TableHead>
            <TableHead>1</TableHead>
            <TableHead>2</TableHead>
            <TableHead className="text-right">3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.jobTitle}>
              <TableCell className="font-medium">{employee.jobTitle}</TableCell>
              <TableCell>{employee.jobRequirements[0]}</TableCell>
              <TableCell>{employee.jobRequirements[1]}</TableCell>
              <TableCell className="text-right">
                {employee.jobRequirements[2]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ol className="max-w-4xl mx-auto text-lg">
        <li>1. Máte minimálne 3 roky praxe a ste dobrý v marketingu</li>
        <li>2. Viete pracovať na počítači v programe Excel</li>
        <li>3. Máte chuť pracovať v mladom kolektíve</li>
        <li>4. Môžete pracovať aj cez víkendy a v noci</li>
        <li>5. Chcete hľadať nové možnosti vo vašej kariére</li>
        <li>6. Snívate o luxusnom firemnom aute</li>
        <li>7. študovali ste na prestížnej univerzite</li>
        <li>8. Chcete pracovať v medzinárodnej firme</li>
        <li>9. Máte záujem pracovať na manažérskej pozícii</li>
        <li>10. Chcete pracovať vo firme, ktorá je známa na celom svete</li>
      </ol>
    </section>
  );
};
export default Employees;
