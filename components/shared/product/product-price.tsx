const ProducPrice = ({ value }: { value: number }) => {
  const fullValue = value.toFixed(2);
  const [intV, floatV] = fullValue.split(".");
  return <>
  <p className="text-2xl">
    <span className="text-xs align-super">$</span>
    <span>{intV}</span>
    <span className="text-xs align-super">.{floatV}</span>

  </p>
  </>;
};

export default ProducPrice;
