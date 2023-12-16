const OrdersItem = () => {
  return (
    <div
      className="grid grid-cols-7 px-5 py-3 mx-5 rounded-lg my-5 text-center"
      style={{ border: "1px solid #99cbbe" }}
    >
      <div className="col-span-1"> #12345 </div>
      <div className="col-span-1"> 20oct2023 </div>
      <div className="col-span-1">asmaa khalaf</div>
      <div className="col-span-1">mansoura alzaher st</div>
      <div className="col-span-1">Vitaferrol B12</div>
      <div className="col-span-1">$231,01</div>
      <div className="col-span-1  justify-center inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">delivered</div>
    </div>
  );
};

export default OrdersItem;
