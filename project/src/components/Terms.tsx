const SchoolTerms = () => {
  return (
    <section className="section" id="school-terms">
      <h2 className="section-title">South Africa Public School Terms</h2>
      
      <table className="min-w-full table-auto text-left">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-2 px-4">Term</th>
            <th className="py-2 px-4">Dates</th>
            <th className="py-2 px-4">Exams/Tests</th>
            <th className="py-2 px-4">Holidays</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-secondary text-white">
            <td className="py-2 px-4">Term 1</td>
            <td className="py-2 px-4">January - March</td>
            <td className="py-2 px-4">End of March</td>
            <td className="py-2 px-4">Human Rights Day (21 March)</td>
          </tr>
          <tr className="bg-white text-secondary">
            <td className="py-2 px-4">Term 2</td>
            <td className="py-2 px-4">April - June</td>
            <td className="py-2 px-4">Mid-June</td>
            <td className="py-2 px-4">Freedom Day (27 April), Workers' Day (1 May)</td>
          </tr>
          <tr className="bg-secondary text-white">
            <td className="py-2 px-4">Term 3</td>
            <td className="py-2 px-4">July - September</td>
            <td className="py-2 px-4">End of September</td>
            <td className="py-2 px-4">Women's Day (9 August)</td>
          </tr>
          <tr className="bg-white text-secondary">
            <td className="py-2 px-4">Term 4</td>
            <td className="py-2 px-4">October - December</td>
            <td className="py-2 px-4">November - December</td>
            <td className="py-2 px-4">Day of Reconciliation (16 December)</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SchoolTerms;
