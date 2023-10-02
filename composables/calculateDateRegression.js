export const calculateDateRegression = ({
  startingDate,
  gap,
  initialDoseAmount,
  initialDoseMetric: doseMetric,
  doseDeduction,
  finalDose,
}) => {
  debugger;
  const deductionsList = [];
  for (
    let i = initialDoseAmount, counter = 0;
    i >= finalDose;
    i -= doseDeduction, counter++
  ) {
    const date = new Date(startingDate);
    date.setDate(date.getDate() + counter * gap);
    const doseAmount = i;
    const newDose = {
      date,
      doseAmount,
      doseMetric,
      iteration: counter + 1,
    };
    deductionsList.push(newDose);
  }
  return deductionsList;
};
