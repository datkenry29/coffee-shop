export const PriceCell = ({value}) => {
  return <span>{Intl.NumberFormat("vi-VN").format(value)} VND</span>;
};
